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

function openCert(type) {
    const modal = document.getElementById('certModal');
    const fullImg = document.getElementById('fullCertImage');
    

    if(type === 'html-img') {
        fullImg.src = 'html_cert.png'; 
    } else if(type === 'python-img') {
        fullImg.src = 'python101.png';
    }
    
    modal.style.display = 'flex';

    setTimeout(() => {
        fullImg.style.transform = 'scale(1)';
    }, 10);
}

function closeCert() {
    const modal = document.getElementById('certModal');
    const fullImg = document.getElementById('fullCertImage');
    
    fullImg.style.transform = 'scale(0.8)';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 200);
    document.getElementById('certModal').style.display = 'flex';
}
