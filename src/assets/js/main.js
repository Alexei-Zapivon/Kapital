var progressBar = document.getElementById('progress');

// Функция для увеличения прогресса
function increaseProgress() {
    var width = 0;
    var interval = setInterval(function() {
        width += 1;
        progressBar.style.width = width + '%';
        if (width >= 100) {
            clearInterval(interval);
            width = 0;
            setTimeout(increaseProgress);
        }
    }, 15);
}
increaseProgress();

