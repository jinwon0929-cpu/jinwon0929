"use client";

import { useState } from "react";
import Link from "next/link";

/* ===========================
   Header 컴포넌트
   - 로고 + 네비게이션 바
   - 모바일 반응형 메뉴 포함
   =========================== */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 네비게이션 링크 목록 — 새 페이지 추가 시 여기에 항목을 추가하세요
  const navLinks = [
    { href: "/", label: "홈" },
    // { href: "/curriculum", label: "커리큘럼" },
    // { href: "/problems", label: "문제풀이" },
    // { href: "/resources", label: "학습자료" },
    // { href: "/contact", label: "문의하기" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* 로고 */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          {/* 수학 아이콘 (SVG) */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-lg font-bold text-slate-800 sm:text-xl">
            진원쌤<span className="text-primary-500"> 수학교실</span>
          </span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-primary-50 hover:text-primary-600"
            >
              {link.label}
            </Link>
          ))}

          {/* 여기에 로그인/회원가입 버튼 등을 추가하세요 */}
        </nav>

        {/* 모바일 메뉴 토글 버튼 */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 md:hidden"
          aria-label="메뉴 열기"
        >
          {isMobileMenuOpen ? (
            /* X 아이콘 */
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* 햄버거 아이콘 */
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {isMobileMenuOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-primary-50 hover:text-primary-600"
            >
              {link.label}
            </Link>
          ))}

          {/* 여기에 모바일용 추가 메뉴 항목을 넣으세요 */}
        </nav>
      )}
    </header>
  );
}
