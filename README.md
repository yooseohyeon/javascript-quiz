인프런 워밍업 스터디 1기 프론트엔드에 참가해 과제인 퀴즈 어플을 만들던 중 정답을 맞추면 다음 문제로 페이지가 이동하는 기능을 구현해야 했습니다. <br>
페이지가 여러개여도 그 구성은 퀴즈와 응답 버튼으로 동일하게 이루어져 있는데 늘 새로운 데이터를 불러오는 것보다는 한 페이지 내에서 그때그때 필요한 부분만 바꾸는 spa로 만들어보면 어떨까 생각이 들었습니다. <br>
그래서 아래 글을 참고해 바닐라 자바스크립트로 spa를 구현해보았습니다. <br>
https://velog.io/@eunddodi/Vanilla-Javascript로-SPA-구현하기프로그래머스-쇼핑몰-SPA
<br> <br>
퀴즈 어플의 기능 구현은 app.js에, spa 기능 구현은 spa.js에 작성했습니다. <br>
사용자가 퀴즈의 정답을 맞췄는지 여부를 app.js와 spa.js 두 파일 모두에서 공유해야 했습니다. (정답을 맞춘 경우에만 다음 문제로 이동하는 것을 허용하게 하고 싶었음) <br>
그래서 퀴즈의 정답을 맞춘 여부를 state.js에서 상태로 정의하고, 이 상태를 여러 파일에서 접근하고 변경할 수 있도록 했습니다. 
