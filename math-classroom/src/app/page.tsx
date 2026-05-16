import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

/* ===========================
   메인 페이지
   =========================== */
export default function Home() {
  return (
    <>
      {/* 상단 헤더 & 네비게이션 */}
      <Header />

      <main className="flex-1">
        {/* 히어로 섹션 */}
        <Hero />

        {/* ===========================
           여기에 새로운 섹션/컴포넌트를 추가하세요
           예시:
           - <Features />    : 주요 기능 소개 섹션
           - <Curriculum />  : 커리큘럼 / 강의 목록
           - <Testimonials />: 수강 후기
           - <Contact />     : 문의하기
           =========================== */}
      </main>

      {/* 하단 푸터 */}
      <Footer />
    </>
  );
}
