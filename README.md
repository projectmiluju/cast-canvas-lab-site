# CastCanvas Lab Site

CastCanvas Lab은 PDF 문서, 이미지, 노트를 하나의 무한 캔버스 위에서 연결해 리서치 흐름을 정리하는 공간형 워크스페이스입니다.

> Notion보다 더 공간적으로, Figma보다 더 문서 친화적으로.

## 프로젝트 개요

CastCanvas Lab은 아래 4개 레포지토리로 구성됩니다.

| 레포 | 역할 |
| --- | --- |
| `cast-canvas-lab-fe` | 워크스페이스 프론트엔드 |
| `cast-canvas-lab-be` | 메인 백엔드 API 서버 |
| `cast-canvas-lab-collab` | 실시간 협업 서버 |
| `cast-canvas-lab-site` | 퍼블릭 랜딩 사이트 |

시스템 경계와 레포 간 책임은 [ARCHITECTURE.md](./ARCHITECTURE.md)를 기준으로 유지합니다.

## 이 레포의 역할

`cast-canvas-lab-site`는 제품을 외부에 소개하는 퍼블릭 웹사이트입니다. 현재 제공 기능, 제품 방향, 공개 문서, 스크린샷과 앱 진입 링크를 명확히 전달하는 역할을 맡습니다.

이 레포가 담당하는 범위:

- 랜딩 페이지
- 기능 소개와 제품 메시지
- 공개 문서 및 릴리스성 콘텐츠
- 스크린샷/데모 소개
- 실제 앱 진입 링크 제공

이 레포가 담당하지 않는 범위:

- 인증 사용자용 워크스페이스 기능
- 메인 비즈니스 API
- 실시간 협업 전송 계층

제품 범위와 표현은 [MVP.md](./MVP.md) 및 [ARCHITECTURE.md](./ARCHITECTURE.md)를 기준으로 유지합니다.

## 기술 스택

| 항목 | 내용 |
| --- | --- |
| Framework | Next.js 16.1.6 |
| UI | React 19.2.3 |
| Language | TypeScript 5 |
| Styling | SCSS |
| Quality | ESLint, Prettier |
| Hooks | Husky, lint-staged, commitlint |
| Package Manager | pnpm |

## 시작하기

요구 사항:

- Node.js
- pnpm

1. 의존성을 설치합니다.

```bash
pnpm install
```

2. 개발 서버를 실행합니다.

```bash
pnpm dev
```

기본 로컬 접속 정보:

| 항목 | 값 |
| --- | --- |
| Site | `http://localhost:3000` |

## 주요 명령어

| 명령어 | 설명 |
| --- | --- |
| `pnpm dev` | 개발 서버 실행 |
| `pnpm build` | webpack 기반 정적 프로덕션 빌드 (`out/` 생성) |
| `pnpm start` | 빌드 결과 실행 |
| `pnpm lint` | ESLint 실행 |
| `pnpm format` | Prettier 포맷 적용 |

## 배포

프로덕션 배포 권장 경로는 **S3 + CloudFront + Route 53 + ACM**입니다.

- 프로덕션 도메인: `https://castcanvaslab.com`
- 보조 도메인: `https://www.castcanvaslab.com` -> apex redirect

이 프로젝트는 정적 사이트로 export되며, 실제 배포 절차와 DNS 연결 체크리스트는 [DEPLOYMENT.md](./DEPLOYMENT.md)에 정리되어 있습니다.

## 프로젝트 구조

```text
src/
└── app/
    ├── layout.tsx       # 전역 레이아웃과 메타데이터
    ├── page.tsx         # 메인 랜딩 페이지
    ├── globals.scss     # 전역 스타일
    ├── page.module.scss # 홈 페이지 전용 스타일
    └── favicon.ico

public/                  # 정적 에셋
```

현재는 App Router 기반의 단일 랜딩 구조이며, 공개 문서와 제품 소개 페이지를 점진적으로 확장하는 방향을 전제로 합니다.

## 협업 규칙

- 커밋 메시지는 [Conventional Commits](https://www.conventionalcommits.org/) 형식을 사용하며 `commit-msg`에서 `commitlint`로 검사합니다.
- `pre-commit`에서 `lint-staged`와 `tsc --noEmit`이 실행되고, `pre-push`에서 `pnpm build`가 실행됩니다.
- 공개 사이트 문구는 [MVP.md](./MVP.md)와 [ARCHITECTURE.md](./ARCHITECTURE.md)와 모순되지 않게 유지합니다.
- 아직 구현되지 않은 기능은 완료된 것처럼 표현하지 않습니다.
