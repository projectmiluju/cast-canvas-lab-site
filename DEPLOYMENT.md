# CastCanvas Lab Site Deployment

## Goal

Deploy the public website as a static site on AWS and connect:

- `castcanvaslab.com`
- `www.castcanvaslab.com`

The recommended production path for this repository is:

- **Amazon S3** for static origin
- **Amazon CloudFront** for CDN + HTTPS
- **Amazon Route 53** for DNS
- **AWS Certificate Manager (ACM)** for TLS

If the domain was purchased from **Gabia**, you can use either of these DNS models:

1. keep DNS at Gabia and add the required AWS records manually
2. move authoritative DNS to Route 53 by changing the nameservers at Gabia

## Why This Topology

- Lowest infrastructure cost for a static marketing site
- Good SEO for pre-rendered HTML
- Clean separation from the actual app and backend repositories
- Simple future model:
  - `castcanvaslab.com` = public site
  - `app.castcanvaslab.com` = workspace app
  - API/backend stays separate

## Current Repository Assumptions

This repository is configured for static export:

- `next.config.ts` uses `output: 'export'`
- production build uses `next build --webpack`
- production build output is generated into `out/`

Build locally with:

```bash
pnpm build
```

`next build` on the default Turbopack path did not complete reliably in the current local environment, so the project build script is pinned to the stable webpack build path for deployment.

## Recommended AWS Topology

```text
Git repository
   |
   v
CI build: pnpm build
   |
   v
static files in out/
   |
   v
S3 bucket (private origin)
   |
   v
CloudFront distribution
   |
   +-- ACM certificate (us-east-1)
   +-- custom domains
   |
   v
Route 53
```

## Bucket Strategy

Use two buckets:

1. `castcanvaslab.com`
   - stores static site files from `out/`
   - keep bucket private
   - allow access only through CloudFront Origin Access Control

2. `www.castcanvaslab.com`
   - optional redirect bucket if you prefer S3 website redirect
   - in most cases, CloudFront redirect is cleaner

## Recommended Domain Strategy

- Primary domain: `castcanvaslab.com`
- Redirect: `www.castcanvaslab.com` -> `castcanvaslab.com`

If the domain registrar is Gabia:

- registrar ownership stays at Gabia
- DNS can stay at Gabia or be delegated to Route 53
- TLS and CDN are still handled in AWS

Use one CloudFront distribution for the primary site and handle `www` redirect either:

- with a second lightweight CloudFront distribution, or
- with S3 website redirect bucket + separate CloudFront

For simplicity, many teams use:

- distribution A: serves `castcanvaslab.com`
- distribution B: redirects `www.castcanvaslab.com` to apex

## Setup Steps

### 1. Build the site

```bash
pnpm install
pnpm build
```

Expected output directory:

```text
out/
```

### 2. Create ACM certificate

CloudFront requires the certificate in **`us-east-1`**.

Request a public certificate for:

- `castcanvaslab.com`
- `www.castcanvaslab.com`

Validate through DNS.

If DNS remains at Gabia:

- ACM will show CNAME validation records
- add those CNAME records in the Gabia DNS management screen

If DNS moves to Route 53:

- create a hosted zone in Route 53
- update the domain nameservers at Gabia to the Route 53 nameservers
- then ACM DNS validation can be completed inside Route 53

### 3. Create S3 origin bucket

Create bucket:

- `castcanvaslab.com`

Recommended settings:

- Block all public access: enabled
- Versioning: enabled
- Static website hosting: disabled when using private S3 origin + OAC

Upload the contents of `out/` to the bucket root.

### 4. Create CloudFront distribution

Origin:

- S3 bucket `castcanvaslab.com`

Settings:

- Viewer protocol policy: Redirect HTTP to HTTPS
- Alternate domain names:
  - `castcanvaslab.com`
- Custom SSL certificate:
  - ACM certificate created in `us-east-1`
- Default root object:
  - `index.html`
- Enable compression: yes

Security:

- Create and attach **Origin Access Control**
- Update the S3 bucket policy to allow only that CloudFront distribution

### 5. Add error handling for static routing

Because this is a static Next.js export, configure CloudFront custom error responses:

- `403` -> `/404.html` or `/index.html` depending on routing strategy
- `404` -> `/404.html` or `/index.html` depending on routing strategy

For the current site structure, `404.html` is sufficient because routes are pre-rendered.

If later you introduce client-only routing behavior, revisit this rule.

### 6. Create Route 53 records

In the hosted zone for `castcanvaslab.com`:

- `A`/`AAAA` alias for `castcanvaslab.com` -> CloudFront distribution

For `www`:

- either point to a redirect distribution
- or point to a redirect bucket fronted by CloudFront

If you keep DNS at Gabia instead of Route 53:

- create the equivalent DNS records in Gabia DNS management
- apex/root domain should point to CloudFront using the record type supported by Gabia
- `www` should point to the redirect target you configure

Because DNS provider UIs differ, confirm whether Gabia supports:

- ALIAS/ANAME style apex mapping to CloudFront, or
- CNAME flattening at the root

If Gabia does not support apex aliasing cleanly, use Route 53 for authoritative DNS.

### 7. Configure `www` redirect

Recommended result:

- `https://www.castcanvaslab.com` redirects to `https://castcanvaslab.com`

## Deployment Workflow

Recommended CI/CD flow:

1. push to `main`
2. CI runs `pnpm install`
3. CI runs `pnpm lint`
4. CI runs `pnpm build`
5. CI syncs `out/` to S3
6. CI creates CloudFront invalidation

Example deploy commands:

```bash
aws s3 sync out/ s3://castcanvaslab.com --delete
aws cloudfront create-invalidation --distribution-id <DIST_ID> --paths "/*"
```

## GitHub Actions Automation

This repository includes:

- `.github/workflows/deploy.yml`

Trigger:

- push to `main`
- manual run via `workflow_dispatch`

Required GitHub Secrets:

- `AWS_DEPLOY_ROLE_ARN`
  - IAM role assumed by GitHub Actions through OIDC
- `AWS_CLOUDFRONT_DISTRIBUTION_ID`
  - production distribution ID for `castcanvaslab.com`

Recommended AWS setup for GitHub Actions:

1. create an IAM role for GitHub OIDC
2. trust the GitHub repository
3. grant:
   - `s3:ListBucket`
   - `s3:PutObject`
   - `s3:DeleteObject`
   - `cloudfront:CreateInvalidation`
4. store the role ARN and distribution ID in repository secrets

## SEO Notes

This approach is SEO-safe for the current site because:

- pages are pre-rendered to HTML
- canonical metadata is included at build time
- Open Graph and Twitter metadata are included at build time

Still recommended:

- add a real OG image asset
- connect Search Console after domain activation

## Future Architecture Guidance

When frontend and backend are connected later, keep responsibilities separate:

- `castcanvaslab.com`: public site on S3 + CloudFront
- `app.castcanvaslab.com`: actual product frontend
- backend API and collaboration services remain separate origins

Only move this site off static hosting if the **site repository itself** needs:

- server-side rendering from live backend data
- dynamic SEO pages generated on request
- middleware/rewrites that cannot be handled by static hosting

## Gabia-Specific Recommendation

For the cleanest AWS setup, the practical recommendation is:

1. keep the domain registration at Gabia
2. create a Route 53 hosted zone for `castcanvaslab.com`
3. change the nameservers at Gabia to the Route 53 nameservers
4. manage ACM validation and CloudFront DNS records in Route 53

This avoids root-domain alias limitations that can exist with external DNS providers.

## Verification Checklist

After deployment, verify:

1. `https://castcanvaslab.com` loads successfully
2. `https://www.castcanvaslab.com` redirects to apex
3. page source contains canonical URL `https://castcanvaslab.com/`
4. HTTPS certificate is valid
5. a new deploy updates S3 and invalidates CloudFront correctly
