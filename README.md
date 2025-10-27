# 📋 개인 포트폴리오 웹사이트

> 현대적이고 반응형인 개인 포트폴리오 웹사이트

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ 주요 기능

- 🎨 **현대적인 디자인**: 그라디언트와 애니메이션을 활용한 세련된 UI
- 📱 **반응형 레이아웃**: 모든 디바이스에서 완벽하게 동작
- ⚡ **부드러운 애니메이션**: CSS와 JavaScript를 활용한 인터랙티브한 요소들
- 🎯 **섹션별 구성**: Home, About, Skills, Projects, Contact
- 🌙 **다크 테마**: 눈에 편안한 다크 모드 디자인
- 📊 **숫자 카운터 애니메이션**: 스크롤 시 통계 수치 애니메이션
- 💫 **3D 카드 효과**: 프로젝트 카드에 마우스 호버 시 3D 틸트 효과

## 🚀 빠른 시작

### 로컬에서 실행하기

1. 저장소 클론:
```bash
git clone https://github.com/jw-chae/CV_webpage.git
cd CV_webpage
```

2. 웹 브라우저로 `index.html` 파일 열기

### GitHub Pages로 배포하기

1. GitHub 저장소 설정으로 이동
2. "Pages" 섹션 선택
3. Source를 `main` 브랜치로 설정
4. 저장 후 몇 분 기다리면 `https://jw-chae.github.io/CV_webpage/`에서 확인 가능

## 📁 프로젝트 구조

```
CV_webpage/
│
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css      # 스타일시트
├── js/
│   └── script.js      # JavaScript 인터랙션
└── README.md          # 프로젝트 문서
```

## 🎨 커스터마이징

### 색상 변경
`css/style.css` 파일의 `:root` 섹션에서 CSS 변수를 수정:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... */
}
```

### 개인 정보 수정
`index.html` 파일에서 다음 정보들을 수정:

- 이름 및 타이틀
- About 섹션 내용
- Skills 목록
- Projects 정보
- Contact 정보 (이메일, GitHub, LinkedIn 등)

### 프로젝트 추가
`index.html`의 Projects 섹션에서 `.project-card` 블록을 복사하여 추가:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-icon-name project-icon"></i>
    </div>
    <div class="project-content">
        <h3>프로젝트 제목</h3>
        <p>프로젝트 설명</p>
        <div class="project-tags">
            <span class="tag">태그1</span>
            <span class="tag">태그2</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link">
                <i class="fab fa-github"></i> GitHub
            </a>
        </div>
    </div>
</div>
```

## 🛠️ 사용된 기술

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, Animations, Variables
- **JavaScript (ES6+)**: DOM 조작, 이벤트 처리, Intersection Observer
- **Font Awesome**: 아이콘
- **Google Fonts**: Poppins, Noto Sans KR

## 📱 반응형 브레이크포인트

- **Desktop**: 1200px 이상
- **Tablet**: 768px - 1199px
- **Mobile**: 767px 이하

## ⚡ 성능 최적화

- CSS 애니메이션 최적화
- Intersection Observer를 활용한 지연 로딩
- 최소한의 외부 의존성
- 가벼운 파일 크기

## 🎯 브라우저 호환성

- ✅ Chrome (최신)
- ✅ Firefox (최신)
- ✅ Safari (최신)
- ✅ Edge (최신)
- ⚠️ IE11 (부분적 지원)

## 📝 할 일 (TODO)

- [ ] 프로필 이미지 추가
- [ ] 더 많은 프로젝트 추가
- [ ] 블로그 섹션 추가
- [ ] 다크/라이트 테마 토글
- [ ] 다국어 지원 (한/영)
- [ ] 백엔드 연동 (문의 폼)

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 👤 제작자

**채중원 (Joongwon Chae)**

- GitHub: [@jw-chae](https://github.com/jw-chae)
- Email: joongwon00@gmail.com
- University: cai-zy24@mails.tsinghua.edu.cn
- LinkedIn: [Chae Joongwon](https://www.linkedin.com/in/chae-joongwon-a668572a9/)

## 🤝 기여하기

이슈와 PR은 언제나 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💡 참고 자료

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

---

⭐️ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!

