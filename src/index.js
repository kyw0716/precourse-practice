import UserInput from "./userInput.js";

export default function BaseballGame() {
  this.state = {
    correctNumber: GenerateRandomValue(),
    userInputNumber: 0,
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    console.log(this.state);
  };

  const UserInputComponent = new UserInput({
    setUserInputNumber: (inputNumber) => {
      this.setState({
        userInputNumber: inputNumber,
      });
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
