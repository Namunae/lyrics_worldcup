// 128개의 가사 배열 (가사 내용은 사용자가 수정 가능)
const lyrics = [
    // 가사 배열 내용
];

let round = 128;  // 현재 라운드 (128강 시작)
let currentLyrics = [];
let selectedLyrics = [];
let thirdPlaceContest = [];  // 3, 4위 결정전에서 사용할 배열
let finalResults = [];  // 최종 순위를 저장할 배열
let finalContest = [];  // 결승전에서 사용할 배열 (1, 2위 결정)
let semiFinalists = [];  // 4강에 진출한 가사를 저장할 배열
let isProcessing = false;  // 중복 처리 방지 플래그

// 가사 랜덤하게 섞기
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 모바일 환경 감지
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// 라운드 시작
function startRound() {
    if (round === 128) {
        currentLyrics = shuffle([...lyrics]);  // 128개의 가사를 랜덤으로 섞음
    } else if (round === 2) {
        currentLyrics = [...finalContest];  // 결승전 가사 표시
    } else if (round === '3rdPlace') {
        currentLyrics = [...thirdPlaceContest];  // 3-4위전 가사 표시
    } else if (round === 4) {
        currentLyrics = [...semiFinalists];  // 4강에 진출한 가사 표시
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
        document.getElementById('lyric1').removeEventListener('click', handleClick1);
        document.getElementById('lyric2').removeEventListener('click', handleClick2);
        document.getElementById('lyric1').removeEventListener('touchend', handleClick1);
        document.getElementById('lyric2').removeEventListener('touchend', handleClick2);

        document.getElementById('lyric1').innerText = currentLyrics[0];
        document.getElementById('lyric2').innerText = currentLyrics[1];

        // 모바일과 데스크탑을 구분하여 이벤트 등록
        if (isMobile) {
            document.getElementById('lyric1').addEventListener('touchend', handleClick1);
            document.getElementById('lyric2').addEventListener('touchend', handleClick2);
        } else {
            document.getElementById('lyric1').addEventListener('click', handleClick1);
            document.getElementById('lyric2').addEventListener('click', handleClick2);
        }
    } else {
        checkNextRound();  // 남은 가사가 없으면 라운드 종료 처리
    }
}

// 가사 선택 시 동작 (중복 방지를 위해 따로 함수로 분리)
function handleClick1() {
    if (!isProcessing) {
        isProcessing = true;  // 처리 중 플래그 설정
        selectLyric(0);
        isProcessing = false;  // 처리 완료 후 플래그 해제
    }
}

function handleClick2() {
    if (!isProcessing) {
        isProcessing = true;  // 처리 중 플래그 설정
        selectLyric(1);
        isProcessing = false;  // 처리 완료 후 플래그 해제
    }
}

// 가사 선택 처리
function selectLyric(choice) {
    if (round === 4) {
        finalContest.push(currentLyrics[choice]);  // 결승 진출자 저장
        thirdPlaceContest.push(currentLyrics[1 - choice]);  // 3-4위 전용 배열에 저장
    } else if (round === 2) {
        finalResults[0] = currentLyrics[choice];  // 1등 저장
        finalResults[1] = currentLyrics[1 - choice];  // 2등 저장
    } else if (round === '3rdPlace') {
        finalResults[2] = currentLyrics[choice];  // 3등 저장
        finalResults[3] = currentLyrics[1 - choice];  // 4등 저장
    } else {
        selectedLyrics.push(currentLyrics[choice]);  // 선택된 가사 저장
    }

    currentLyrics.splice(0, 2);  // 선택한 두 가사를 배열에서 제거

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
            semiFinalists = [...selectedLyrics];  // 4강 진출 가사 저장
        } else if (round === 4) {
            // 4강이 끝나면 먼저 3, 4위 결정전을 진행
            round = '3rdPlace';  // 3, 4위 결정전 진행
            startThirdPlaceMatch();  // 3, 4위 결정전 시작
            return;
        } else if (round === '3rdPlace') {
            // 3, 4위 결정전이 끝나면 결승전으로
            round = 2;  // 결승전 진행
            startRound();  // 결승전 시작
            return;
        } else if (round === 2) {
            showFinalResults();  // 최종 결과 표시
            return;  // 결승이 끝나면 더 이상 라운드를 진행하지 않음
        }

        startRound();  // 새로운 라운드 시작
    }
}

// 3, 4위 결정전 시작
function startThirdPlaceMatch() {
    currentLyrics = [...thirdPlaceContest];  // 3, 4위 가사 배열 초기화
    selectedLyrics = [];
    document.getElementById('round-info').innerText = `3, 4위 결정전`;
    updateLyrics();
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

