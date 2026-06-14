import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '교랑빌리지 아동 안전 표준 | 교랑',
  description:
    '교랑빌리지(Kyorang Village)의 아동 성적 학대 및 착취(CSAE) 방지 정책과 신고 방법을 안내합니다.',
  robots: { index: true, follow: true },
};

const CONTACT_EMAIL = 'rywls123450@gmail.com'; // Play Console 연락처와 동일하게 유지

export default function VillageChildSafetyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-[#3D3229]">
      {/* 헤더 */}
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold text-[#E07B54]">
          교랑빌리지 (Kyorang Village)
        </p>
        <h1 className="text-3xl font-bold">아동 안전 표준</h1>
        <p className="mt-3 leading-relaxed text-[#8A7D6F]">
          교랑(Kyorang)은 교랑빌리지를 모든 이용자에게 안전한 공간으로
          유지하기 위해 노력합니다. 특히 아동 성적 학대 및 착취(CSAE)에
          대해서는 무관용 원칙을 적용합니다.
        </p>
      </div>

      {/* 무관용 원칙 */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold">무관용 원칙</h2>
        <p className="leading-relaxed">
          교랑빌리지는 아동 성적 학대 자료(CSAM)를 포함하여 아동을
          성적으로 대상화하거나 착취하는 모든 형태의 콘텐츠와 행위를
          엄격히 금지합니다. 여기에는 다음이 포함되며 이에 국한되지
          않습니다.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>아동을 성적으로 묘사하거나 암시하는 텍스트, 이미지, 콘텐츠</li>
          <li>아동에 대한 그루밍(grooming) 또는 유인 행위</li>
          <li>아동 성적 학대 자료의 게시, 공유, 요청, 거래</li>
          <li>미성년자를 대상으로 한 성적 목적의 접근 또는 연락 시도</li>
        </ul>
        <p className="mt-3 leading-relaxed">
          이러한 콘텐츠나 행위가 확인되면 즉시 계정을 영구 정지하고,
          관련 자료를 보존하여 관계 당국에 신고합니다.
        </p>
      </section>

      {/* 신고 방법 */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold">신고 방법</h2>
        <p className="mb-3 leading-relaxed">
          아동 안전을 위협하는 콘텐츠나 사용자를 발견하면 다음 방법으로
          신고할 수 있습니다.
        </p>
        <ul className="list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            <strong>앱 내 신고</strong>: 사용자 프로필, 게시글, 댓글,
            메시지에서 신고 기능을 통해 부적절한 콘텐츠를 신고할 수
            있습니다. 사용자 차단 기능도 함께 제공됩니다.
          </li>
          <li>
            <strong>이메일 신고</strong>: 긴급하거나 추가 설명이 필요한
            경우 아래 이메일로 직접 신고해 주세요.
            <div className="mt-2 rounded-xl bg-[#F7EEE2] px-4 py-3 font-semibold">
              {CONTACT_EMAIL}
            </div>
          </li>
        </ul>
        <p className="mt-3 leading-relaxed">
          접수된 신고는 신속하게 검토하며, 아동 안전 관련 신고는 최우선으로
          처리합니다.
        </p>
      </section>

      {/* 법규 준수 및 당국 신고 */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold">법규 준수 및 당국 신고</h2>
        <p className="leading-relaxed">
          교랑빌리지는 관련 아동 안전 법규를 준수합니다. 아동 성적 학대
          자료(CSAM)가 확인되는 경우, 대한민국의 관련 법령에 따라 자료를
          보존하고 방송통신심의위원회, 경찰 등 관계 당국 및 필요 시
          국제 기관(예: NCMEC)에 신고합니다.
        </p>
      </section>

      {/* 연락처 */}
      <section className="rounded-2xl border border-[#EDE4D7] bg-[#FDF8F1] p-6">
        <h2 className="mb-2 text-lg font-bold">담당자 연락처</h2>
        <p className="leading-relaxed text-[#8A7D6F]">
          아동 안전 관련 문의 및 신고는{' '}
          <span className="font-semibold text-[#3D3229]">
            {CONTACT_EMAIL}
          </span>
          로 연락해 주세요. 담당자가 교랑빌리지의 아동 안전 정책 및
          규정 준수에 관해 답변드립니다.
        </p>
      </section>

      <p className="mt-10 text-xs text-[#B5A998]">
        최종 업데이트: 2026년 6월 · 운영: 교랑 (Kyorang)
      </p>
    </main>
  );
}