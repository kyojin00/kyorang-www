import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '교랑빌리지 계정 삭제 안내 | 교랑',
  description:
    '교랑빌리지(Kyorang Village) 계정 및 데이터 삭제를 요청하는 방법을 안내합니다.',
  robots: { index: true, follow: true },
};

const CONTACT_EMAIL = 'support@kyorang.com'; // TODO: 실제 지원 이메일로 교체

export default function VillageDeleteAccountPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-[#3D3229]">
      {/* 헤더 */}
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold text-[#E07B54]">
          교랑빌리지 (Kyorang Village)
        </p>
        <h1 className="text-3xl font-bold">계정 삭제 안내</h1>
        <p className="mt-3 leading-relaxed text-[#8A7D6F]">
          본 페이지는 교랑(Kyorang)이 운영하는 모바일 앱{' '}
          <strong>교랑빌리지</strong>의 계정 및 데이터 삭제 절차를
          안내합니다.
        </p>
      </div>

      {/* 삭제 요청 방법 */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold">계정 삭제를 요청하는 방법</h2>
        <ol className="list-decimal space-y-3 pl-5 leading-relaxed">
          <li>
            아래 이메일 주소로 계정 삭제 요청을 보내 주세요.
            <div className="mt-2 rounded-xl bg-[#F7EEE2] px-4 py-3 font-semibold">
              {CONTACT_EMAIL}
            </div>
          </li>
          <li>
            메일 제목에 <strong>&ldquo;교랑빌리지 계정 삭제 요청&rdquo;</strong>
            을 적고, 본문에 가입한 <strong>휴대폰 번호</strong>를 함께
            보내 주세요. 본인 확인을 위해 해당 번호로 확인 연락을 드릴 수
            있습니다.
          </li>
          <li>
            본인 확인이 완료되면 <strong>영업일 기준 7일 이내</strong>에
            계정과 데이터가 삭제되며, 완료 후 회신을 드립니다.
          </li>
        </ol>
        <p className="mt-4 text-sm leading-relaxed text-[#8A7D6F]">
          ※ 추후 앱 업데이트를 통해 앱 내 [마이 → 회원 탈퇴] 메뉴에서 직접
          탈퇴할 수 있는 기능이 제공될 예정입니다.
        </p>
      </section>

      {/* 삭제되는 데이터 */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold">삭제되는 데이터</h2>
        <p className="mb-3 leading-relaxed">
          계정 삭제 시 아래 데이터가 모두 영구적으로 삭제되며 복구할 수
          없습니다.
        </p>
        <ul className="list-disc space-y-2 pl-5 leading-relaxed">
          <li>계정 정보 (휴대폰 번호 기반 로그인 정보)</li>
          <li>프로필 (닉네임, 프로필 사진, 소개)</li>
          <li>가입한 마을 목록 및 마을 활동 기록</li>
          <li>채팅 메시지 (마을 채팅 및 1:1 대화)</li>
          <li>게시글, 댓글, 좋아요</li>
          <li>챌린지 참여 및 인증 기록 (인증 사진 포함)</li>
          <li>친구 관계 및 차단 목록</li>
        </ul>
      </section>

      {/* 보관되는 데이터 */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold">일정 기간 보관되는 데이터</h2>
        <p className="leading-relaxed">
          관련 법령 준수 및 서비스 악용 방지를 위해 아래 데이터는 삭제
          요청일로부터 명시된 기간 동안 분리 보관 후 파기됩니다.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            신고 접수 기록: <strong>최대 1년</strong> (분쟁 처리 및 부정 이용
            방지 목적)
          </li>
          <li>
            법령에 따라 보존 의무가 있는 기록: 해당 법령에서 정한 기간
          </li>
        </ul>
      </section>

      {/* 문의 */}
      <section className="rounded-2xl border border-[#EDE4D7] bg-[#FDF8F1] p-6">
        <h2 className="mb-2 text-lg font-bold">문의</h2>
        <p className="leading-relaxed text-[#8A7D6F]">
          계정 삭제 및 개인정보 처리에 관한 문의는{' '}
          <span className="font-semibold text-[#3D3229]">
            {CONTACT_EMAIL}
          </span>
          로 연락해 주세요.
        </p>
      </section>

      <p className="mt-10 text-xs text-[#B5A998]">
        최종 업데이트: 2026년 6월 · 운영: 교랑 (Kyorang)
      </p>
    </main>
  );
}