// 128개의 가사 배열 (가사 내용은 사용자가 수정 가능)
const lyrics = [
    "가사 1", "가사 2", "가사 3", "가사 4", "가사 5", "가사 6", "가사 7", "가사 8",
    "가사 9", "가사 10", "가사 11", "가사 12", "가사 13", "가사 14", "가사 15", "가사 16",
    "가사 17", "가사 18", "가사 19", "가사 20", "가사 21", "가사 22", "가사 23", "가사 24",
    "가사 25", "가사 26", "가사 27", "가사 28", "가사 29", "가사 30", "가사 31", "가사 32",
    "가사 33", "가사 34", "가사 35", "가사 36", "가사 37", "가사 38", "가사 39", "가사 40",
    "가사 41", "가사 42", "가사 43", "가사 44", "가사 45", "가사 46", "가사 47", "가사 48",
    "가사 49", "가사 50", "가사 51", "가사 52", "가사 53", "가사 54", "가사 55", "가사 56",
    "가사 57", "가사 58", "가사 59", "가사 60", "가사 61", "가사 62", "가사 63", "가사 64",
    "가사 65", "가사 66", "가사 67", "가사 68", "가사 69", "가사 70", "가사 71", "가사 72",
    "가사 73", "가사 74", "가사 75", "가사 76", "가사 77", "가사 78", "가사 79", "가사 80",
    "가사 81", "가사 82", "가사 83", "가사 84", "가사 85", "가사 86", "가사 87", "가사 88",
    "가사 89", "가사 90", "가사 91", "가사 92", "가사 93", "가사 94", "가사 95", "가사 96",
    "가사 97", "가사 98", "가사 99", "가사 100", "가사 101", "가사 102", "가사 103", "가사 104",
    "가사 105", "가사 106", "가사 107", "가사 108", "가사 109", "가사 110", "가사 111", "가사 112",
    "가사 113", "가사 114", "가사 115", "가사 116", "가사 117", "가사 118", "가사 119", "가사 120",
    "가사 121", "가사 122", "가사 123", "가사 124", "가사 125", "가사 126", "가사 127", "가사 128"
];


let round = 128;  // 현재 라운드 (128강 시작)
let currentLyrics = [];
let selectedLyrics = [];
let finalResults = [];
let thirdPlaceCandidates = [];  // 4강에서 탈락한 가사 저장
let finalCandidates = [];  // 결승에 진출한 두 곡 저장

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
            thirdPlaceCandidates = [...selectedLyrics];  // 4강에서 탈락한 가사 저장
            finalCandidates = [...currentLyrics];  // 결승에 진출한 가사 저장
            startThirdPlaceMatch();  // 3, 4위전 시작
            return;  // 3, 4위전으로 이동
        } else if (round === 2) {
            finalResults.push(selectedLyrics[0]);  // 1등
            finalResults.push(selectedLyrics[1]);  // 2등
            showFinalResults();  // 최종 결과 표시
            return;  // 최종 결과로 이동
        }

        startRound();  // 다음 라운드 시작
    }
}

// 3, 4위 결정전 시작
function startThirdPlaceMatch() {
    document.getElementById('round-info').innerText = "3, 4위 결정전";
    currentLyrics = [...thirdPlaceCandidates];  // 4강에서 탈락한 두 개의 가사를 불러옴
    updateLyrics();  // 3, 4위 결정전 진행
}

// 3, 4위 결정
function selectThirdPlace(selected) {
    finalResults.push(selected);  // 3등 추가
    const fourthPlace = currentLyrics.find(lyric => lyric !== selected);  // 남은 가사 4등으로 결정
    finalResults.push(fourthPlace);  // 4등 추가
    startFinalMatch();  // 3, 4위전 후 결승전 시작
}

// 결승전 시작
function startFinalMatch() {
    document.getElementById('round-info').innerText = "결승전";
    currentLyrics = [...finalCandidates];  // 결승에 진출한 두 개의 가사를 불러옴
    updateLyrics();  // 결승전 진행
}

// 결승전 결과 처리
function selectFinalWinner(selected) {
    finalResults.unshift(selected);  // 1등 추가
    const secondPlace = currentLyrics.find(lyric => lyric !== selected);  // 남은 가사 2등으로 결정
    finalResults.unshift(secondPlace);  // 2등 추가
    showFinalResults();  // 최종 결과 표시
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