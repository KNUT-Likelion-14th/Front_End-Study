document.addEventListener('DOMContentLoaded', () => {

    let members = [];

    const summaryGrid = document.getElementById('summary-grid');
    const detailList = document.getElementById('detail-list');
    const totalCountDisplay = document.getElementById('total-count');
    const formSection = document.getElementById('form-section');
    const addMemberForm = document.getElementById('add-member-form');
    
    function initializeDataFromDOM() {
        const initialSummaryCards = summaryGrid.querySelectorAll('.summary-card');
        const initialDetailCards = detailList.querySelectorAll('.detail-card');

        initialSummaryCards.forEach((summaryNode, index) => {
            const detailNode = initialDetailCards[index];
            if (!detailNode) return;

            members.push({
                summaryNode: summaryNode,
                detailNode: detailNode
            });
        });
        updateTotalCount();
    }

    function updateTotalCount() {
        totalCountDisplay.textContent = `총 ${members.length}명`;
    }

    document.getElementById('btn-toggle-form').addEventListener('click', () => {
        formSection.classList.toggle('hidden');
    });

    document.getElementById('btn-cancel').addEventListener('click', () => {
        addMemberForm.reset();
        resetErrors();
        formSection.classList.add('hidden');
    });

    function validateForm() {
        let isValid = true;
        const requiredInputs = addMemberForm.querySelectorAll('.required');

        requiredInputs.forEach(input => {
            const errorMsg = input.nextElementSibling;
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

    addMemberForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

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

        members.push({
            summaryNode: summaryCard,
            detailNode: detailCard
        });

        updateTotalCount();
        addMemberForm.reset();
        resetErrors();
        formSection.classList.add('hidden');
    });

    document.getElementById('btn-remove-last').addEventListener('click', () => {
        if (members.length === 0) {
            alert("삭제할 아기 사자가 없습니다!");
            return;
        }

        const lastMember = members.pop();

        lastMember.summaryNode.remove();
        lastMember.detailNode.remove();

        updateTotalCount();
    });

    initializeDataFromDOM();
});