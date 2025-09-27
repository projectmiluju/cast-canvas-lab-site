# CastCanvas Lab — Site

CastCanvas Lab은 공간 기반 리서치 워크스페이스입니다.
PDF 문서와 레퍼런스 이미지를 무한 캔버스 위에 자유롭게 배치하고, 노트와 연결선으로 아이디어를 연결할 수 있습니다.

> Notion보다 더 공간적으로, Figma보다 더 문서 친화적으로.

---

## 서비스 구성

CastCanvas Lab은 다음 레포지토리로 구성됩니다.

| 레포                     | 역할                                 |
| ------------------------ | ------------------------------------ |
| `cast-canvas-lab-fe`     | 워크스페이스 프론트엔드 앱           |
| `cast-canvas-lab-be`     | 메인 백엔드 API 서버                 |
| `cast-canvas-lab-collab` | 실시간 협업 서버 (Yjs/WebSocket)     |
| `cast-canvas-lab-site`   | 퍼블릭 랜딩 사이트 (이 레포)         |

시스템 전체 구조와 레포 간 책임 경계는 [ARCHITECTURE.md](./ARCHITECTURE.md)를 참고하세요.

---

## 이 레포의 역할

`cast-canvas-lab-site`는 제품을 설명하고, 현재 제공 기능과 향후 계획을 명확히 구분해서 보여주는 퍼블릭 웹사이트입니다.

이 레포가 담당하는 범위:

- 랜딩 페이지
- 기능 소개 페이지
- 퍼블릭 문서 및 릴리스성 콘텐츠
- 스크린샷 / 데모 소개
- 실제 앱으로 진입하는 링크 제공

이 레포가 담당하지 않는 범위:

- 워크스페이스 캔버스 로직
- 인증된 사용자용 앱 기능
- 메타데이터 API
- 실시간 협업 전송 계층

MVP 기준 제품 범위와 용어는 [MVP.md](./MVP.md)를 기준으로 유지합니다.

---

## 기술 스택

| 항목 | 버전 / 내용 |
| ---- | ----------- |
| Framework | Next.js 16.1.6 |
| UI | React 19.2.3 |
| Language | TypeScript 5 |
| Styling | SCSS (`sass`) |
| Lint | ESLint 9 + `eslint-config-next` |
| Format | Prettier 3 |
| Git Hooks | Husky + lint-staged + commitlint |
| Package Manager | pnpm |

---

## 로컬 개발 환경 설정

**요구 사항:** Node.js, pnpm

**1. 의존성 설치**

```bash
pnpm install
```

**2. 개발 서버 실행**

```bash
pnpm dev
```

기본 접속 정보:

| 항목 | 값 |
| ---- | -- |
| Site | `http://localhost:3000` |

---

## 주요 명령어

| 명령어            | 설명                    |
| ----------------- | ----------------------- |
| `pnpm dev`        | 개발 서버 실행          |
| `pnpm build`      | 프로덕션 빌드           |
| `pnpm start`      | 빌드 결과 실행          |
| `pnpm lint`       | ESLint 실행             |
| `pnpm format`     | Prettier 포맷 적용      |

---

## 프로젝트 구조

```text
src/
└── app/                # Next.js App Router 엔트리
    ├── layout.tsx      # 전역 레이아웃 / 메타데이터
    ├── page.tsx        # 메인 랜딩 페이지
    ├── globals.scss    # 전역 스타일
    └── page.module.scss# 홈 페이지 전용 스타일

public/                 # 정적 에셋
```

현재 레포는 초기 Next.js App Router 구조를 기반으로 정리되어 있으며, 제품 소개 페이지와 공개 문서 구조를 점진적으로 확장하는 방향을 전제로 합니다.

---

## 코드 기여 규칙

- 커밋 메시지는 [Conventional Commits](https://www.conventionalcommits.org/) 형식을 따릅니다
- `pre-commit`에서 `lint-staged`와 `tsc --noEmit`이 실행됩니다
- `pre-push`에서 `pnpm build`가 실행됩니다
- 커밋 메시지는 `commitlint`로 검사됩니다
- 공개 사이트 문구는 `ARCHITECTURE.md`, `MVP.md`와 모순되지 않게 유지하세요
- 아직 구현되지 않은 기능은 완료된 것처럼 표현하지 마세요
