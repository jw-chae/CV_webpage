# Joongwon Chae - Academic Portfolio Website

> 깔끔하고 전문적인 학술 스타일 포트폴리오 웹사이트

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## 📋 개요

청화대학교(Tsinghua University) Computer Vision 연구자를 위한 심플하고 전문적인 학술 포트폴리오 웹사이트입니다.

## ✨ 디자인 특징

- 🎓 **학술적 디자인**: 깔끔하고 전문적인 아카데믹 스타일
- 📄 **탭 기반 네비게이션**: Home, Projects, Publications, Experience, Contact
- 📱 **완벽한 반응형**: 모든 디바이스에서 최적화된 레이아웃
- 🎨 **미니멀리즘**: 콘텐츠에 집중할 수 있는 심플한 디자인
- 🖨️ **인쇄 최적화**: PDF/인쇄 출력에 최적화된 스타일
- ⚡ **빠른 로딩**: 가벼운 순수 HTML/CSS/JS

## 🚀 빠른 시작

### 로컬 미리보기

```bash
cd /home/joongwon00/CV_webpage
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000` 접속

### GitHub Pages 배포

```bash
# 이미 커밋 완료! 푸시만 하면 됩니다
git push origin main
```

## 📁 프로젝트 구조

```
CV_webpage/
├── index.html          # 메인 페이지
├── css/
│   └── style.css      # 스타일시트
├── js/
│   └── script.js      # 네비게이션 & 인터랙션
├── README.md          # 이 파일
└── DEPLOY.md          # 상세 배포 가이드
```

## 🎯 주요 섹션

### Home
- 프로필 소개
- 연구 관심 분야
- 학술 배경

### Projects
- SAM2 GUI - SAM2용 GUI 인터페이스
- pLDDT Predictor - 단백질 구조 예측
- Memory-SAM - 메모리 효율적 세그멘테이션
- SAM2 Realtime - 실시간 세그멘테이션
- GRID-AUGMENTED-VISION - 객체 추적 연구
- SJTU Projects - 학술 프로젝트

### Publications
- 연구 논문 및 기여
- 오픈소스 프로젝트

### Experience
- 교육 배경
- 기술 스택
- GitHub 통계

### Contact
- 이메일 연락처
- 소셜 미디어 링크
- 위치 정보

## 🎨 커스터마이징

### 색상 변경

`css/style.css`의 `:root` 변수 수정:

```css
:root {
    --primary-color: #2c3e50;
    --accent-color: #3498db;
    --link-color: #3498db;
}
```

### 콘텐츠 수정

`index.html`에서 각 섹션의 내용을 직접 수정할 수 있습니다.

### 프로필 이미지 추가

프로필 이미지를 추가하려면:

1. 이미지 파일을 프로젝트에 추가 (예: `images/profile.jpg`)
2. `index.html`의 `.profile-image-placeholder` 부분을 다음과 같이 수정:

```html
<div class="profile-image-placeholder">
    <img src="images/profile.jpg" alt="Profile" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
</div>
```

## 🛠️ 사용된 기술

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 반응형 디자인
- **JavaScript (ES6+)**: 탭 네비게이션, 인터랙션
- **Google Fonts**: Open Sans, Noto Sans KR

## 📱 반응형 브레이크포인트

- **Desktop**: 900px 이상
- **Tablet**: 481px - 768px
- **Mobile**: 480px 이하

## 🌐 GitHub Pages 배포 후

1. **Settings** → **Pages** 이동
2. **Source**를 `main` 브랜치로 설정
3. 몇 분 후 다음 주소에서 확인:
   ```
   https://jw-chae.github.io/CV_webpage/
   ```

## 📧 연락처

**채중원 (Joongwon Chae)**

- 📧 Email: joongwon00@gmail.com
- 🎓 University: cai-zy24@mails.tsinghua.edu.cn
- 💻 GitHub: [@jw-chae](https://github.com/jw-chae)
- 💼 LinkedIn: [Chae Joongwon](https://www.linkedin.com/in/chae-joongwon-a668572a9/)

## 🎓 영감

이 웹사이트는 학술 연구자들의 전문적이고 깔끔한 포트폴리오 사이트에서 영감을 받았습니다.

## 📄 라이선스

MIT License

## 🙏 감사

이 프로젝트를 방문해주셔서 감사합니다!

---

⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!
