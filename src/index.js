import showResult from "./showResult.js";
import userInput from "./userInput.js";

export default function BaseballGame() {
  this.state = {
    randomNumber: generateRandomNumber(),
  };

  this.setState = (newState) => {
    this.state = {
      ...this.state,
      ...newState,
    };
  };

  const Result = new showResult({
    generateRandomNumber: () => {
      this.setState({
        randomNumber: generateRandomNumber(),
      });
    },
    inputElement: document.getElementById("user-input"),
  });

  const Input = new userInput({
    returnResult: (inputNumber) => {
      Result.render(play(this.state.randomNumber.split(""), inputNumber));
    },
  });
}

const generateRandomNumber = () => {
  let arr = [];
  while (arr.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!arr.includes(number)) arr.push(number);
  }
  arr = arr.join("");
  return arr;
};

const play = (random, input) => {
  let returnString = "";
  const strikeCount = random.filter((v, i) => v === input[i]).length;
  const ballCount =
    random.filter((v) => input.includes(v)).length - strikeCount;
  if (ballCount !== 0) returnString += `${ballCount}볼 `;
  if (strikeCount !== 0) returnString += `${strikeCount}스트라이크`;
  if (ballCount === 0 && strikeCount === 0) returnString += `낫싱`;

  return returnString;
};

new BaseballGame();
