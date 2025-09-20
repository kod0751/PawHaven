# 🐾 PawHaven (발바닥 구조대)

> 경기도 유기동물 보호 및 입양 지원 플랫폼

## 📖 프로젝트 소개

PawHaven은 경기도 내 유기동물들의 현황을 파악하고, 잃어버린 반려동물을 찾는 보호자와 새로운 가족을 찾고 있는 유기동물들을 연결하는 웹 플랫폼입니다. 공공데이터를 활용하여 유기동물 정보를 제공하고, 스마트한 검색 기능을 통해 반려동물과의 만남을 지원합니다.

## ✨ 주요 기능

### 🔍 유기동물 현황 파악

- **통계 대시보드**: 경기도 내 유기동물 수 실시간 확인
- **상세 정보 조회**: 각 유기동물의 세부 정보 (품종, 성별, 나이, 특징 등)
- **보호소 위치**: 유기동물이 보호 중인 보호소의 정확한 위치 정보

### 🐕 나의 반려동물 찾기

스마트 매칭 시스템으로 잃어버린 반려동물을 찾거나, 새로운 가족이 될 반려동물을 만날 수 있습니다:

- **종류별 검색**: 개, 고양이 등 동물 종류
- **성별 필터**: 수컷/암컷 구분 검색
- **체중 범위**: 무게 기반 필터링
- **색상 매칭**: 털색, 무늬 등 외형적 특징

## 🛠 기술 스택

### Frontend

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Query](https://img.shields.io/badge/React_Query-5.x-FF4154?style=flat&logo=react-query&logoColor=white)](https://tanstack.com/query/latest)


### Styling & State Management

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5.x-FF6B6B?style=flat&logo=zustand)](https://zustand.surge.sh/)

### Deployment

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat&logo=vercel)](https://paw-haven-pi.vercel.app)

## 🏗 프로젝트 구조

```
src/
├── features/      # 주요 도메인별 기능 모듈 (나의 반려동물찾기, 동물 리스트 등)
├── pages/         # 라우팅되는 페이지 컴포넌트
├── shared/        # 공통 컴포넌트, 유틸 함수, 타입 등 재사용 모듈
├── styles/        # 전역 스타일, Tailwind 설정, 폰트 등
└── widgets/       # 독립적 UI 위젯 (Header, 케러셀 등)
```

## 🚀 시작하기

### 설치 및 실행

1. **저장소 클론**

   ```bash
   git clone https://github.com/kod0751/PawHaven.git
   cd PawHaven
   ```

2. **의존성 설치**

   ```bash
   npm install
   ```

3. **개발 서버 실행**

   ```bash
   npm run dev
   ```

4. **빌드**
   ```bash
   npm run build
   ```

## 🌐 배포링크

👉 [PawHaven 바로가기](https://paw-haven-pi.vercel.app/)
