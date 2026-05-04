let babyLions = [
    {
        img: "https://avatars.githubusercontent.com/u/133869563?v=4",
        name: "조성현",
        part: "프론트엔드",
        tech: "React, AWS, Next.js",
        intro: "현재 프론트엔드 개발자로서 공부하고 있습니다.",
        email: "apple071228@gmail.com",
        website: "https://github.com/chosungh",
        phone: "010-3805-5793",
        comment: "열심히 하겠습니다"
    },
    {
        img: "https://avatars.githubusercontent.com/u/133869563?v=4",
        name: "조성현",
        part: "프론트엔드",
        tech: "React, AWS, Next.js",
        intro: "현재 프론트엔드 개발자로서 공부하고 있습니다.",
        email: "apple071228@gmail.com",
        website: "https://github.com/chosungh",
        phone: "010-3805-5793",
        comment: "열심히 하겠습니다"
    },
    {
        img: "https://avatars.githubusercontent.com/u/133869563?v=4",
        name: "조성현",
        part: "프론트엔드",
        tech: "React, AWS, Next.js",
        intro: "현재 프론트엔드 개발자로서 공부하고 있습니다.",
        email: "apple071228@gmail.com",
        website: "https://github.com/chosungh",
        phone: "010-3805-5793",
        comment: "열심히 하겠습니다"
    },
    {
        img: "https://avatars.githubusercontent.com/u/133869563?v=4",
        name: "조성현",
        part: "프론트엔드",
        tech: "React, AWS, Next.js",
        intro: "현재 프론트엔드 개발자로서 공부하고 있습니다.",
        email: "apple071228@gmail.com",
        website: "https://github.com/chosungh",
        phone: "010-3805-5793",
        comment: "열심히 하겠습니다"
    },
    {
        img: "https://avatars.githubusercontent.com/u/133869563?v=4",
        name: "조성현",
        part: "프론트엔드",
        tech: "React, AWS, Next.js",
        intro: "현재 프론트엔드 개발자로서 공부하고 있습니다.",
        email: "apple071228@gmail.com",
        website: "https://github.com/chosungh",
        phone: "010-3805-5793",
        comment: "열심히 하겠습니다"
    },
    {
        img: "https://avatars.githubusercontent.com/u/133869563?v=4",
        name: "조성현",
        part: "프론트엔드",
        tech: "React, AWS, Next.js",
        intro: "현재 프론트엔드 개발자로서 공부하고 있습니다.",
        email: "apple071228@gmail.com",
        website: "https://github.com/chosungh",
        phone: "010-3805-5793",
        comment: "열심히 하겠습니다"
    },
    {
        img: "https://avatars.githubusercontent.com/u/133869563?v=4",
        name: "조성현",
        part: "프론트엔드",
        tech: "React, AWS, Next.js",
        intro: "현재 프론트엔드 개발자로서 공부하고 있습니다.",
        email: "apple071228@gmail.com",
        website: "https://github.com/chosungh",
        phone: "010-3805-5793",
        comment: "열심히 하겠습니다"
    },
    {
        img: "https://avatars.githubusercontent.com/u/133869563?v=4",
        name: "조성현",
        part: "프론트엔드",
        tech: "React, AWS, Next.js",
        intro: "현재 프론트엔드 개발자로서 공부하고 있습니다.",
        email: "apple071228@gmail.com",
        website: "https://github.com/chosungh",
        phone: "010-3805-5793",
        comment: "열심히 하겠습니다"
    },
    {
        img: "https://avatars.githubusercontent.com/u/133869563?v=4",
        name: "조성현",
        part: "프론트엔드",
        tech: "React, AWS, Next.js",
        intro: "현재 프론트엔드 개발자로서 공부하고 있습니다.",
        email: "apple071228@gmail.com",
        website: "https://github.com/chosungh",
        phone: "010-3805-5793",
        comment: "열심히 하겠습니다"
    },
];

// 화면에 아기 사자 명단을 렌더링하는 함수
function renderLions() {
    const gridContainer = document.querySelector('.grid_container');
    const infoContainer = document.querySelector('.babylion_info_container');
    const countElement = document.getElementById('lion_count');
    
    const filterPartRaw = document.getElementById('filter_part')?.value || 'All';
    let filterPart = filterPartRaw;
    if (filterPartRaw === 'Front') filterPart = '프론트엔드';
    else if (filterPartRaw === 'Back') filterPart = '백엔드';
    else if (filterPartRaw === 'Design') filterPart = '디자인';

    const sortOrder = document.getElementById('sort_order')?.value || 'latest';
    const searchName = document.getElementById('search_name')?.value.trim().toLowerCase() || '';

    let filteredLions = [...babyLions];

    if (filterPart !== 'All') {
        filteredLions = filteredLions.filter(lion => lion.part === filterPart);
    }

    if (searchName !== '') {
        filteredLions = filteredLions.filter(lion => lion.name.toLowerCase().includes(searchName));
    }

    if (sortOrder === 'latest') {
        filteredLions.reverse();
    } else if (sortOrder === 'oldest') {
        // 기본 배열 순서 유지
    } else if (sortOrder === 'name') {
        filteredLions.sort((a, b) => a.name.localeCompare(b.name));
    }

    // 컨테이너 초기화
    gridContainer.innerHTML = '';
    infoContainer.innerHTML = '';
    
    // 배열 순회하며 DOM 요소 생성 및 추가
    filteredLions.forEach((lion) => {
        // Grid Card 생성
        const newBabyLionCard = document.createElement('div');
        newBabyLionCard.classList.add('card');
        newBabyLionCard.innerHTML = `
            <div class="image_wrapper">
                <img src=${lion.img} alt="profile">
                <span class="overlay_badge">14th</span>
            </div>

            <h2 class="card_name">${lion.name}</h2>
            <p class="card_part">${lion.part}</p>
            <p class="card_intro">${lion.comment}</p>
        `;
        gridContainer.appendChild(newBabyLionCard);
        
        // Info Card 생성
        const newInfoCard = document.createElement('div');
        newInfoCard.classList.add('info_container');
        
        const techArray = lion.tech ? lion.tech.split(',').map(t => t.trim()) : [];
        const techListHTML = techArray.map(t => `<li class="f-body">${t}</li>`).join('');
        
        newInfoCard.innerHTML = `
            <div class="info_header">
                <h2 class="f-title">${lion.name}</h2>
                <p class="f-highlight">${lion.part}</p>
                <p class="f-body">멋쟁이사자처럼</p>
            </div>
            
            <div class="info_contact">
                <ul>
                    <li class="f-body"><strong>Email:</strong> ${lion.email}</li>
                    <li class="f-body"><strong>Website:</strong> <a href="${lion.website}" target="_blank">${lion.website}</a></li>
                    <li class="f-body"><strong>Phone:</strong> ${lion.phone}</li>
                </ul>
            </div>
            
            <div class="info_section">
                <h3 class="f-section">관심 기술</h3>
                <ul class="tech_list">${techListHTML}</ul>
            </div>
            
            <div class="info_section">
                <h3 class="f-section">자기소개</h3>
                <p class="f-body">${lion.intro}</p>
            </div>
        `;
        infoContainer.appendChild(newInfoCard);
    });
    
    if (countElement) {
        countElement.innerText = `현재 아기 사자 수: ${filteredLions.length}`;
    }
}

// 페이지 로드 시 초기 렌더링
document.addEventListener('DOMContentLoaded', renderLions);

// 입력 폼 표시, 숨김 토글
function showInputForm() {
    const inputForm = document.querySelector('.input_form_container');
    const ShowInputFormButton = document.getElementById('show_input_form_btn');

    if (inputForm) {
        const currentDisplay = window.getComputedStyle(inputForm).display;
        if (currentDisplay === 'none') {
            inputForm.style.display = 'block';
            if (ShowInputFormButton) ShowInputFormButton.textContent = '입력 폼 가리기';
        } else {
            inputForm.style.display = 'none';
            if (ShowInputFormButton) ShowInputFormButton.textContent = '아기 사자 추가';
        }
    }
}

// 새로운 아기 사자 추가
function addLion(event) {
    event.preventDefault(); // 새로고침 방지

    const name = document.getElementById('name').value;
    let part = document.getElementById('part_selector').value;
    if (part === 'Front') part = '프론트엔드';
    else if (part === 'Back') part = '백엔드';
    else if (part === 'Design') part = '디자인';

    const tech = document.getElementById('tech').value;
    const intro = document.getElementById('intro').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const phone = document.getElementById('phone').value;
    const comment = document.getElementById('comment').value;
    
    if (!name || !part) {
        alert("이름과 파트는 필수 입력 사항입니다.");
        return;
    }
    
    // 배열에 객체 형태로 새 데이터 추가
    babyLions.push({
        name,
        part,
        tech,
        intro,
        email,
        website,
        phone,
        comment
    });

    renderLions();
    
    // 폼 입력값 초기화 및 닫기
    const formElement = document.querySelector('.input_form_container form');
    if (formElement) {
        formElement.reset();
        showInputForm(); // 추가 후 폼 숨기기
    }

}

const AddRandomLionButton = document.getElementById('add_random_lion_btn');
const AddFiveRandomLionButton = document.getElementById('add_five_random_lion_btn');
const ReloadButton = document.getElementById('reload_btn');
const ReloadText = document.getElementById('status_text');

async function lionRandomAdd(number) {
    ReloadText.textContent = '불러오는 중...'
    AddRandomLionButton.disabled = true;
    AddFiveRandomLionButton.disabled = true;
    ReloadButton.disabled = true;
    try {
        if (number > 5) {
            babyLions = [];
        }

        const response = await fetch(`https://randomuser.me/api/?results=${number}&nat=us,gb,ca,au,nz`);
        
        if (!response.ok) {
            throw new Error(`에러 메세지: ${response.status}`);
        }

        const data = await response.json();

        data.results.forEach(user => {
            const number = Math.floor(Math.random() * 3);
            let userData = {};

            switch (number) {
                case 0:
                    userData = {
                        img: user.picture.large,
                        name: `${user.name.first} ${user.name.last}`,
                        part: "프론트엔드",
                        tech: "React, AWS, Next.js",
                        intro: "현재 프론트엔드 개발자로서 공부하고 있습니다.",
                        email : user.email,
                        website: "https://github.com/chosungh",
                        phone : user.cell,
                        comment: "프론트엔드로서 열심히 하겠습니다"
                    }
                    break;
                case 1:
                    userData = {
                        img: user.picture.large,
                        name: `${user.name.first} ${user.name.last}`,
                        part: "디자인",
                        tech: "Figma, Photoshop",
                        intro: "현재 디자이너로서 공부하고 있습니다.",
                        website: "https://github.com/chosungh",
                        email : user.email,
                        phone : user.cell,
                        comment: "디자이너로서 열심히 하겠습니다"
                    }
                    break;
                case 2:
                    userData = {
                        img: user.picture.large,
                        name: `${user.name.first} ${user.name.last}`,
                        part: "백엔드",
                        tech: "Jenkins, AWS, Django",
                        intro: "현재 백엔드 개발자로서 공부하고 있습니다.",
                        email : user.email,
                        website: "https://github.com/chosungh",
                        phone : user.cell,
                        comment: "백엔드로서 열심히 하겠습니다"
                    }
                    break;
            }
            babyLions.push(userData);
        });
        renderLions();
    } catch (error) {
        console.log(`에러: ${error}`);
    } finally {
        ReloadText.textContent = '완료!';
         setTimeout(() => {
            ReloadText.textContent = '준비 완료';
        }, 750);
        AddRandomLionButton.disabled = false;
        AddFiveRandomLionButton.disabled = false;
        ReloadButton.disabled = false;
    }
}

// 마지막 아기 사자 삭제 기능
function deleteLastLion() {
    if (babyLions.length > 0) {
        babyLions.pop(); 
        renderLions();  
    } else {
        alert('삭제할 아기 사자가 없습니다.');
    }
}

const ShowInputFormButton = document.getElementById('show_input_form_btn');
const DeleteButton = document.getElementById('last_lion_delete_btn');
const CancelButton = document.getElementById('cancel_btn');
const FormElement = document.querySelector('.input_form_container form');

AddRandomLionButton.addEventListener('click', () => lionRandomAdd(1));
AddFiveRandomLionButton.addEventListener('click', () => lionRandomAdd(5));
ReloadButton.addEventListener('click', () => lionRandomAdd(babyLions.length));
CancelButton.addEventListener('click', showInputForm);
ShowInputFormButton.addEventListener('click', showInputForm);
DeleteButton.addEventListener('click', deleteLastLion);
FormElement.addEventListener('submit', addLion);

document.getElementById('filter_part')?.addEventListener('change', renderLions);
document.getElementById('sort_order')?.addEventListener('change', renderLions);
document.getElementById('search_name')?.addEventListener('input', renderLions);