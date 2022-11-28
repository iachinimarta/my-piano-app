const keys = document.querySelectorAll('.key');

const soundsContainer = {
    do: '01-do.mp3',
    dodiesis: '02-dodiesis.mp3',
    re: '03-re.mp3',
    rediesis: '04-rediesis.mp3',
    mi: '05-mi.mp3',
    fa: '06-fa.mp3',
    fadiesis: '07-fadiesis.mp3',
    sol: '08-sol.mp3',
    soldiesis: '09-soldiesis.mp3',
    la: '10-la.mp3',
    ladiesis: '11-ladiesis.mp3',
    si: '12-si.mp3'
}

function play(inputKey) {
    const audio = new Audio();
    const sound = soundsContainer[inputKey];
    audio.src = 'assets/sounds/' + sound;
    audio.play();
}

keys.forEach(function (keys) {
    keys.addEventListener('click', function() {
        const key = keys.id;
        play(key);
    });
});
