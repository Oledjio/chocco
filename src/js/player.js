let video = document.getElementById('video');
const mainPlay = document.querySelector('.video__start');
const controlsPlay = document.querySelector('.controls__start');
const controlsPause = document.querySelector('.controls__pause');
let controlsDuration = document.querySelector('.controls__duration');
let controlsVolume = document.querySelector('.controls__volume');
let volumeButton = document.querySelector('.controls__sound');
let volumeImage = document.querySelector('.controls__image');
let updateProgress; //переменная, которая отвечает за ползунок перемотки

mainPlay.addEventListener('click', function(){
    closeIcons();
    video.play();
});

controlsPlay.addEventListener('click', function(){
    closeIcons();
    video.play();
});
function closeIcons(){
    mainPlay.style.display = 'none';
    controlsPlay.style.display = 'none';
    controlsPause.style.display = 'flex';
}
controlsPause.addEventListener('click',function(){
    showItems();
    video.pause();
});
video.addEventListener('click', function(){
    if(!video.classList.contains('play')){
        video.classList.add('play');
        closeIcons();
        video.play();
    }
    else{
        showItems();
        video.pause();
        video.classList.remove('play');
    }
});
function showItems(){
    mainPlay.style.display = 'block'
    controlsPlay.style.display = 'block';
    controlsPause.style.display = 'none';
}
//перемотка видео
video.addEventListener('play', function(){
    controlsDuration.max = Math.round(video.duration);
    updateProgress = setInterval(function(){
        controlsDuration.value = video.currentTime;
    });
});

controlsDuration.addEventListener('input', function(){
    updateProgress = null;
    video.currentTime = controlsDuration.value;
});
//управление звуком
controlsVolume.addEventListener('input', function() {
    video.volume = controlsVolume.value;
});

volumeButton.addEventListener('click', function(){
    if (video.volume != 0){
        video.volume = 0;
        volumeImage.style.fill = 'white';
    } else{
        video.volume = controlsVolume.value;
        volumeImage.style.fill = '#626262';
    }
});