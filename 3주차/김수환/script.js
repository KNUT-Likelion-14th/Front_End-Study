document.addEventListener('DOMContentLoaded', () => {
    // 1. 상태(State) 관리: 명단 데이터를 담을 배열
    let members = [];

    // DOM 요소 선택
    const summaryGrid = document.getElementById('summary-grid');
    const detailList = document.getElementById('detail-list');
    const totalCountDisplay = document.getElementById('total-count');
    const formSection = document.getElementById('form-section');
    const addMemberForm = document.getElementById('add-member-form');
    
    // --- [기능 1] 초기 화면 데이터 동기화 (기존 HTML 읽기) ---
    function initializeDataFromDOM() {
        const initialSummaryCards = summaryGrid.querySelectorAll('.summary-card');
        const initialDetailCards = detailList.querySelectorAll('.detail-card');

        initialSummaryCards.forEach((summaryNode, index) => {
            const detailNode = initialDetailCards[index];
            if (!detailNode) return;

            // 명단 배열에 기존 카드의 DOM 노드를 저장하여 동기화
            members.push({
                summaryNode: summaryNode,
                detailNode: detailNode
            });
        });
        updateTotalCount();
    }

    // 총 인원수 갱신 함수
    function updateTotalCount() {
        totalCountDisplay.textContent = `총 ${members.length}명`;
    }

    // --- [기능 2] 폼 토글 기능 ---
    document.getElementById('btn-toggle-form').addEventListener('click', () => {
        formSection.classList.toggle('hidden');
    });

    document.getElementById('btn-cancel').addEventListener('click', () => {
        addMemberForm.reset();
        resetErrors(); // 취소 시 에러 메시지도 숨김
        formSection.classList.add('hidden');
    });

    // --- [기능 3] 입력값 검증(Validation) 로직 ---
    function validateForm() {
        let isValid = true;
        // .required 클래스가 붙은 모든 입력칸 검사
        const requiredInputs = addMemberForm.querySelectorAll('.required');

        requiredInputs.forEach(input => {
            const errorMsg = input.nextElementSibling; // 입력칸 바로 밑의 .error-msg
            if (input.value.trim() === '') {
                errorMsg.style.display = 'block';
                input.classList.add('input-error');
                isValid = false;
            } else {
                errorMsg.style.display = 'none';
                input.classList.remove('input-error');
            }
        });
        return isValid;
    }

    function resetErrors() {
        const requiredInputs = addMemberForm.querySelectorAll('.required');
        requiredInputs.forEach(input => {
            input.nextElementSibling.style.display = 'none';
            input.classList.remove('input-error');
        });
    }

    // --- [기능 4] 폼 제출 (새 아기 사자 추가) ---
    addMemberForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1) 빈 입력값이 있는지 검사 (있으면 경고 띄우고 중단)
        if (!validateForm()) {
            return;
        }

        // 2) 입력값 읽기 및 관심 기술 분리 (첫 번째 값은 배지용)
        const name = document.getElementById('name').value;
        const part = document.getElementById('part').value;
        const imgUrl = document.getElementById('img-url').value;
        const shortIntro = document.getElementById('short-intro').value;
        const detailIntro = document.getElementById('detail-intro').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const oneWord = document.getElementById('oneword').value;
        
        const techArray = document.getElementById('tech').value.split(',').map(item => item.trim());
        const mainBadge = techArray[0] || '초보사자';
        const techListHTML = techArray.map(t => `<li>${t}</li>`).join('');

        // 3) 요약 카드 DOM 생성 및 추가
        const summaryCard = document.createElement('article');
        summaryCard.className = 'card summary-card';
        summaryCard.innerHTML = `
            <div class="img-wrapper">
                <img src="${imgUrl}" alt="${name} 프로필" class="profile-img">
                <span class="badge">${mainBadge}</span>
            </div>
            <h3>${name}</h3>
            <p class="part">${part}</p>
            <p class="short-intro">${shortIntro}</p>
        `;
        summaryGrid.appendChild(summaryCard);

        // 4) 상세 카드 DOM 생성 및 추가
        const detailCard = document.createElement('article');
        detailCard.className = 'card detail-card';
        detailCard.innerHTML = `
            <h2>${name}</h2>
            <p class="part">${part}</p>
            <p class="club-name">멋쟁이사자처럼 14기</p>
            <div class="info-section"><h3>자기소개</h3><p>${detailIntro}</p></div>
            <div class="info-section"><h3>연락처</h3><ul><li>Email: ${email}</li><li>Phone: ${phone}</li></ul></div>
            <div class="info-section"><h3>관심 기술</h3><ul>${techListHTML}</ul></div>
            <div class="info-section"><h3>한 마디</h3><p>${oneWord}</p></div>
        `;
        detailList.appendChild(detailCard);

        // 5) 명단 데이터(배열)에 새로 만든 DOM 노드 저장
        members.push({
            summaryNode: summaryCard,
            detailNode: detailCard
        });

        // 6) 마무리: 인원수 갱신, 폼 초기화 및 닫기
        updateTotalCount();
        addMemberForm.reset();
        resetErrors();
        formSection.classList.add('hidden');
    });

    // --- [기능 5] 마지막 아기 사자 삭제 ---
    document.getElementById('btn-remove-last').addEventListener('click', () => {
        // 명단이 비어있으면 동작 안 함
        if (members.length === 0) {
            alert("삭제할 아기 사자가 없습니다!");
            return;
        }

        // 배열에서 마지막 항목 제거 (pop은 제거한 항목을 반환함)
        const lastMember = members.pop();

        // 반환된 항목의 속성인 DOM 요소(화면에 보이는 카드)를 화면에서 완전 삭제
        lastMember.summaryNode.remove();
        lastMember.detailNode.remove();

        // 인원수 갱신
        updateTotalCount();
    });

    // --- [최초 실행] 페이지 로드 시 기존 HTML 정보 읽어오기 ---
    initializeDataFromDOM();
});