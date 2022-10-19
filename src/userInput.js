export default function userInput({ returnResult }) {
  const Input = document.getElementById("user-input");
  const Form = Input.parentNode;

  this.state = {
    currentInput: "",
  };

  this.setState = (newState) => {
    this.state = {
      ...this.state,
      ...newState,
    };
  };

  Input.addEventListener("keyup", (e) => {
    if (e.target.value.replace(/[1-9]/g, "").length > 0) {
      alert("숫자만 입력 가능합니다!!");
      Input.value = e.target.value.replace(/[^1-9]/g, "");
    }
    if (e.target.value.length > 3) {
      alert("세 글자 이상 입력하실 수 없습니다!!");
      Input.value = e.target.value.slice(0, 3);
    }
    const currentInputArr = e.target.value.split("");
    if (
      currentInputArr.filter((v, i) => currentInputArr.indexOf(v) === i)
        .length !== e.target.value.length
    ) {
      alert("중복되는 값은 입력하실 수 없습니다!!");
      Input.value = currentInputArr
        .filter((v, i) => currentInputArr.indexOf(v) === i)
        .join("");
    }
    this.setState({
      currentInput: e.target.value,
    });
  });

  Form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (this.state.currentInput.length < 3) {
      alert("입력 숫자는 3자여야합니다!!");
    } else {
      returnResult(this.state.currentInput.split(""));
    }
  });
}
