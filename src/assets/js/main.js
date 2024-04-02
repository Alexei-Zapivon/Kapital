var progressBar = document.getElementById('progress');
var balans = document.getElementById('balans'); 
var blocks = document.querySelectorAll('.block');
var currentBlockIndex = 0;
var amounta = 1000;

balans.innerHTML = amounta;

// Функция для увеличения прогресса
function increaseProgress() {
    var width = 0;
    var interval = setInterval(function() {
        width += 1;
        progressBar.style.width = width + '%';
        if (width >= 100) {
            clearInterval(interval);
            width = 0;
            amounta += 100;
            balans.innerHTML = amounta;
            setTimeout(increaseProgress);
        }
    }, 15);
}

increaseProgress();

function openNextBlock() {
    if (currentBlockIndex < blocks.length) {
        blocks[currentBlockIndex].style.display = "inline-flex";
        currentBlockIndex++;
    }
}