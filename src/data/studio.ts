// 사이트에 보이는 가격·상품·문구는 전부 여기서 고칩니다.
// 컴포넌트는 이 값을 그리기만 합니다.

export const CONTACT_EMAIL = 'rywls123450@gmail.com'

export const BUSINESS = {
  name: '교랑(KYORANG)',
  ceo: '교진',
  bizNo: '832-01-02741',
  mailOrderNo: '2023-마산합포-0234',
}

// ── 맞춤 제작 패키지 ──────────────────────────────
export interface Package {
  id: string
  name: string
  price: string // 화면 표기 그대로
  note: string
  desc: string
  includes: string[]
  period: string
  featured?: boolean
}

export const PACKAGES: Package[] = [
  {
    id: 'landing',
    name: '원페이지 랜딩',
    price: '10만원',
    note: 'VAT 별도',
    desc: '가게·이벤트·앱 소개처럼 한 화면으로 충분한 경우.',
    includes: [
      '반응형 1페이지 (PC·모바일)',
      '문의 폼 → 메일 알림',
      '기본 SEO · 공유 미리보기',
      '도메인 연결 · 무료 호스팅 세팅',
    ],
    period: '약 1~2주',
  },
  {
    id: 'brand',
    name: '브랜드 홈페이지',
    price: '30만원~',
    note: 'VAT 별도 · 견적에 따라 상이',
    desc: '회사·스튜디오·병원처럼 여러 페이지로 신뢰를 보여줘야 할 때.',
    includes: [
      '5~7페이지 (소개·서비스·포트폴리오·문의 등)',
      '공지·포트폴리오 직접 수정 가능',
      '약관·개인정보처리방침 페이지',
      '네이버·구글 검색 등록',
    ],
    period: '약 3~4주',
    featured: true,
  },
  {
    id: 'custom',
    name: '맞춤 웹서비스',
    price: '견적 문의',
    note: '기능에 따라 산정',
    desc: '예약·회원·관리자 화면처럼 기능이 필요한 사이트와 업무 자동화.',
    includes: [
      '회원 · 예약 · 결제 등 기능 개발',
      '관리자 화면',
      '엑셀·문서 자동 생성, 외부 API 연동',
      '데이터베이스 설계',
    ],
    period: '범위에 따라 협의',
  },
]

export const MAINTENANCE = {
  price: '월 5만원~',
  desc: '문구·이미지 수정, 오류 대응, 서버·도메인 관리를 맡아드려요.',
}

// ── 완성형 템플릿 ────────────────────────────────
// ready: true 로 바꾸면 구매 신청을 받습니다. 파일이 준비되기 전에는 false 로 두세요.
export interface Template {
  slug: string
  name: string
  category: string
  price: number // 원, VAT 포함
  summary: string
  features: string[]
  stack: string
  ready: boolean
  color: string // 미리보기 배경색
}

export const TEMPLATES: Template[] = [
  {
    slug: 'cafe-landing',
    name: '카페 · 매장 랜딩',
    category: '원페이지',
    price: 49000,
    summary: '메뉴·위치·영업시간·예약 링크를 한 화면에. 동네 가게용.',
    features: ['메뉴 섹션', '지도·영업시간', '인스타그램 연결', '모바일 우선 디자인'],
    stack: 'Next.js · Tailwind',
    ready: false,
    color: '#1F4D3A',
  },
  {
    slug: 'studio-portfolio',
    name: '스튜디오 포트폴리오',
    category: '포트폴리오',
    price: 59000,
    summary: '사진·디자인·인테리어 작업물을 크게 보여주는 갤러리형.',
    features: ['작업물 갤러리', '프로젝트 상세', '견적 문의 폼', '다크 모드'],
    stack: 'Next.js · Tailwind',
    ready: false,
    color: '#16181D',
  },
  {
    slug: 'company-basic',
    name: '소기업 홈페이지',
    category: '기업형',
    price: 89000,
    summary: '회사소개·서비스·공지·문의를 갖춘 기본 기업 사이트.',
    features: ['5페이지 구성', '공지사항', '약관·개인정보 페이지', '문의 메일 발송'],
    stack: 'Next.js · Tailwind',
    ready: false,
    color: '#C9A45C',
  },
]

export const findTemplate = (slug: string) => TEMPLATES.find((t) => t.slug === slug)

export const won = (n: number) => n.toLocaleString('ko-KR') + '원'

export const INQUIRY_TYPES = [
  '웹사이트 제작 견적',
  '템플릿 문의',
  '유지보수',
  '교랑 앱 문의',
  '기타',
] as const

export const BUDGETS = ['미정', '100만원 미만', '100~300만원', '300~500만원', '500만원 이상'] as const

export const FAQS = [
  {
    q: '제작 기간은 얼마나 걸리나요?',
    a: '원페이지는 보통 1~2주, 여러 페이지 홈페이지는 3~4주 정도예요. 자료(문구·사진)가 빨리 준비될수록 빨라져요.',
  },
  {
    q: '결제는 어떻게 하나요?',
    a: '50만원 미만 제작은 오픈 시 한 번에 계좌이체로 받아요. 50만원 이상은 계약 시 착수금 50%, 오픈 시 잔금 50%로 나눠 받아요. 템플릿은 구매 신청 후 안내드리는 계좌로 입금하시면 확인 후 메일로 파일을 보내드려요. 세금계산서·현금영수증 발행 가능해요.',
  },
  {
    q: '수정은 몇 번까지 되나요?',
    a: '견적서에 적힌 횟수(보통 디자인 2회, 오픈 후 1회)까지는 무료예요. 그 이후나 범위를 넘는 기능 추가는 따로 안내드려요.',
  },
  {
    q: '호스팅이나 도메인 비용이 따로 드나요?',
    a: '도메인은 연 1~2만원 정도 고객님 명의로 구입하시는 걸 권해요. 일반 홈페이지는 무료 호스팅(Vercel 등)으로 충분한 경우가 많아요.',
  },
  {
    q: '템플릿을 사면 직접 고칠 수 있나요?',
    a: '네. 소스 코드 전체와 설명서를 드려요. 직접 고치기 어려우시면 설치·수정 대행도 따로 맡기실 수 있어요.',
  },
  {
    q: '교랑 앱(교랑톡·교랑무드·교랑빌리지) 문의도 여기서 하나요?',
    a: '네. 문의 유형에서 "교랑 앱 문의"를 골라 보내주시면 돼요. 계정 삭제는 각 앱의 계정 삭제 안내 페이지를 참고해 주세요.',
  },
]
