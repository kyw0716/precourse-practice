export default function UserInput({ setUserInputNumber }) {
  const inputElement = document.getElementById("user-input");
  const formElement = inputElement.parentNode;

  this.reset = () => {
    inputElement.value = ``;
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
    }

    // 세 글자를 초과해 입력한 경우
    if (e.target.value.length > 3) {
      alert(
        "세 글자를 초과해 입력하실 수 없습니다. 1~9까지의 수를 중복없이 3개 입력 바랍니다!"
      );
      inputElement.value = e.target.value.slice(0, 3);
    }
  });

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inputElement.value.length < 3) {
      alert(
        "입력 값은 세 글자여야 합니다. 1~9까지의 수를 중복없이 3개 입력 바랍니다!"
      );
    } else {
      setUserInputNumber(Number(inputElement.value));
    }
  });
}
