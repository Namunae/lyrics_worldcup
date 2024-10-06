const lyrics = [
    "가사 1", "가사 2", "가사 3", "가사 4", // 여기 가사 추가 가능
    "가사 5", "가사 6", "가사 7", "가사 8"
];

let round = 1;
let currentLyrics = [];
let selectedLyrics = [];

// 가사 랜덤하게 섞기
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 초기화
function startRound() {
    if (round === 1) {
        currentLyrics = shuffle([...lyrics]);
    } else {
        currentLyrics = [...selectedLyrics];
        selectedLyrics = [];
    }

    if (currentLyrics.length === 1) {
        document.getElementById('lyrics-pair').style.display = 'none';
        document.getElementById('winner-announcement').innerHTML = `우승 가사: ${currentLyrics[0]}`;
    } else {
        updateLyrics();
    }
}

// 가사 업데이트
function updateLyrics() {
    document.getElementById('lyric1').innerText = currentLyrics[0];
    document.getElementById('lyric2').innerText = currentLyrics[1];
    document.getElementById('round-info').innerText = `${round} / ${Math.log2(lyrics.length)}`;
}

// 가사 선택 시 동작
document.getElementById('lyric1').addEventListener('click', function() {
    selectLyric(currentLyrics[0]);
});

document.getElementById('lyric2').addEventListener('click', function() {
    selectLyric(currentLyrics[1]);
});

// 가사 선택 처리
function selectLyric(selected) {
    selectedLyrics.push(selected);
    currentLyrics.splice(0, 2); // 선택한 두 가사를 배열에서 제거

    if (currentLyrics.length === 0) {
        round++;
        startRound();
    } else {
        updateLyrics();
    }
}

// 게임 시작
startRound();
