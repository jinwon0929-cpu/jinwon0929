import type { Metadata } from "next";
import "./globals.css";

/* ===========================
   메타데이터 (SEO)
   =========================== */
export const metadata: Metadata = {
  title: "진원쌤과 함께하는 수학교실",
  description:
    "진원쌤과 함께 즐겁고 쉽게 배우는 수학! 초등·중등 수학 개념 정리, 문제 풀이, 학습 자료를 제공합니다.",
  keywords: ["수학", "수학교실", "진원쌤", "온라인학습", "교육"],
  openGraph: {
    title: "진원쌤과 함께하는 수학교실",
    description: "진원쌤과 함께 즐겁고 쉽게 배우는 수학!",
    type: "website",
  },
};

/* ===========================
   루트 레이아웃
   =========================== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard 폰트 CDN */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        {children}
      </body>
    </html>
  );
}
