# 🚀 GitHub Pages 배포 가이드

이 문서는 포트폴리오 웹사이트를 GitHub Pages에 배포하는 방법을 설명합니다.

## 📋 사전 준비사항

- GitHub 계정
- Git 설치
- 작업한 CV_webpage 디렉토리

## 🔧 배포 단계

### 1단계: GitHub 저장소 생성

1. GitHub에 로그인 (https://github.com)
2. 우측 상단의 `+` 버튼 클릭 → `New repository` 선택
3. Repository 정보 입력:
   - **Repository name**: `CV_webpage`
   - **Description**: "Personal Portfolio Website"
   - **Public** 선택 (GitHub Pages는 public repository에서 무료)
   - **Add a README file**: 체크 해제 (이미 있음)
   - **Add .gitignore**: None (이미 있음)
   - **Choose a license**: MIT (선택사항)
4. `Create repository` 버튼 클릭

### 2단계: 로컬 저장소 연결 및 푸시

터미널에서 다음 명령어 실행:

```bash
# CV_webpage 디렉토리로 이동
cd /home/joongwon00/CV_webpage

# GitHub 저장소와 연결 (YOUR_USERNAME을 실제 GitHub 사용자명으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/CV_webpage.git

# 초기 커밋 생성
git commit -m "Initial commit: Personal portfolio website"

# GitHub에 푸시
git push -u origin main
```

### 3단계: GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
2. `Settings` 탭 클릭
3. 좌측 메뉴에서 `Pages` 선택
4. **Source** 섹션에서:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
5. `Save` 버튼 클릭
6. 몇 분 후 상단에 배포 URL 표시:
   ```
   Your site is published at https://YOUR_USERNAME.github.io/CV_webpage/
   ```

### 4단계: 배포 확인

1. 제공된 URL로 접속
2. 웹사이트가 정상적으로 표시되는지 확인
3. 반응형 디자인 테스트 (모바일, 태블릿, 데스크톱)

## 🔄 업데이트 방법

웹사이트를 수정한 후 배포하는 방법:

```bash
cd /home/joongwon00/CV_webpage

# 변경사항 확인
git status

# 변경된 파일 추가
git add .

# 커밋 메시지와 함께 커밋
git commit -m "Update: 변경 내용 설명"

# GitHub에 푸시
git push origin main
```

GitHub Pages는 자동으로 업데이트를 감지하고 재배포합니다 (1-2분 소요).

## 🎨 커스터마이징 체크리스트

배포 전에 다음 항목들을 수정하세요:

### index.html
- [ ] 이름 변경 (현재: "채중원")
- [ ] 타이틀 변경
- [ ] About 섹션 내용 작성
- [ ] Education 정보 업데이트
- [ ] Experience 정보 업데이트
- [ ] Skills 목록 수정
- [ ] Projects 정보 추가/수정
- [ ] 이메일 주소 변경 (your.email@example.com)
- [ ] GitHub 링크 업데이트
- [ ] LinkedIn 프로필 링크 추가
- [ ] 통계 숫자 업데이트 (data-target 속성)

### README.md
- [ ] GitHub 사용자명 변경
- [ ] 이메일 주소 변경
- [ ] 프로젝트 설명 커스터마이징

### 추가 파일 (선택사항)
- [ ] favicon.ico 추가 (웹사이트 아이콘)
- [ ] 프로필 이미지 추가
- [ ] 프로젝트 스크린샷 이미지 추가

## 🌐 커스텀 도메인 설정 (선택사항)

자신의 도메인을 사용하려면:

1. 도메인 제공업체에서 다음 DNS 레코드 추가:
   ```
   A 레코드: 185.199.108.153
   A 레코드: 185.199.109.153
   A 레코드: 185.199.110.153
   A 레코드: 185.199.111.153
   CNAME 레코드: YOUR_USERNAME.github.io
   ```

2. 저장소 루트에 `CNAME` 파일 생성:
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

3. GitHub Settings → Pages에서 Custom domain 입력 및 저장

## 🔒 HTTPS 설정

GitHub Pages는 자동으로 HTTPS를 지원합니다:

1. Settings → Pages로 이동
2. "Enforce HTTPS" 체크박스 활성화
3. 커스텀 도메인 사용 시 DNS 전파 후 활성화 (최대 24시간)

## 📊 웹사이트 분석 추가 (선택사항)

### Google Analytics

`index.html`의 `</head>` 태그 직전에 추가:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 문제 해결

### 페이지가 표시되지 않을 때

1. GitHub Settings → Pages에서 배포 상태 확인
2. Actions 탭에서 배포 로그 확인
3. 브라우저 캐시 삭제 후 재시도
4. 개발자 도구(F12)에서 콘솔 에러 확인

### CSS/JS가 로드되지 않을 때

- 파일 경로가 올바른지 확인
- 대소문자 구분 확인
- 상대 경로 사용 확인

### 모바일에서 레이아웃이 깨질 때

- viewport meta 태그 확인
- 미디어 쿼리 브레이크포인트 확인
- 개발자 도구의 모바일 시뮬레이션으로 테스트

## 📱 소셜 미디어 공유 최적화

`index.html`의 `<head>` 섹션에 추가:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://YOUR_USERNAME.github.io/CV_webpage/">
<meta property="og:title" content="Joongwon Chae - Portfolio">
<meta property="og:description" content="AI/ML Engineer & Computer Vision Researcher">
<meta property="og:image" content="https://YOUR_USERNAME.github.io/CV_webpage/preview.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://YOUR_USERNAME.github.io/CV_webpage/">
<meta property="twitter:title" content="Joongwon Chae - Portfolio">
<meta property="twitter:description" content="AI/ML Engineer & Computer Vision Researcher">
<meta property="twitter:image" content="https://YOUR_USERNAME.github.io/CV_webpage/preview.png">
```

## ✅ 배포 후 체크리스트

- [ ] 모든 링크가 작동하는지 확인
- [ ] 모든 섹션이 정상적으로 표시되는지 확인
- [ ] 모바일 반응형 디자인 확인
- [ ] 페이지 로딩 속도 확인 (Google PageSpeed Insights)
- [ ] 네비게이션 메뉴 동작 확인
- [ ] 폼 제출 테스트
- [ ] 브라우저 호환성 확인
- [ ] SEO 최적화 확인

## 🎓 추가 리소스

- [GitHub Pages 공식 문서](https://docs.github.com/en/pages)
- [Git 기초 가이드](https://git-scm.com/book/ko/v2)
- [웹 접근성 가이드](https://www.w3.org/WAI/WCAG21/quickref/)
- [SEO 최적화 가이드](https://developers.google.com/search/docs/beginner/seo-starter-guide)

---

## 🆘 도움이 필요하신가요?

- [GitHub Pages 포럼](https://github.community/c/github-ecosystem/github-pages)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/github-pages)

## 🎉 축하합니다!

포트폴리오 웹사이트가 성공적으로 배포되었습니다! 
이제 이력서, 커버레터, 또는 소셜 미디어 프로필에 링크를 추가하세요.

```
🌐 https://YOUR_USERNAME.github.io/CV_webpage/
```

