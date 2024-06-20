let post = document.getElementById('thePost'),
    audio = document.querySelector('audio'),
    tittle = document.getElementById('tittle'),
    time = document.getElementById('time'),
    pos = document.getElementById("pos"),
    prev = document.getElementById('prev'),
    play = document.getElementById('stop'),
    next = document.getElementById('next'),
    li = document.getElementById('list').getElementsByTagName('li'),
    cur = 0;

play.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        play.querySelector('img').src = playIcon;
    } else {
        audio.pause();
        play.querySelector('img').src = stopIcon;
    }
});

time.addEventListener('click', (e) => {
    const rate = e.offsetX * 100 / 204;
    pos.style.width = `${rate}}%`;
    audio.currentTime = audio.duration * (rate / 100);
    if (audio.paused) {
        audio.play();
        play.querySelector('img').src = playIcon;
    }
});

audio.addEventListener('timeupdate', () => {
    const postion = audio.currentTime * 100 / audio.duration;
    pos.style.width = `${postion}%`;
});

audio.onended = audioEnded = () => {
    ++cur;
    if (cur === music.length) {
        cur = 0;
    }
    init();
    audio.play();
    play.querySelector('img').src = playIcon;
}

prev.addEventListener('click', () => {
    --cur;
    if (cur === -1) {
        cur = music.length - 1;
    }
    init();
    audio.play();
    play.querySelector('img').src = playIcon;
});

next.addEventListener('click', () => {
    ++cur;
    if (cur === music.length) {
        cur = 0;
    }
    init();
    audio.play();
    play.querySelector('img').src = playIcon;
});

for (let i = 0; i !== li.length; ++i) {
    li[i].addEventListener('click', () => {
        cur = i;
        init();
        audio.play();
        play.querySelector('img').src = playIcon;
    });
}

function init() {
    audio.src = music[cur];
    post.src = posts[cur];
    tittle.innerHTML = document.getElementById(`${cur + 1}`).innerHTML;
    for (let i = 1; i <= music.length; ++i) {
        document.getElementById(`${i}`).style.backgroundColor = '#eee';
    }
    document.getElementById(`${cur + 1}`).style.backgroundColor = '#fff';
    audio.load();
}

init();