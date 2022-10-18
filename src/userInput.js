export default function userInput({
  setInputNumber,
  inputElement,
  formElement,
}) {
  this.state = {
    inputNumber: 0,
  };

  this.check = () => {
    const numberArr = this.state.inputNumber.split("");
    let pass = true;

    if (numberArr.length !== 3) {
      pass = false;
      alert("입력 숫자는 3자리여야 합니다!");
    } else {
      for (let i = 0; i < 3; i++) {
        if (numberArr.indexOf(numberArr[i]) !== i) {
          pass = false;
          alert("중복되는 숫자가 존재합니다!");
          break;
        }
      }
    }
    return pass;
  };

  inputElement.addEventListener("keyup", (e) => {
    this.state = {
      inputNumber: e.target.value,
    };
  });

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    if (this.check()) setInputNumber(this.state.inputNumber);
    else {
      inputElement.value = ``;
    }
  });
}
