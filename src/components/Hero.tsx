/* ===========================
   Hero 컴포넌트
   - 메인 환영 문구 + CTA 버튼
   - 배경 그라데이션 + 장식 요소
   =========================== */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-400/10">
      {/* 배경 장식 원형 */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          {/* 배지 */}
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            2026학년도 새 학기 수업 오픈!
          </div>

          {/* 메인 타이틀 */}
          <h1
            className="animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            진원쌤과 함께하는
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              수학교실
            </span>
          </h1>

          {/* 설명 */}
          <p
            className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            어렵게만 느껴지던 수학, 진원쌤과 함께라면 쉽고 재미있게!
            <br className="hidden sm:block" />
            기초부터 심화까지, 체계적인 커리큘럼으로 수학 실력을 키워보세요.
          </p>

          {/* CTA 버튼 영역 */}
          <div
            className="animate-fade-in-up mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            style={{ animationDelay: "0.3s" }}
          >
            {/* 메인 CTA 버튼 */}
            <button
              type="button"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              {/* 호버 시 빛나는 효과 */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              <span className="relative">수업 시작하기</span>
              <svg
                className="relative h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* 보조 버튼 — 여기에 추가 CTA를 넣을 수 있습니다 */}
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-primary-300 hover:text-primary-600 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              소개 영상 보기
            </button>
          </div>

          {/* 통계 카드 영역 */}
          <div
            className="animate-fade-in-up mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: "500+", label: "수강생", icon: "👨‍🎓" },
              { value: "120+", label: "강의 영상", icon: "📚" },
              { value: "98%", label: "만족도", icon: "⭐" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200/60 bg-white/60 px-6 py-5 backdrop-blur-sm transition-all duration-300 hover:border-primary-200 hover:shadow-lg"
              >
                <div className="text-2xl">{stat.icon}</div>
                <div className="mt-1 text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
