var progressBar = document.getElementById('progress');
var balans = document.getElementById('balans'); 
var price = document.getElementById('price'); 
var amounta = 300;

balans.innerHTML = amounta;

function increaseProgress(progressBar) {
    var width = 0;
    var interval = setInterval(function() {
        width += 1;
        progressBar.style.width = width + '%';
        if (width >= 100) {
            clearInterval(interval);
            width = 0;
            amounta += gain[currentBlockIndex];
            balans.innerHTML = amounta;
            setTimeout(increaseProgress, 15, progressBar);
        }
    }, 15);
}

var jobPrice = [300, 1000, 12000, 16000, 20000];
var gain = [0, 100, 300, 500, 700, 1300];
var currentBlockIndex = 0;

function openNextBlock() {
    var progressBarId = 'progress' + (currentBlockIndex + 1);
    var progressBar = document.getElementById(progressBarId);
    var blocks = document.querySelectorAll('.block');


    if (currentBlockIndex < blocks.length) {
        if (amounta >= jobPrice[currentBlockIndex]) {
            amounta -= jobPrice[currentBlockIndex];
            balans.innerHTML = amounta;
            blocks[currentBlockIndex].style.display = "inline-flex";
            increaseProgress(progressBar);

            var profit = blocks[currentBlockIndex].querySelector('.profit'); 
            currentBlockIndex++;
            profit.innerHTML = gain[currentBlockIndex]; 
            price.innerHTML = jobPrice[currentBlockIndex];
        } else {
            alert("У вас не достаточно средств");
        }
    }
}

price.innerHTML = jobPrice[currentBlockIndex];
var profit = document.querySelector('.profit'); 
profit.innerHTML = gain[currentBlockIndex];

