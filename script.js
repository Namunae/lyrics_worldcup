// 128개의 가사 배열 (가사 내용은 사용자가 수정 가능)
const lyrics = [
    "다 주어도 행복하단 건\n지금 너를 사랑하나봐", "사랑할게 하늘도 우릴 지켜줄 테니까", "들리니 사랑이 오는 걸 너도 나와 같다면", "내 가슴 안에선 결코\n그대 하난 지울 수 없어요", "지금도 네가 꼭 올 것만 같아\n나야, 하고 날 부르며", "맞아, 사랑은 짧은 선물이란 말\n어쩌면 나 소홀했나 봐", "기억나 한 때는 너의 눈부신 빛이었던 나", "그리운 게 너일까 그리웠던 그땔까 난",
    "네 향기에 취해 난 또 돌아가", "지금 옆에 있다면 내 곁에 잠들길 바래", "포기하려했던 내 맘을 후회해", "내 곁에 머물러줘요 나를 숨쉬게 해줘요", "내 곁을 떠나지마요\n그대가 없는 세상엔 나도 없으니", "나는 얘기해요 그대 없이 난 안돼요", "한 땐 우리도 많이\n사랑했잖아 좋아했잖아", "사랑이 어려서 더 상처가 아팠던 우린",
    "이 떨리는 마음을 너에게\n눈을 맞춰 전해줄게", "사랑한다 사랑한다\n내 모든 진심을 고백해", "전부 걸고 아무 의미 없는데\n내 마음엔 너밖에는 없는데", "제발 이러지마 세상이 끝난듯한 얼굴로 사랑은 너뿐이라니까", "내가 결국 남고싶은 건\n너라는 건 변하지 않아 ", "이 세상에 단 너만이\n사랑을 간절하게 만들어", "부딪혀도 돼\n끝내 부서져버리고 웃어도 돼", "달아나도 돼 끝내 멋지게\n이기지 못해도 돼",
    "나를 보지 않아도 내 눈길이 언제나\n그대를 따라가", "누가 뭐래도 내가 아니라 해도\n나는 괜찮아 볼 수만 있다면", "닫힌 맘까지 쓰다듬을게 지워줄게\n난 아파도 좋아", "사랑해 널 사랑해\n꼭 네게만 하고 싶었던 말이야", "네게만 솔직한 내 맘이\n꼭 너에게 닿을 수 있길", "시간이 흘러도 내 곁에 있을거라\n손가락 걸고서 약속한 거 기억하니", "무슨 말을 할까 망설였지만\n많이 보고 싶어 설레었던 맘 담아", "이제는 다시 울지 좀 말고 똑바로 봐\n네 앞에 있는 날",
    "내가 너에게 가 너를 지킬게", "웃게 해줄게 네가 있어야\n숨 쉴 수 있어 난 그래", "이제는 다시 울지 좀 말고\n똑봐로 봐 네 앞에 있는 날", "너라는 불빛만 찾는 나인걸", "너로 인해 모든 날들이 아름다워", "거부할 시간이 없어\n나에게 모든걸 열어줘", "여기서 끝이라면 시작조차 없었겠지", "보여줘 너란 걸 원해",
    "이렇게 닿을 듯한 입술 거친 숨결\n모든 게 맞춰질 순간에", "이 밤이 영원히 우릴 가려줬으면 해", "혼자란 생각 말아 내가 옆에 있잖아", "길 잃었을 때마다 내가 빛이 되어줄게", "오늘 어땠었니? 넌 힘들었니?\n이리 와 곁에 기대앉아", "잠이 들 때까지 네 등을 쓸어줄게", "네가 나에게로 와 나를 완전하게 만들어", "네 손을 잡고 어떤 어려움도 이겨내왔어",
    "평범한 눈에 보인 모든 게 너로\n채워질수록 모두 특별하게 변해가", "모든 그리움들이 너라서 정말 행운이야", "아무도 너를 찾지 않을 땐\n작은 빛이 돼줄게", "가장 행복한 날들이 너인데", "잠시 마주친 순간순간 기억이\n너와 내게 남아있기를", "날 위로해줄 수 있는 건 너 뿐이야", "너의 그 입맞춤에 난 비로소 내가 돼", "본능 앞에 난 목말라",
    "하루라도 좋아\n아니 잠시라도 널 안고 싶어", "마치 닿을 것만 같아 넌 오직 나만의 천사", "밤이 새도록 차가워진 나를 꼭 안아줘", "오늘따라 네가 생각나는 밤\n그냥 생각나네 너의 두 눈이", "한순간의 감정 속에 너로 가득 채웠어", "어차피 이 사랑 끝엔 빛이 나는 너와 나야", "날 위한 사랑을 속삭여줘", "아닌 척 표정을 숨겨도\n서로의 마음 알 수 있는걸",
    "이젠 감당할 수 없는 마음\n혜성처럼 네게 달려가", "더 가까이 눈 맞을 때 너와 입을 맞출게", "우리 사이에 또 불이 붙어\n너와 내 사이의 갈증은 깊어", "온 세상이 너 하나로 가득 채워져", "사랑해 사랑해 이 말이 참 늦었어", "혼자 있는 이 곳\n미래는 널 위한 그리움만 가득해", "더 솔직하게 말을 해줘 표정 말투", "내 맘은 온전히 널 위했어",
    "아프고 힘들지만 널 위해 웃어볼게", "흩날리던 봄을 마주한 채 네 모든 걸 기억할게", "시간을 돌려서 그 때로 돌아가\n이번엔 손을 놓지 않을게", "내일은 더 커져있을 네 마음\n왜 너만 모른 척해?", "나를 따스히 포근히 안아줄 너", "너라는 계절에 물들어 사랑을 느꼈다", "내겐 거대한 세상이 두렵지 않게 됐고\n서로가 의미였던 시간들", "눈부셨다 사랑했다 태양보다 더 뜨겁게",
    "조금씩 변하는 달의 모양을 보며\n우리 같아서 슬퍼졌어", "그 땐 무한한 우주가 너로만 가득했고", "보고 싶다 안고 싶다 처음으로 되돌아가", "결승선 끝까지 네 손 잡아줄게", "너의 남자로 받아줄래\n너의 남자로 살아볼게", "수많은 별들 사이 가장 빛나던 너야", "너라는 세상 속에 그대로 멈춰서\n영원한 사랑을 줄게", "걱정하진마 이내 예쁜 꽃을 피울테니까",
    "그대에게 작은 위로가 되어줄게", "그댄 내 삶의 뮤즈", "뜻도 모른 채 널 놓치긴 싫어", "그냥 떠나면 난 미칠지 몰라", "나란 남잔 사랑 앞에 겁날 게 없어\n모든 걸 잃어도 너만 얻으면 돼", "안녕 내 사랑 오늘따라 예쁘네", "니 말 들어봐도\n내 생각은 안 그런 걸 어떡해", "아무 일 없듯 어떻게 그래 네가 없이",
    "함부로 끝을 말하지마\n내 심장을 멈추지는 마", "나 너에게 바라는 건 행복하길", "널 기다려 지금 시간이 멈출 때까지", "내 전부였고 날 살게 했던 For you", "꼭 말로 해야 아니 매일같이 난 널 사랑해", "하나 약속할게 누구보다 더 잘할게", "내가 어떻게든 지켜줄게\n넌 나만 바라보면 돼", "나 너를 알아서 널 만나게 돼서\n얼마나 감사한지",
    "사랑은 그 때는 좋아서\n행복은 그 때는 몰라서", "그래도 내 맘은 다시 널 되찾고 싶어", "난 약속할게 니 곁에서만\n영원히 함께할게", "널 울리고 떠난 날 미워해도 돼", "이대로 떠나지마 내 앞에서 마지막\n가는 뒷모습을 보이지는 마", "지금은 너니까 널 사랑하니까", "사랑 하나에 세상과 겨루려는 마지막\n그 남자가 돼주겠어", "넌 나만 바라봐 돌아보지 말고",
    "시간을 넘어 데려다줄게\n너만 날 믿으면 돼", "반드시 해 보일게\n너만은 날 부끄러워 말아줘", "넌 가장 아름답던 소녀였어", "볼 수 없겠죠 이제는 모두 다 끝이겠죠", "어쩔 수 없죠 나조차도\n이렇게 집착만 하는 걸", "1분 1초도 떠나지 않을게\n내 맘엔 네가 다라서", "내가 다 해줄게 모든걸 다 줄게", "울지마 그렇게 울지마 사랑해 나도",
    "난 죽어도 안되는 게 있나봐\n너를 잊는 것처럼", "저 달에 기대어 고백할게", "솔직한 내 맘 편지에 담아\n너에게 말하고 싶어", "멀어지지 마 널 향한 내 맘은\n아직 시작도 안 했으니까", "눈감는 그 날까지 네 남자로 살아갈게\n곁에 있어줘서 고마워", "너 없인 아무 의미없단 걸 알잖아", "우린 서로의 아픔을 보네\n그만큼 가깝다는거야", "우린 여전히 아름다워 지난 일일 순 없어"
];

let round = 128;  // 현재 라운드 (128강 시작)
let currentLyrics = [];
let selectedLyrics = [];
let thirdPlaceContest = [];  // 3, 4위 결정전에서 사용할 배열
let finalResults = [];  // 최종 순위를 저장할 배열
let finalContest = [];  // 결승전에서 사용할 배열 (1, 2위 결정)
let semiFinalists = [];  // 4강에 진출한 가사를 저장할 배열

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
        // 기존의 이벤트 리스너 제거 (중복 방지)
        document.getElementById('lyric1').removeEventListener('click', handleClick1);
        document.getElementById('lyric2').removeEventListener('click', handleClick2);

        // \n을 <br>로 변경하여 HTML에서 줄바꿈 처리
        document.getElementById('lyric1').innerHTML = currentLyrics[0].replace(/\n/g, '<br>');
        document.getElementById('lyric2').innerHTML = currentLyrics[1].replace(/\n/g, '<br>');

        // 새로운 이벤트 리스너 추가
        document.getElementById('lyric1').addEventListener('click', handleClick1);
        document.getElementById('lyric2').addEventListener('click', handleClick2);
    } else {
        checkNextRound();  // 남은 가사가 없으면 라운드 종료 처리
    }
}

// 가사 선택 시 동작 (중복 방지를 위해 따로 함수로 분리)
function handleClick1() {
    selectLyric(0);
}

function handleClick2() {
    selectLyric(1);
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
            round = '3rdPlace';  // 3, 4위 결정전 진행
            startThirdPlaceMatch();  // 3, 4위 결정전 시작
            return;
        } else if (round === '3rdPlace') {
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
