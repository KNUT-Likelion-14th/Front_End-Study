let addBtn = document.querySelector('.add_btn');
let deleteBtn = document.querySelector('.delete_btn');
let inputs = document.querySelectorAll('.form_container input');
let part = document.querySelector('#part');
let form = document.querySelector('.form_container');
let cancleBtn = document.querySelector('.close');
let techList = [];

addBtn.addEventListener('click', function () {
    form.style.display = 'block';
    document.querySelector('.background').style.display = 'block';
});

cancleBtn.addEventListener('click', function (e) {
    e.preventDefault();
    form.style.display = 'none';
    document.querySelector('.background').style.display = 'none';
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
});

deleteBtn.addEventListener('click', function () {
    let cardContainers = document.querySelectorAll('.card_container');
    let listContaienrs = document.querySelectorAll('.detail_container');
    
    cardContainers[cardContainers.length - 1].remove();
    listContaienrs[listContaienrs.length - 1].remove();
});

document.querySelector('.submit').addEventListener('click', function () {
    techList = inputs[1].value.split(',').map(tech => tech.trim());
    console.log(inputs, techList);

    let newlist = document.createElement('div');
    newlist.classList.add('detail_container');
    newlist.innerHTML = `
        <div class="detail_info">
            <h2 class="name">${inputs[0].value}</h2>
            <p class="part">${part.value}</p>
            <p class="track">LION TRACK</p>
        </div>

        <div class="introduce_container">
            <h2>자기소개</h2>
            <p class="introduce">${inputs[3].value}</p>
        </div>

        <div class="contact_container">
            <h2>연락처</h2>
            <p class="email">${inputs[4].value}</p>
            <p class="phone">${inputs[5].value}</p>
            <p class="website">Website: <a href="${inputs[6]?.value}"
                    target="_blank">${inputs[6]?.value}</a></p>
        </div>

        <div class="tech_container">
            <h2>관심 기술</h2>
            <ul class="tech_list">
                ${techList.map(tech => `<li>${tech}</li>`).join('')}
            </ul>
        </div>

        <div class="last_container">
            <h2>한 마디</h2>
            <p class="last_message">${inputs[7].value}</p>
        </div>
    `;
    document.querySelector('.info_list_container').appendChild(newlist);

    let newCard = document.createElement('div');
    newCard.classList.add('card_container');
    newCard.innerHTML = `
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Card Image">

        <p class="tech_box">
            ${techList[0]}
        </p>
        <div class="card_text_container">
            <h2 class="card_title">
                ${inputs[0].value}
            </h2>
            <p class="part">
                ${part.value}
            </p>
            <p class="info">
                ${inputs[2].value}
            </p>
        </div>
    `;
    document.querySelector('.card_list_container').appendChild(newCard);

    inputs.forEach(input => {
        console.log(input.value);
    });
    console.log(part.value);
});


