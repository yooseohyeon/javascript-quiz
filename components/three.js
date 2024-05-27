class three {
  template() {
    return `
    <div class="quiz-container">
      <p class="quiz">1+2+3+4?</p>
      <div class="answers">
        <button class="answer">10</button>
        <button class="answer">13</button>
      </div>
      <a class="end">finish!</a>
    </div>
    `;
  }
}
export default new three();