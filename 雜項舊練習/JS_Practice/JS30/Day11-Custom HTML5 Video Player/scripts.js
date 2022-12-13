const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreenButton = player.querySelector('.fullScreen');

function play() {
    (video.paused) ? video.play() : video.pause();
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function updateProgress() {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percentage}%`;
}

function jump(e) {
    video.currentTime = (e.offsetX / progress.clientWidth) * video.duration;
    console.log(11);
}

function skip() {
    console.log(this);
    video.currentTime += parseFloat(this.dataset.skip);
}

function updateRange() {
    video[this.name] = this.value;
    console.log(this);
}

function fullScreen() {
    if (!fullScreenActive) {
        if (player.requestFullscreen) {
            player.requestFullscreen();
        } else if (player.msRequestFullscreen) {
            player.msRequestFullscreen();
        } else if (player.mozRequestFullScreen) {
            player.mozRequestFullScreen();
        } else if (player.webkitRequestFullscreen) {
            player.webkitRequestFullscreen();
        }

        fullScreenActive = true;
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }

        fullScreenActive = false;
    }
}

toggle.addEventListener('click', play);
video.addEventListener('click', play);

video.addEventListener('timeupdate', updateProgress);
let mousedown = false;
progress.addEventListener('click', jump);
progress.addEventListener('mousemove', (e) => mousedown && jump(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', updateRange));

let fullScreenActive = false;
fullScreenButton.addEventListener('click', fullScreen);
