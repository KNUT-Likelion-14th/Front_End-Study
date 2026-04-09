const summaryCards = document.getElementById('summaryCards');
const detailCards = document.getElementById('detailCards');
const emptyState = document.getElementById('emptyState');
const modalBackdrop = document.getElementById('modalBackdrop');
const openModalButton = document.getElementById('openModalButton');
const emptyAddButton = document.getElementById('emptyAddButton');
const deleteLastButton = document.getElementById('deleteLastButton');
const closeModalButton = document.getElementById('closeModalButton');
const cancelButton = document.getElementById('cancelButton');
const form = document.getElementById('addLionForm');
const DEFAULT_IMAGE = 'assets/chaechae.jpeg';

const members = [
    {
        name: '이영수',
        part: 'Frontend',
        skills: ['React', 'TypeScript', 'UI · UX', 'Web APIs'],
        tagline: '안녕하세요. 프론트엔드 개발자 이영수입니다.',
        intro: '한국교통대학교 멋쟁이사자처럼 부회장 이영수입니다. 프론트엔드 개발에 집중하며 UI·UX와 웹 API에도 관심이 많습니다.',
        email: 'leeys4903@naver.com',
        github: 'https://github.com/chaechae-04',
        website: 'https://kmong-sample.vercel.app',
        quote: '돈 많이 벌고 싶다.',
        image: DEFAULT_IMAGE
    }
];

function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

function render() {
    const isEmpty = members.length === 0;
    emptyState.hidden = !isEmpty;
    summaryCards.hidden = isEmpty;
    detailCards.hidden = isEmpty;
    deleteLastButton.disabled = isEmpty;

    summaryCards.innerHTML = members
        .map((member) => {
            const firstSkill = member.skills[0] || member.part;
            return `
                <article class="card_container">
                    <img src="${escapeHtml(member.image)}" alt="${escapeHtml(member.name)} 프로필" width="400" height="240" class="card_container__image">
                    <p class="tech_box">${escapeHtml(firstSkill)}</p>
                    <div class="card_text_container">
                        <h2 class="card_title">${escapeHtml(member.name)}</h2>
                        <p class="part">${escapeHtml(member.part)}</p>
                        <p class="info">${escapeHtml(member.tagline)}</p>
                    </div>
                </article>
            `;
        })
        .join('');

    detailCards.innerHTML = members
        .map((member) => {
            const techChips = member.skills
                .map((skill) => `<li><span class="tech-chip">${escapeHtml(skill)}</span></li>`)
                .join('');

            return `
                <article class="detail_container">
                    <header class="detail_info">
                        <h2 class="name">${escapeHtml(member.name)}</h2>
                        <p class="part">${escapeHtml(member.part)}</p>
                        <p class="track">멋쟁이사자처럼</p>
                    </header>

                    <section class="introduce_container">
                        <h2 class="section-heading">자기소개</h2>
                        <p class="introduce">${escapeHtml(member.intro)}</p>
                    </section>

                    <section class="contact_container">
                        <h2 class="section-heading">연락처</h2>
                        <p class="email"><a class="detail-link" href="mailto:${escapeHtml(member.email)}">${escapeHtml(member.email)}</a></p>
                        <p class="website">
                            <a class="detail-link" href="${escapeHtml(member.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <span class="detail-sep" aria-hidden="true">·</span>
                            <a class="detail-link" href="${escapeHtml(member.website)}" target="_blank" rel="noopener noreferrer">Web Page</a>
                        </p>
                    </section>

                    <section class="tech_container">
                        <h2 class="section-heading">관심 기술</h2>
                        <ul class="tech_list" role="list">${techChips}</ul>
                    </section>

                    <section class="last_container">
                        <h2 class="section-heading">한 마디</h2>
                        <blockquote class="last_message">
                            <p>${escapeHtml(member.quote)}</p>
                        </blockquote>
                    </section>
                </article>
            `;
        })
        .join('');
}

function openModal() {
    modalBackdrop.hidden = false;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalBackdrop.hidden = true;
    document.body.style.overflow = '';
    clearErrors();
    form.reset();
}

function setFieldError(field, message) {
    const wrapper = field.closest('.form-field');
    const error = wrapper.querySelector('.error-message');
    wrapper.classList.add('has-error');
    error.textContent = message;
}

function clearErrors() {
    form.querySelectorAll('.form-field').forEach((field) => {
        field.classList.remove('has-error');
        const error = field.querySelector('.error-message');
        if (error) {
            error.textContent = '';
        }
    });
}

function validateUrl(value, input) {
    if (!value.trim()) {
        return false;
    }

    try {
        const parsed = new URL(value);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch {
        input.setCustomValidity('유효한 URL을 입력하세요.');
        return false;
    }
}

function collectFormData() {
    clearErrors();

    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const part = (data.get('part') || '').toString().trim();
    const skillsRaw = (data.get('skills') || '').toString();
    const tagline = (data.get('tagline') || '').toString().trim();
    const intro = (data.get('intro') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const github = (data.get('github') || '').toString().trim();
    const website = (data.get('website') || '').toString().trim();
    const quote = (data.get('quote') || '').toString().trim();
    const photoFile = form.elements.photo.files[0];

    const skills = skillsRaw
        .split(',')
        .map((skill) => skill.trim())
        .filter(Boolean);

    let isValid = true;

    if (!name || name.length < 2) {
        setFieldError(form.elements.name, '이름은 2글자 이상 입력해주세요.');
        isValid = false;
    }

    if (!part) {
        setFieldError(form.elements.part, '파트를 선택해주세요.');
        isValid = false;
    }

    if (skills.length === 0) {
        setFieldError(form.elements.skills, '관심 기술을 1개 이상 입력해주세요.');
        isValid = false;
    }

    if (!tagline || tagline.length < 5) {
        setFieldError(form.elements.tagline, '한 줄 소개는 5글자 이상 입력해주세요.');
        isValid = false;
    }

    if (!intro || intro.length < 10) {
        setFieldError(form.elements.intro, '자기 소개는 10글자 이상 입력해주세요.');
        isValid = false;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setFieldError(form.elements.email, '유효한 이메일을 입력해주세요.');
        isValid = false;
    }

    form.elements.github.setCustomValidity('');
    if (!validateUrl(github, form.elements.github)) {
        setFieldError(form.elements.github, 'GitHub URL을 정확히 입력해주세요.');
        isValid = false;
    }

    form.elements.website.setCustomValidity('');
    if (!validateUrl(website, form.elements.website)) {
        setFieldError(form.elements.website, '웹사이트 URL을 정확히 입력해주세요.');
        isValid = false;
    }

    if (!quote || quote.length < 2) {
        setFieldError(form.elements.quote, '한 마디를 입력해주세요.');
        isValid = false;
    }

    let image = DEFAULT_IMAGE;
    if (photoFile) {
        if (!photoFile.type.startsWith('image/')) {
            setFieldError(form.elements.photo, '이미지 파일만 업로드할 수 있어요.');
            isValid = false;
        } else if (photoFile.size > 5 * 1024 * 1024) {
            setFieldError(form.elements.photo, '이미지는 5MB 이하로 업로드해주세요.');
            isValid = false;
        } else {
            image = URL.createObjectURL(photoFile);
        }
    }

    if (!isValid) {
        return null;
    }

    return {
        name,
        part,
        skills,
        tagline,
        intro,
        email,
        github,
        website,
        quote,
        image
    };
}

openModalButton.addEventListener('click', openModal);
emptyAddButton.addEventListener('click', openModal);
deleteLastButton.addEventListener('click', () => {
    if (members.length === 0) {
        alert('삭제할 아기사자가 없습니다.');
        return;
    }

    const target = members[members.length - 1];
    const shouldDelete = confirm(`정말 마지막 아기사자 '${target.name}'님을 삭제할까요?`);

    if (!shouldDelete) {
        return;
    }

    members.pop();
    render();
});
closeModalButton.addEventListener('click', closeModal);
cancelButton.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', (event) => {
    if (event.target === modalBackdrop) {
        closeModal();
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const member = collectFormData();

    if (!member) {
        return;
    }

    members.unshift(member);
    render();
    closeModal();
});

render();
