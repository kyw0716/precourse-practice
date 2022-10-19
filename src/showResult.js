export default function showResult({ generateRandomNumber, inputElement }) {
  const h3 = document.querySelector("h3");
  const resultMessageContainer = document.getElementById("result");
  const restartButton = document.getElementById("game-restart-button");

  restartButton.style.display = "none";

  this.render = (resultString) => {
    if (resultString === "3 스트라이크") {
      h3.innerHTML = `🎉정답을 맞추셨습니다🎉`;
      resultMessageContainer.innerHTML = `게임을 새로 시작하시겠습니까?`;
      restartButton.style.display = "block";
    } else {
      h3.innerHTML = `📄 결과`;
      resultMessageContainer.style.display = `block`;
      resultMessageContainer.innerHTML = resultString;
      restartButton.style.display = `none`;
    }
  };

  restartButton.addEventListener("click", () => {
    h3.innerHTML = `📄 결과`;
    resultMessageContainer.innerHTML = ``;
    restartButton.style.display = `none`;
    inputElement.value = ``;
    generateRandomNumber();
  });
}
