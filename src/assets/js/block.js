var main = document.getElementById('main');
var balansId = document.getElementById('balans'); 

var blockIndex = 0;
var balans = 12300;

var newBlock = [100, 300, 400, 500, 600, 700, 800];

balansId.innerHTML = balans;

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
            }, 15);
        }
    }, 15);
}

function createBlock(blockNumber) {
    var block = `
    <div class="block ${blockNumber}">
        <img class="image-job" src="/src/assets/img/Buling.jpg">
        <div class="info">
            <div class="progress-bar" id="progress${blockNumber}"></div>
            <div class="title-info">Работа на стройке</div>
            <div>Прибыль в день: <div class="">${balans}</div></div>
            <button>Надорвать спину</button>
        </div>
    </div>`;
    return block;
}

function openNextBlock() {
    if (balans > 0 && blockIndex < newBlock.length) { // Добавлено условие, чтобы проверить, что есть элементы в массиве newBlock
        var money = newBlock[blockIndex]; // Получаем прибыль для текущего блока из массива newBlock
        main.insertAdjacentHTML('beforeend', createBlock(blockIndex));
        var progressBar = document.getElementById('progress' + blockIndex);
        increaseProgress(progressBar, money); // Передаем прибыль в функцию increaseProgress
        blockIndex++;
        balans -= 300;
        balansId.innerHTML = balans;
    }
}