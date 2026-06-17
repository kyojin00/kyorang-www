import Link from 'next/link';

export const metadata = {
  title: '인증 완료 - 교랑빌리지',
  description: '이메일 인증이 완료되었어요',
};

export default function ConfirmedPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-[#FFF8F3]">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FF7A59] mb-6 shadow-lg">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-[#2D2D2D] mb-3">
            인증이 완료됐어요!
          </h1>
          <p className="text-[#666] leading-relaxed">
            교랑빌리지에 오신 것을 환영해요.
            <br />
            이제 앱으로 돌아가 로그인하시면 돼요.
          </p>
        </div>

        <div className="space-y-3">
          <a
            href="io.supabase.kyorangvillage://login-callback"
            className="block w-full bg-[#FF7A59] text-white font-bold py-4 rounded-2xl shadow-md hover:bg-[#FF6644] transition"
          >
            앱으로 돌아가기
          </a>

          <Link
            href="/"
            className="block w-full text-[#888] py-3 text-sm hover:text-[#666] transition"
          >
            홈으로
          </Link>
        </div>

        <p className="mt-8 text-xs text-[#AAA] leading-relaxed">
          앱이 자동으로 열리지 않으면 직접 교랑빌리지 앱을 실행해 주세요.
        </p>
      </div>
    </main>
  );
}