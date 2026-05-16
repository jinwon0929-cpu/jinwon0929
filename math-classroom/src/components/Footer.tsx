/* ===========================
   Footer 컴포넌트
   - 카피라이트 + 링크
   =========================== */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* 로고 & 카피라이트 */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-slate-700">
              진원쌤과 함께하는 수학교실
            </p>
            <p className="mt-1 text-xs text-slate-500">
              © {currentYear} 진원쌤 수학교실. All rights reserved.
            </p>
          </div>

          {/* 푸터 링크 — 여기에 새로운 링크를 추가하세요 */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {(
              [
                // { href: "/about", label: "소개" },
                // { href: "/privacy", label: "개인정보처리방침" },
                // { href: "/terms", label: "이용약관" },
              ] as { href: string; label: string }[]
            ).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-500 transition-colors hover:text-primary-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* 소셜 아이콘 — 여기에 SNS 링크를 추가하세요 */}
          {/*
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-primary-500">
              유튜브
            </a>
            <a href="#" className="text-slate-400 hover:text-primary-500">
              인스타그램
            </a>
          </div>
          */}
        </div>
      </div>
    </footer>
  );
}
