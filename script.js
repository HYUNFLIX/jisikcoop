// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 현재 페이지의 HTML 파일명 확인
    const currentPage = window.location.pathname.split('/').pop();
    
    // 현재 슬라이드 번호와 총 슬라이드 수 초기화
    let currentSlide = 0;
    const totalSlides = 6; // 총 슬라이드 수
    
    // 슬라이드 엘리먼트와 네비게이션 도트 가져오기
    const slides = document.getElementById('slides');
    const dots = document.querySelectorAll('.dot');
    
    // 슬라이드 위치 업데이트 함수
    function updateSlidePosition() {
        if (slides) {
            slides.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
            
            // 활성화된 도트 업데이트
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }
    }
    
    // 슬라이드 변경 함수 (전역으로 선언하여 HTML에서 onclick으로 접근 가능)
    window.changeSlide = function(direction) {
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        updateSlidePosition();
    };
    
    // 특정 슬라이드로 이동하는 함수 (전역으로 선언)
    window.goToSlide = function(slideIndex) {
        currentSlide = slideIndex;
        updateSlidePosition();
    };
    
    // 키보드 네비게이션
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            window.changeSlide(-1);
        } else if (e.key === 'ArrowRight') {
            window.changeSlide(1);
        }
    });
    
    // 터치 스와이프 네비게이션을 위한 변수
    let touchStartX = 0;
    let touchEndX = 0;
    
    // 터치 이벤트 리스너 등록
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    // 스와이프 처리 함수
    function handleSwipe() {
        const swipeThreshold = 50; // 스와이프로 인식할 최소 거리
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // 왼쪽 스와이프 - 다음 슬라이드
            window.changeSlide(1);
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // 오른쪽 스와이프 - 이전 슬라이드
            window.changeSlide(-1);
        }
    }
    
    // 5월 뉴스레터 (2505.html)용 애니메이션
    if (currentPage === '2505.html' || !currentPage) {
        const rainContainer = document.querySelector('.rain-container');
        if (rainContainer) {
            for(let i = 0; i < 35; i++) {
                const drop = document.createElement('div');
                drop.className = 'rain';
                drop.style.left = Math.random() * 1080 + 'px';
                drop.style.opacity = Math.random() * 0.4 + 0.3;
                drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
                drop.style.animationDelay = (Math.random() * 2) + 's';
                rainContainer.appendChild(drop);
            }
        }
    }
    
    // 4월 뉴스레터 (2504.html)용 애니메이션
    if (currentPage === '2504.html') {
        const springContainer = document.querySelector('.spring-container');
        if (springContainer) {
            // 꽃잎 애니메이션 생성
            for(let i = 0; i < 25; i++) {
                const flower = document.createElement('div');
                flower.className = 'flower';
                
                // 랜덤 속성 설정
                flower.style.left = Math.random() * 100 + '%';
                flower.style.width = Math.random() * 5 + 10 + 'px';
                flower.style.height = flower.style.width;
                
                // 색상 랜덤 선택 (벚꽃 계열 색상)
                const colors = ['#FFB7C5', '#FFCCCC', '#FFC0CB', '#FADADD'];
                flower.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                // 애니메이션 속도 조절
                flower.style.animationDuration = Math.random() * 10 + 10 + 's, ' + (Math.random() * 5 + 5) + 's';
                flower.style.animationDelay = Math.random() * 10 + 's';
                
                springContainer.appendChild(flower);
            }
        }
    }
});