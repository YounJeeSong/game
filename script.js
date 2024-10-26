const gameDiv = document.getElementById('game');
let count = 0;
let timer;
let timeElapsed = 0;
const timerDisplay = document.getElementById('timer'); // 타이머 표시를 위한 div

// 1-25 무작위 숫자 배열 생성
const numbers = Array.from({ length: 25 }, (_, i) => i + 1);
shuffle(numbers); // 숫자를 무작위로 섞습니다.

// 무작위로 버튼 생성
numbers.forEach(num => {
    const button = document.createElement('button');
    button.textContent = num;
    button.style.backgroundColor = '#D6E2F4'; // 기본 배경색
    button.style.color = '#525252'; // 기본 글씨색
    button.disabled = false; // 기본적으로 버튼을 활성화 상태로 설정

    button.onclick = function () {
        if (parseInt(button.textContent) === 1) {
            // 1번 버튼 클릭 시 타이머 시작
            startTimer();
        }

        if (parseInt(button.textContent) === count + 1) {
            count++;
            button.disabled = true;
            button.style.backgroundColor = '#BCC4D1'; // 눌린 버튼 색상 변경
            button.style.color = '#9C9C9C'; // 눌린 버튼 글씨색 변경

            if (count === 25) {
                clearInterval(timer);
                alert("게임 완료! 총 경과 시간: " + timeElapsed + "초");
            }
        } else {
            // 순서가 틀리면 버튼 배경색 변경
            button.style.backgroundColor = '#D0BCD1'; // 잘못된 숫자 클릭 시 색상 변경
            setTimeout(() => {
                button.style.backgroundColor = '#D6E2F4'; // 원래 색상으로 되돌리기
            }, 500); // 0.3초 후에 원래 색상으로 되돌리기
        }
    };
    gameDiv.appendChild(button);
});

// 타이머 시작 함수
function startTimer() {
    if (!timer) { // 타이머가 이미 실행 중이지 않은 경우에만 실행
        timer = setInterval(function () {
            timeElapsed++;
            // 타이머 형식 조정 (시:분:초)
            const minutes = String(Math.floor(timeElapsed / 60)).padStart(2, '0');
            const seconds = String(timeElapsed % 60).padStart(2, '0');
            timerDisplay.textContent = "Time : " + minutes + ":" + seconds; // 타이머 표시
        }, 1000);
    }
}

// 숫자 무작위 섞기 함수
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
