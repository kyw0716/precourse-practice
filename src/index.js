export default function BaseballGame() {
  this.state = {
    correctNumber: GenerateRandomValue(),
  };
}

const GenerateRandomValue = () => {
  let random = [];
  while (random.length < 3) {
    const newNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!random.includes(newNumber)) random.push(newNumber);
  }

  return random.join("");
};

new BaseballGame();
