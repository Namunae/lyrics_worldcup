// 가사 배열 (128개의 가사)
let lyrics = [
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

let currentRound = lyrics.length;
let roundIndex = 0;
let selectedLyrics = [];

// 페이지가 로드될 때 게임을 초기화하고 시작
window.onload = () => {
  shuffleLyrics();
  displayLyrics();
};

// 가사 섞기 함수 (Fisher-Yates shuffle 알고리즘 사용)
function shuffleLyrics() {
  for (let i = lyrics.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lyrics[i], lyrics[j]] = [lyrics[j], lyrics[i]];
  }
}

// 가사 두 개를 화면에 표시하는 함수
function displayLyrics() {
  // 현재 라운드에서 비교할 가사 두 개를 보여줌
  if (roundIndex < lyrics.length - 1) {
    document.getElementById('lyric1').textContent = lyrics[roundIndex];
    document.getElementById('lyric2').textContent = lyrics[roundIndex + 1];
    document.getElementById('round-info').textContent = `${currentRound}강`;
  } else {
    // 현재 라운드가 끝나면 다음 라운드로 넘어감
    if (selectedLyrics.length === 1) {
      // 최종 승자가 결정됨
      document.getElementById('round-info').textContent = "최종 승자: " + selectedLyrics[0];
      document.getElementById('lyric1').style.display = 'none';
      document.getElementById('lyric2').style.display = 'none';
    } else {
      // 다음 라운드로 진출한 가사들로 다시 시작
      lyrics = selectedLyrics;
      selectedLyrics = [];
      roundIndex = 0;
      currentRound /= 2;
      shuffleLyrics();
      displayLyrics();
    }
  }
}

// 사용자가 가사를 선택했을 때 호출되는 함수
function selectLyric(choice) {
  selectedLyrics.push(lyrics[roundIndex + choice]);
  roundIndex += 2;
  displayLyrics();
}