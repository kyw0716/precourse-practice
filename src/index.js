import UserInput from "./userInput.js";

export default function BaseballGame() {
  const resultTitle = document.querySelector("h3");
  const resultElement = document.getElementById("result");
  const gameRestartButton = document.getElementById("game-restart-button");
  gameRestartButton.style.display = `none`;

  this.state = {
    correctNumber: GenerateRandomValue(),
    userInputNumber: 0,
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
  };

  this.play = (computerNumber, userNumber) => {
    const computerNumberArray = String(computerNumber).split("");
    const userNumberArray = String(userNumber).split("");
    let strikeCount = 0;
    let ballCount = 0;
    let hint = "";

    userNumberArray.forEach((v, i) => {
      if (v === computerNumberArray[i]) strikeCount += 1;
      if (computerNumberArray.includes(v)) ballCount += 1;
    });
    ballCount -= strikeCount;

    if (ballCount > 0) hint += `${ballCount}볼 `;
    if (strikeCount > 0) hint += `${strikeCount}스트라이크`;
    if (hint.length === 0) hint += `낫싱`;

    return hint;
  };

  this.render = () => {
    const hint = this.play(
      this.state.correctNumber,
      this.state.userInputNumber
    );

    if (hint === "3스트라이크") {
      resultTitle.innerHTML = `🎉정답을 맞추셨습니다🎉`;
      resultElement.innerHTML = `게임을 새로 시작하시겠습니까?`;
      gameRestartButton.style.display = `block`;
    } else {
      resultTitle.innerHTML = `📄 결과`;
      resultElement.innerHTML = `${hint}`;
      gameRestartButton.style.display = `none`;
    }
  };

  const UserInputComponent = new UserInput({
    setUserInputNumber: (inputNumber) => {
      this.setState({
        userInputNumber: inputNumber,
      });
      this.render();
    },
  });
}

const GenerateRandomValue = () => {
  let random = [];
  while (random.length < 3) {
    const newNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!random.includes(newNumber)) random.push(newNumber);
  }

  return Number(random.join(""));
};

new BaseballGame();
