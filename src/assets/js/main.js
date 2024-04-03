var main = document.getElementById('main');
var balansId = document.getElementById('balans'); 
var price = document.getElementById('price'); 

var blockIndex = 0;
var balans = 300;
var klikerBuy = 10;

var profits = 0;
var priceNewBlock = [
    300, 1000, 2000,
    6000, 8000, 12000,
    20000, 40000, 100000,
    1000000, 3000000
]

balansId.innerHTML = balans;
price.innerHTML = priceNewBlock[blockIndex];

function profitBlock(money) {
    balans += money
}

function increaseProgress(progressBar, money) {
    var width = 0;
    var interval = setInterval(function() {
        width += 1;
        progressBar.style.width = width + '%';
        if (width >= 100) {
            clearInterval(interval);
            width = 0;
            profitBlock(money); 
            balansId.innerHTML = balans;
            setTimeout(function() {
                increaseProgress(progressBar, money);
            }, 30);
        }
    }, 30);
}

var imageNames = [
    'image1.jpg', 'image2.jpg', 'image3.jpg',
    'image4.jpg', 'image5.jpg', 'image6.jpg',
    'image7.jpg', 'image8.jpg', 'image9.jpg',
    'image10.jpg'
];

var descriptions = [
    "Сдавать бутылки (Это хотя бы что-то)",
    "Сдавать металл (Как у нас в городе не хватает алюминия!)",
    "Быть вором (Лучше не берите с собой мешок)",
    "Стать дворником (Тут проблема с отпуском, но мусор тоже любит компанию)",
    "Пойти на стройку (Только не забудьте шлем)",
    "Устроиться в продуктовый (Сладости бесплатно? Да, пожалуйста!)",
    "Стать парикмахером (Волосы клиентов - ваше полотно искусства!)",
    "Работать стилистом (Волосы клиентов - ваша холст)",
    "Варить компот (Когда жизнь дает вам фрукты...)",
    "Открыть бизнес (Теперь вы ваш собственный начальник! Поздравляем!)"
];


function createBlock(blockNumber) {
    var imageName = imageNames[blockNumber % imageNames.length];
    var imagePath = `/src/assets/img/${imageName}`;
    
    var block = `
    <div class="block block${blockNumber}">
        <img class="image-job" src="${imagePath}">
        <div class="info">
            <div class="progress-bar" id="progress${blockNumber}"></div>
            <div class="title-info">${descriptions[blockNumber]}</div> <!-- Используем описание из массива descriptions -->
            <div class="profit-title">Прибыль в день: <div class="">${profits}</div></div>
            <button class="button-clicker" onclick="cliker()">Надорвать спину</button>
        </div>
    </div>`;
    return block;
}


function cliker() {
    profitBlock(klikerBuy);
    balansId.innerHTML = balans;
}

function bafLife() {
    if (balans >= 100) {
        balans -= 100;
        klikerBuy += 1
        balansId.innerHTML = balans;
    }
}

function openNextBlock() {
    if (balans >= 0 && balans - priceNewBlock[blockIndex] >= 0) { 
        profits += 50;
        var money = profits;
        main.insertAdjacentHTML('beforeend', createBlock(blockIndex));
        var progressBar = document.getElementById('progress' + blockIndex);
        increaseProgress(progressBar, money); 
        balans -= priceNewBlock[blockIndex];
        balansId.innerHTML = balans;
        blockIndex++; 
        price.innerHTML = priceNewBlock[blockIndex];

        if (blockIndex >= priceNewBlock.length) {
            alert('Поздравляем, вы выплатили все долги и завершили игру!');
        }
    }
}
