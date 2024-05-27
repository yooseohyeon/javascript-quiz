import { state } from './state.js';
import { createFinish } from './spa.js'; // createFinish를 가져옴

//퀴즈 어플리케이션을 초기화하는 함수
export const initializeApp = () => {
  const quiz = document.querySelector('.quiz').innerText;
  const answerContainer = document.querySelector('.answers');
  const answerList = document.querySelectorAll('.answer');
  const background = document.querySelector('body');

  // 퀴즈 문자열에서 숫자만 추출하는 함수
  const getOperands = (str) => {
    const regex = /[^0-9]/g;
    return str.replace(regex, "").split("").map(Number);
  };

  // 두 숫자의 합을 계산하는 함수
  const calculateAnswer = (operands) => {
    return operands.reduce((acc, value) => acc + value);
  };

  const operands = getOperands(quiz);
  const answer = calculateAnswer(operands);

  // 정답을 맞췄을 때의 스타일 업데이트
  const handleCorrectAnswer = (clickedButton) => {
    clickedButton.style.backgroundColor = "green";
    background.style.backgroundColor = "green";
    state.currentAnswer = true;
    answerList.forEach(item => {
      if (item !== clickedButton) {
        item.style.backgroundColor = "red";
      }
    });
    
    // 마지막 페이지에서 정답을 맞춘 경우 createFinish 호출
    if (window.location.pathname === '/3') {
      createFinish();
    }
  };

  // 오답일 때의 스타일 업데이트
  const handleIncorrectAnswer = (clickedButton) => {
    clickedButton.style.backgroundColor = "red";
    background.style.backgroundColor = "red";
    state.currentAnswer = false;
    alert('정답이 아닙니다. 다시 풀어보세요');
  };

  // 클릭 이벤트 핸들러
  const handleAnswerClick = (event) => {
    if (event.target.className !== 'answer') return; //이벤트가 발생한 대상이 응답 버튼이 아닐 경우 return
    const buttonText = parseInt(event.target.textContent);
    if (buttonText === answer) {
      handleCorrectAnswer(event.target);
    } else {
      handleIncorrectAnswer(event.target);
    }
  };

  // 이벤트 리스너 등록
  answerContainer.addEventListener('click', handleAnswerClick);
};

// 처음 로드할 때 초기화
initializeApp();
