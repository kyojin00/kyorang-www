// 사이트에 보이는 가격·상품·문구는 전부 여기서 고칩니다.
// 컴포넌트는 이 값을 그리기만 합니다.

// 검색엔진에 알리는 대표 주소. Vercel 에서 kyorang.com → www.kyorang.com 으로 넘겨주므로
// 사이트맵·robots·메타데이터는 리디렉션 없이 바로 열리는 www 주소를 쓴다.
export const SITE_URL = 'https://www.kyorang.com'

export const CONTACT_EMAIL = 'rywls123450@gmail.com'

// 전자상거래법상 사이트에 밝혀야 하는 사업자 정보 (사업자등록증 기준)
export const BUSINESS = {
  name: '교랑',
  ceo: '황교진',
  bizNo: '832-01-02741',
  mailOrderNo: '2023-마산합포-0234',
  address: '전남광주통합특별시 여수시 무선7길 18-6, 202호',
  phone: '', // 대표 전화 — 비우면 표시 안 함. 통신판매업자는 표시해야 하니 꼭 채우기
  hosting: 'Vercel Inc.',
}

// ── 만드는 것 ─────────────────────────────────
export const SERVICES = [
  { t: '자동화 · 매크로', d: '매일 반복하는 클릭·입력·복사 붙여넣기, 엑셀 정리, 웹에서 자료 모으기를 버튼 한 번으로.' },
  { t: '맞춤 프로그램', d: '견적서·보고서 자동 작성, 재고·거래처 관리, ERP 연동처럼 우리 회사 일에 딱 맞는 프로그램.' },
  { t: '웹사이트', d: '가게 소개 한 장부터 회사 홈페이지, 예약·회원 기능이 있는 웹서비스까지.' },
  { t: '앱', d: '직접 만들어 스토어에 올리고 운영 중인 Android 앱 경험으로 앱도 만들어요.' },
]

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
    name: '맞춤 프로그램',
    price: '견적 문의',
    note: '기능에 따라 산정',
    desc: '자동화·매크로, 사내 업무 프로그램, 웹서비스, 앱까지. 필요한 일을 듣고 설계해요.',
    includes: [
      '예약 · 회원 · 결제 웹서비스와 관리자 화면',
      '사내 관리 시스템 · ERP 연동',
      '엑셀 · 한글 · PDF 문서 자동화',
      '반복 업무 매크로 · 자료 수집 자동화',
      'Android 앱',
    ],
    period: '범위에 따라 협의',
  },
]

export const MAINTENANCE = {
  price: '월 3만원',
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

// ── 포트폴리오: 사내 업무 시스템 사례 ──────────────
// 고객사 이름·실제 화면·데이터는 싣지 않는다. 하는 일과 구조만 소개한다.
export const CASE_STUDY = {
  kind: '사내 업무 시스템 · 직접 개발·운영',
  title: '회계 ERP 연동 업무지원 시스템',
  client: '조사·컨설팅 분야 중소기업',
  summary:
    '회계 ERP에 흩어진 전표·거래처·품목을 사내 데이터베이스로 모으고, 그 위에서 보고서·문서·입찰 업무를 자동화한 웹 시스템이에요. 기획부터 개발, 서버 운영까지 혼자 맡고 있어요.',
  flow: [
    { from: '회계 ERP', note: 'Open API로 전표·거래처·품목 수집' },
    { from: '사내 DB', note: '10분마다 자동 적재 · 매일 백업' },
    { from: '업무 화면', note: '보고서 · 문서 · 입찰 · 경비' },
  ],
  features: [
    { t: '경영 보고서 자동 작성', d: '집계는 SQL이 하고, AI는 완성된 숫자를 문장으로만 풀어요. 숫자가 틀릴 일이 없어요.' },
    { t: '문서 자동 생성', d: '한글(HWP/HWPX)·PDF·엑셀 보고서와 제안서 양식을 데이터로 채워 만들어요.' },
    { t: '공공 입찰 지원', d: '나라장터 공고를 평일 하루 세 번 자동으로 모으고, 투찰 금액 계산을 도와줘요.' },
    { t: '거래내역 정리', d: '은행·카드사 엑셀을 올리면 경비·장부 형식으로 정리해요.' },
    { t: '서류 내용 추출', d: 'PDF 시험성적서·증빙에서 필요한 값을 읽어 등록 초안을 만들어요. 등록은 사람이 확인 후 해요.' },
    { t: '결재 · 문서함', d: '사내 결재와 자료 보관을 한 화면에서 처리해요.' },
  ],
  principles: ['ERP에는 쓰지 않고 읽기만 해요', '금액은 AI가 만들지 않아요', '지표 정의는 한 곳에서만 관리해요'],
  stack: ['Python', 'Flask', 'MySQL', 'Nginx · Gunicorn', 'Linux 서버 직접 운영', 'AI API'],
}

// ── 고객 후기 ──────────────────────────────────
// 실제로 받은 후기만, 고객 동의를 받고 올린다. 지어낸 후기는 표시광고법 위반이다.
// 비어 있으면 사이트에 후기 섹션이 나오지 않는다.
export interface Review {
  name: string // 예: '김○○ 님' 처럼 일부 가림
  project: string // 예: '카페 랜딩 페이지'
  text: string
  date: string // 예: '2026.11'
}

export const REVIEWS: Review[] = []

export const INQUIRY_TYPES = [
  '웹사이트 제작 견적',
  '프로그램 · 자동화 견적',
  '템플릿 문의',
  '유지보수',
  '교랑 앱 문의',
  '기타',
] as const

export const BUDGETS = ['미정', '100만원 미만', '100~300만원', '300~500만원', '500만원 이상'] as const

export const FAQS = [
  {
    q: '웹사이트 말고 프로그램이나 매크로도 만드나요?',
    a: '네. 반복 업무 매크로, 엑셀·문서 자동화, 웹 자료 수집, ERP 연동 사내 시스템, Android 앱도 만들어요. 지금 손으로 하는 일을 적어 보내주시면 자동화 방법과 견적을 드려요. 다른 서비스의 이용약관을 어기는 매크로(예매·게임 등)는 만들지 않아요.',
  },
  {
    q: '제작 기간은 얼마나 걸리나요?',
    a: '원페이지는 보통 1~2주, 여러 페이지 홈페이지는 3~4주 정도예요. 자료(문구·사진)가 빨리 준비될수록 빨라져요.',
  },
  {
    q: '결제는 어떻게 하나요?',
    a: '50만원 미만 제작은 오픈 시 한 번에 계좌이체로 받아요. 50만원 이상은 계약 시 착수금 50%, 오픈 시 잔금 50%로 나눠 받아요. 템플릿은 구매 신청 후 안내드리는 계좌로 입금하시면 확인 후 메일로 파일을 보내드려요. 현금영수증 발행 가능해요. 세금계산서가 필요하면 미리 말씀해 주세요.',
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
