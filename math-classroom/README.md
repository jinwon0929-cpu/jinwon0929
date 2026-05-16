# 진원쌤과 함께하는 수학교실 🎓

Next.js 15 + Tailwind CSS v4로 구축된 교육용 웹 서비스입니다.

## 기술 스택

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Font:** [Pretendard](https://cactus.tistory.com/306)
- **Deployment:** [Vercel](https://vercel.com/)

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

### 3. 프로덕션 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
math-classroom/
├── src/
│   ├── app/
│   │   ├── globals.css      # 글로벌 스타일 & Tailwind 설정
│   │   ├── layout.tsx        # 루트 레이아웃 (HTML, 메타데이터)
│   │   └── page.tsx          # 메인 페이지
│   └── components/
│       ├── Header.tsx        # 상단 헤더 & 네비게이션
│       ├── Hero.tsx          # 히어로 섹션 (메인 화면)
│       └── Footer.tsx        # 하단 푸터
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## Vercel 배포 방법

1. GitHub에 이 저장소를 Push합니다.
2. [Vercel](https://vercel.com/)에 로그인 → **New Project** 클릭
3. GitHub 저장소를 연결하면 자동으로 빌드 & 배포됩니다.

## 기능 확장 가이드

코드 곳곳에 `// 여기에 새로운 컴포넌트를 추가하세요` 같은 주석이 있습니다.
주요 확장 포인트:

- **새 페이지 추가:** `src/app/` 폴더에 새 디렉토리 생성 (예: `src/app/curriculum/page.tsx`)
- **새 컴포넌트 추가:** `src/components/` 폴더에 생성 후 `page.tsx`에서 import
- **네비게이션 링크 추가:** `Header.tsx`의 `navLinks` 배열에 항목 추가
- **푸터 링크 추가:** `Footer.tsx`의 링크 배열에 항목 추가
