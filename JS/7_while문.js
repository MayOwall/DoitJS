const section7 = document.getElementById("while문");
const section7Form = section7.querySelector("form");

function section7Calculator(event) {
  event.preventDefault();

  const value = section7Form.querySelector("input:first-child");
  const answer = section7.querySelector(".answer");

  console.log(Number(value.value));

  if(isNaN(Number(value.value))) {
    answer.innerText = "숫자만 입력 해 주셔유~";
  } else {
    let calculateResult = 1;
    let i = 1;
    while(i <= Number(value.value)) {
      calculateResult *= i;
      i++;
    };
    answer.innerText = `👉 ${value.value}! = ${calculateResult} 💥`;
  };


};

section7Form.addEventListener("submit", section7Calculator);