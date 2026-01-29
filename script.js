const audio = document.getElementById('mainAudio');
const menu = document.getElementById('musicMenu');
const disk = document.getElementById('diskIcon');
const volumeSlider = document.getElementById('volumeSlider');

function toggleMenu() {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function playTrack(file, time) {
    audio.src = file;
    audio.play();
    disk.classList.add('rotating');
    console.log("Now Playing: " + file + " Duration: " + time);
}

volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});