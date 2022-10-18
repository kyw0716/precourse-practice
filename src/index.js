import userInput from "./userInput.js";

export default function BaseballGame({ target }) {
  const result = document.getElementById("result");
  const restartButton = document.getElementById("game-restart-button");
  const h3 = document.querySelector("h3");
  const inputElement = document.getElementById("user-input");
  const formElement = document.getElementById("user-input").parentNode;

  restartButton.style.display = "none";

  restartButton.addEventListener("click", () => {
    this.generateRandomNumber();
    h3.innerHTML = `📄 결과`;
    restartButton.style.display = "none";
    result.innerHTML = ``;
    result.style.display = "block";
    inputElement.value = "";
  });

  this.state = {
    randomNumber: 0,
    inputNumber: 0,
    returnString: "",
  };

  this.setState = (newState) => {
    this.state = {
      ...this.state,
      ...newState,
    };
    if (newState.inputNumber)
      this.setState({
        returnString: this.play(
          this.state.randomNumber,
          this.state.inputNumber
        ),
      });
    if (newState.returnString) result.innerHTML = `${this.state.returnString}`;
    console.log(this.state);
  };

  this.generateRandomNumber = () => {
    let newNumber = [];
    while (newNumber.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!newNumber.includes(randomNumber)) newNumber.push(randomNumber);
    }
    newNumber = newNumber.join("");
    this.setState({
      randomNumber: newNumber,
    });
  };

  this.play = (randomNumber, inputNumber) => {
    const random = randomNumber.split("");
    const input = inputNumber.split("");
    let score = [0, 0];
    random.forEach((v, i) => {
      if (v === input[i]) score[0] += 1;
      if (input.includes(v)) score[1] += 1;
    });
    score[1] = score[1] - score[0];

    if (score[0] === 3) {
      h3.innerHTML = `🎊정답을 맞추셨습니다!!🎊`;
      restartButton.style.display = "block";
      result.style.display = `none`;
      return ``;
    } else {
      return `${score[1] === 0 ? "" : `${score[1]} 볼`} ${
        score[0] === 0 ? "" : `${score[0]} 스트라이크`
      } ${score[0] + score[1] === 0 ? `낫싱` : ``} `;
    }
  };

  const Input = new userInput({
    setInputNumber: (userInputNumber) => {
      this.setState({
        inputNumber: userInputNumber,
      });
    },
    inputElement: inputElement,
    formElement: formElement,
  });

  this.generateRandomNumber();
}

new BaseballGame({
  target: document.getElementById("app"),
});
