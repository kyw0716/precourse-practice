export default function UserInput() {
  const inputElement = document.getElementById("user-input");
  const formElement = inputElement.parentNode;

  this.state = {
    currentInput: "",
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    console.log(this.state);
  };

  inputElement.addEventListener("input", (e) => {
    const currentInputValueArray = e.target.value.split("");

    // 문자를 입력한 경우
    if (e.target.value.match(/[^1-9]/) !== null) {
      alert(
        "문자는 입력하실 수 없습니다. 1~9까지의 수를 중복없이 3개 입력 바랍니다!"
      );
      inputElement.value = e.target.value.replace(/[^1-9]/g, "");
    }

    // 중복된 숫자를 입력한 경우
    if (
      currentInputValueArray.filter(
        (v, i) => currentInputValueArray.indexOf(v) !== i
      ).length > 0
    ) {
      alert(
        "중복된 숫자는 입력하실 수 없습니다. 1~9까지의 수를 중복없이 3개 입력 바랍니다!"
      );
      inputElement.value = e.target.value.slice(0, -1);
      console.log(inputElement.value);
    }

    // 세 글자를 초과해 입력한 경우
    if (e.target.value.length > 3) {
      alert(
        "세 글자를 초과해 입력하실 수 없습니다. 1~9까지의 수를 중복없이 3개 입력 바랍니다!"
      );
      inputElement.value = e.target.value.slice(0, 3);
    }

    this.setState({
      currentInput: inputElement.value,
    });
  });

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
