document.addEventListener('DOMContentLoaded', function() {
    // 탭 전환 기능
    const yearTabs = document.querySelectorAll('.flex.border-b button');
    const newsletterCards = document.querySelectorAll('.newsletter-card');
    
    // 년도 탭 클릭 이벤트
    yearTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 모든 탭에서 활성화 스타일 제거
            yearTabs.forEach(t => {
                t.classList.remove('text-blue-600', 'border-b-2', 'border-blue-500');
                t.classList.add('text-gray-500');
            });
            
            // 클릭된 탭에 활성화 스타일 추가
            this.classList.remove('text-gray-500');
            this.classList.add('text-blue-600', 'border-b-2', 'border-blue-500');
            
            // 선택된 년도 (실제 구현 시 데이터를 불러오는 코드 추가)
            const selectedYear = this.textContent.trim();
            console.log(`${selectedYear} 레터를 불러옵니다.`);
            
            // 실제 구현 시 AJAX로 데이터를 불러와 동적으로 카드를 생성할 수 있습니다
            // 이 예제에서는 간단히 애니메이션 효과만 추가
            animateCards();
        });
    });
    
    // 카드 애니메이션 함수
    function animateCards() {
        newsletterCards.forEach((card, index) => {
            // 기존 카드 숨기기
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            // 카드 순차적으로 나타내기
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }
    
    // 최신호 강조 효과
    const latestNewsletter = document.querySelector('.newsletter-card:first-child');
    if (latestNewsletter) {
        latestNewsletter.classList.add('ring-4', 'ring-blue-100');
    }
    
    // 구독 버튼 클릭 이벤트 (알림 표시)
    const subscribeBtn = document.querySelector('a:contains("이메일 구독 신청")');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('구독 신청 페이지로 이동합니다.');
            // 실제 구현 시 구독 페이지로 이동하거나 모달을 표시할 수 있습니다
        });
    }
    
    // 레터 검색 기능 (향후 확장 가능)
    function searchNewsletters(keyword) {
        console.log(`"${keyword}" 검색 결과를 표시합니다.`);
        // 실제 구현 시 검색 결과를 필터링하여 표시
    }
    
    // 처음 로딩 시 카드 애니메이션
    setTimeout(() => {
        animateCards();
    }, 300);
});

// 연도 선택에 따라 뉴스레터 목록 변경 (향후 AJAX로 구현)
function loadNewslettersByYear(year) {
    console.log(`${year}년 뉴스레터를 불러옵니다.`);
    // 실제 구현 시 서버에서 해당 연도의 뉴스레터 데이터를 가져와 표시
    
    // 로딩 인디케이터 표시 예시
    const container = document.querySelector('.grid');
    
    // 로딩 표시
    const loadingEl = document.createElement('div');
    loadingEl.className = 'loading col-span-full';
    loadingEl.innerHTML = '<div class="loading-spinner"></div>';
    container.innerHTML = '';
    container.appendChild(loadingEl);
    
    // 실제 구현 시 AJAX 요청 후 데이터 표시 (이 예제에서는 setTimeout으로 시뮬레이션)
    setTimeout(() => {
        // 로딩 제거하고 결과 표시 (실제 구현에서는 서버 응답 데이터 사용)
        container.innerHTML = '<div class="col-span-full text-center text-gray-500">해당 연도의 뉴스레터가 준비 중입니다.</div>';
    }, 1000);
}