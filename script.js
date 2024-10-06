// 128개의 가사 배열
const lyrics = Array.from({ length: 128 }, (_, i) => `가사 ${i + 1}`);

let round = 128;  // 현재 라운드 (128강 시작)
let currentLyrics = [];
let selectedLyrics = [];
let finalResults = [];

// 가사 랜덤하게 섞기
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 라운드 시작
function startRound() {
    if (round === 128) {
        currentLyrics = shuffle([...lyrics]);  // 128개의 가사를 랜덤으로 섞음
    } else {
        currentLyrics = shuffle([...selectedLyrics]);  // 이전 라운드에서 선택된 가사들을 섞음
        selectedLyrics = [];  // 선택된 가사 목록 초기화
    }

    document.getElementById('round-info').innerText = `${round}강 진행 중`;
    updateLyrics();
}

// 가사 업데이트 (다음 두 개의 가사를 보여줌)
function updateLyrics() {
    if (currentLyrics.length >= 2) {
        document.getElementById('lyric1').innerText = currentLyrics[0];
        document.getElementById('lyric2').innerText = currentLyrics[1];
    } else {
        checkNextRound();  // 남은 가사가 없으면 라운드 종료 처리
    }
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
    currentLyrics.splice(0, 2);  // 선택한 두 가사를 배열에서 제거
    console.log('선택된 가사:', selected);  // 로그로 선택된 가사 확인
    console.log('남은 가사:', currentLyrics);  // 로그로 남은 가사 확인

    if (currentLyrics.length >= 2) {
        updateLyrics();  // 남은 가사 쌍이 있으면 업데이트
    } else {
        checkNextRound();  // 남은 가사가 없으면 라운드 종료
    }
}

// 라운드 종료 체크 및 다음 라운드로 이동
function checkNextRound() {
    if (currentLyrics.length === 0) {
        if (round === 128) {
            round = 64;
        } else if (round === 64) {
            round = 32;
        } else if (round === 32) {
            round = 16;
        } else if (round === 16) {
            round = 8;
        } else if (round === 8) {
            round = 4;
        } else if (round === 4) {
            finalResults.push(selectedLyrics[1]);  // 3등
            finalResults.push(selectedLyrics[0]);  // 4등
            round = 2;  // 결승
        } else if (round === 2) {
            finalResults.push(selectedLyrics[0]);  // 2등
        }

        startRound();  // 새로운 라운드 시작
    }
}

// 최종 결과 표시
function showFinalResults() {
    document.getElementById('lyrics-pair').style.display = 'none';  // 가사 선택 버튼 숨김
    document.getElementById('round-info').innerText = '최종 결과';
    document.getElementById('winner-announcement').innerHTML = `
        1등: ${finalResults[0]}<br>
        2등: ${finalResults[1]}<br>
        3등: ${finalResults[2]}<br>
        4등: ${finalResults[3]}
    `;
}

// 게임 시작
startRound();
