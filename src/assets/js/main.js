var progressBar = document.getElementById('progress');
var balans = document.getElementById('balans'); 
var price = document.getElementById('price'); 

// Функция для увеличения прогресса
function increaseProgress(progressBar) {
    var width = 0;
    var interval = setInterval(function() {
        width += 1;
        progressBar.style.width = width + '%';
        if (width >= 100) {
            clearInterval(interval);
            width = 0;
            amounta += 1000;
            balans.innerHTML = amounta;
            setTimeout(increaseProgress, 15, progressBar);
        }
    }, 15);
}
var amounta = 1000;
var currentBlockIndex = 0;
var jobPrice = [1000, 10000, 20000];

balans.innerHTML = amounta;

function openNextBlock() {
    var progressBarId = 'progress' + (currentBlockIndex + 1);
    var progressBar = document.getElementById(progressBarId);
    var blocks = document.querySelectorAll('.block');
    if (currentBlockIndex < blocks.length) {
        if (amounta >= jobPrice[currentBlockIndex]) {
            amounta -= 1000;
            balans.innerHTML = amounta;
            blocks[currentBlockIndex].style.display = "inline-flex";
            increaseProgress(progressBar);
            currentBlockIndex++;
            price.innerHTML = jobPrice[currentBlockIndex]; // Установка цены после увеличения индекса
        } else {
            alert("У вас не достаточно средств");
        }
    }
}

price.innerHTML = jobPrice[currentBlockIndex];
