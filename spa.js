import { initializeApp } from "./app.js";
import { state } from './state/state.js';
import second from "./components/second.js";
import three from "./components/three.js";

//두 dom 요소는 모든 페이지에 항상 존재하므로 전역 변수로 선언
//전역 변수로 선언하면 dom을 탐색하는 비용을 줄여 성능 향상 
const container = document.querySelector('.quiz-container');
const background = document.querySelector('body');

const routes = {
  "/2": second,
  "/3": three,
};

//url를 변경하고 내용을 업데이트하는 함수
const changeUrl = (requestedUrl) => {
  history.pushState(null, null, requestedUrl);
  container.innerHTML = routes[requestedUrl].template();
  initializeApp(); // 앱 로직을 다시 초기화
  pageInitialization(requestedUrl);
};

//페이지 초기화 함수
const pageInitialization = (requestedUrl) => {
  addNavigationEventListener(); // 이벤트 리스너 재설정
  state.currentAnswer = false; // 응답 상태 false
  background.style.backgroundColor = "white"; // 배경색 white로 초기화

  if (requestedUrl === '/3') {
    createFinish();
  }
};

// 내비게이션에 대한 이벤트 리스너를 추가하는 함수
const addNavigationEventListener = () => {
  const navigation = document.querySelector('.page-navigation');
  if (navigation) {
    navigation.addEventListener("click", () => {
      if (state.currentAnswer) {
        const url = window.location.pathname === "/2" ? "/3" : "/2";
        changeUrl(url);
      } else {
        alert('정답을 맞추어야 다음 페이지로 이동할 수 있습니다.');
      }
    });
  }
};

// 정답을 맞출 경우 finish 버튼 생성
export const createFinish = () => {
  const end = document.querySelector('.end');
  if (end && state.currentAnswer) {
    end.style.display = 'block';
  }
};

// 마지막 페이지에서는 네비게이션 이벤트 리스너를 호출하지 않는다다
if (window.location.pathname !== '/3') {
  addNavigationEventListener();
}

// 뒤로 가기/앞으로 가기 내비게이션 처리
window.addEventListener("popstate", () => {
  changeUrl(window.location.pathname);
});