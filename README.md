# kyorang-www (kyorang.com)

> 교랑(Kyorang) 웹 스튜디오 — 웹사이트 맞춤 제작 · 템플릿 판매

- **도메인**: [kyorang.com](https://kyorang.com)
- **배포**: Vercel (Pro). 서버 함수(문의·주문 메일)는 `vercel.json` 에서 서울 리전(`icn1`)으로 고정

### 무엇을 고치려면

| 바꿀 것 | 파일 |
|---|---|
| 제작 패키지 가격·구성, 템플릿 상품, FAQ, 포트폴리오, 사업자 정보 | `src/data/studio.ts` |
| 템플릿 판매 시작 | `src/data/studio.ts` 에서 해당 템플릿 `ready: true` |
| 문의 메일 | `src/app/api/contact/route.ts` |
| 주문 메일 (계좌이체) | `src/app/api/order/route.ts` |
| 환불 정책 | `src/app/refund/page.tsx` |

### 주문 흐름 (템플릿)

1. 손님이 `/templates/<slug>` 에서 구매 신청 → 주문 메일이 `GMAIL_USER` 로 오고, 손님에게는 입금 안내 메일이 간다.
2. 입금을 확인하면 손님 메일로 템플릿 파일(zip)과 설명서를 직접 보낸다.
3. 주문은 DB 없이 메일로만 남는다. 주문이 많아지면 Supabase 테이블로 옮긴다.

### 관리자 페이지 (`/admin`)

후기 승인·공개 취소, Q&A 답변(질문자에게 알림 메일 선택)·숨김, 삭제를 한 화면에서 한다.
Vercel 환경 변수 두 개가 있어야 열린다.

| 변수 | 값 |
|---|---|
| `ADMIN_PASSWORD` | 관리자 비밀번호 (8자 이상). 바꾸면 기존 로그인은 모두 풀린다 |
| `SUPABASE_SECRET_KEY` | Supabase → Project Settings → API Keys 의 secret 키 (`sb_secret_...`). 서버에서만 쓴다 |

### 앱 관련 페이지 (지우지 말 것)

스토어 심사·앱 인증에 연결된 주소라 그대로 둔다:
`/privacy`, `/terms`, `/youth`, `/mood/delete-account`, `/village/delete-account`,
`/village/child-safety`, `/confirmed`, 그리고 `/?code=...` → `/confirmed` 리다이렉트.

---

## 목차

1. [개요](#개요)
2. [기술 스택](#기술-스택)
3. [페이지 / 섹션 구성](#페이지--섹션-구성)
4. [프로젝트 구조](#프로젝트-구조)
5. [시작하기](#시작하기)
6. [환경 변수](#환경-변수)
7. [빌드 & 배포](#빌드--배포)
8. [디자인 시스템](#디자인-시스템)
9. [로드맵](#로드맵)

---

## 개요

교랑은 사람들의 일상과 감정, 관계를 잇는 앱과 서비스를 만듭니다. kyorang-www는 이러한 교랑의 정체성과 교랑 패밀리 제품군을 한곳에서 소개하는 공식 창구입니다.

방문자는 이 사이트에서 다음을 확인할 수 있습니다.

- 교랑이라는 회사가 무엇을 추구하는지 (비전 / 가치)
- 교랑이 만든 앱·서비스 소개 (교랑 패밀리)
- 문의 / 연락 채널

---

## 기술 스택

| 항목 | 기술 |
|------|------|
| 프레임워크 | Next.js 14 (App Router) |
| 언어 | TypeScript |
| 스타일링 | Tailwind CSS |
| 폰트 최적화 | `next/font` |
| 호스팅 / 배포 | Vercel |
| (선택) 문의 폼 백엔드 | Supabase |

> 회사 소개 사이트 특성상 핵심은 정적 콘텐츠입니다. 문의 폼·뉴스레터 등 데이터 저장이 필요한 경우에만 Supabase를 사용하며, 불필요하면 의존성에서 제거할 수 있습니다.

---

## 페이지 / 섹션 구성

> 아래는 일반적인 회사 소개 사이트 기준 구성안입니다. 실제 구현과 다르면 이 섹션만 교체하면 됩니다.

| 섹션 | 설명 |
|------|------|
| **Hero** | 브랜드 슬로건 / 첫인상. 교랑의 핵심 메시지 |
| **회사 소개** | 교랑이 무엇을 하는 회사인지 |
| **비전 / 가치** | 추구하는 방향과 핵심 가치 |
| **교랑 패밀리** | 교랑이 만든 앱·서비스 소개 (교랑톡, 교랑빌리지 등) |
| **문의 (Contact)** | 연락 채널 / 문의 폼 |

---

## 프로젝트 구조

```
kyorang-www/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (폰트, 메타데이터)
│   ├── page.tsx            # 메인 페이지 (랜딩)
│   ├── globals.css         # Tailwind 전역 스타일
│   └── (sections)/         # 섹션별 컴포넌트 또는 라우트
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Vision.tsx
│   ├── ProductFamily.tsx   # 교랑 패밀리 소개
│   └── Contact.tsx
├── public/
│   └── images/             # 로고, 앱 아이콘, OG 이미지
├── lib/
│   └── supabase.ts         # (선택) 문의 폼용 클라이언트
├── tailwind.config.ts
├── next.config.js
└── README.md
```

---

## 시작하기

### 사전 요구사항
- Node.js 18.17 이상
- npm / yarn / pnpm 중 택1

### 설치 & 개발 서버
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 결과를 확인합니다.

`app/page.tsx`를 수정하면 페이지가 자동으로 갱신됩니다.

---

## 환경 변수

Vercel 프로젝트 설정(또는 로컬 `.env.local`)에 넣습니다.

```bash
GMAIL_USER=<문의·주문 메일을 받을 Gmail 주소>
GMAIL_APP_PASSWORD=<Gmail 앱 비밀번호>
# 템플릿 주문 안내 메일·완료 화면에 보여줄 입금 계좌. 비우면 "계좌는 메일로 안내" 로 나온다.
BANK_ACCOUNT="은행 계좌번호 (예금주 이름)"
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
```

> `.env.local`은 절대 커밋하지 않습니다. (`.gitignore`에 포함)

---

## 빌드 & 배포

### 프로덕션 빌드
```bash
npm run build
npm run start
```

### Vercel 배포
1. Vercel에 GitHub 레포(`kyorang-www`) 연결
2. 환경 변수 등록 (Supabase 사용 시)
3. 커스텀 도메인 `kyorang.com` 연결
4. `main` 브랜치 push 시 자동 배포

---

## 디자인 시스템

교랑 패밀리는 다크 퍼플을 기반으로 한 통일된 비주얼 아이덴티티를 사용합니다. 회사 소개 사이트에서도 이 톤을 유지하는 것을 권장합니다.

| 항목 | 값 |
|------|-----|
| 액센트 | `#7c3aed` |
| 다크 배경 | `#060610` / `#080810` |

- UI 이모지는 최소한으로 사용
- 모든 색상은 Tailwind 토큰(`tailwind.config.ts`)으로 관리, 하드코딩 지양

---

## 로드맵

### 현재 교랑 패밀리
| 제품 | 상태 |
|------|------|
| 교랑톡 (KyorangTalk) | 운영/테스트 중 |
| 교랑빌리지 (Kyorang Village) | 개발 중 |
| **kyorang-www** | 본 프로젝트 |

### 예정
- [ ] **교랑샵** 추가 — 패밀리 제품군에 굿즈 샵 합류 예정. 추가 시 "교랑 패밀리" 섹션에 반영

---

## 정보

- 도메인: [kyorang.com](https://kyorang.com)
- GitHub: [`kyojin00`](https://github.com/kyojin00)
- 본 프로젝트는 교랑 비공개 프로젝트입니다.