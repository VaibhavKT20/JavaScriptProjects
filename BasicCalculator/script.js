const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");
const removeLastEl = document.querySelector(".removeLast");
for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "X") {
      removeLast();
    } else {
      appendValue(buttonValue);
    }
  });
}
function clearResult() {
  inputFieldEl.value = "";
}
function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}
function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}

function removeLast() {
  inputFieldEl.value = inputFieldEl.value.slice(0, -1);
}
