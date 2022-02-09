const form = document.querySelector("form");
const button = form.querySelector("input[type=submit]");
console.log(button);

function calculator(event) {
  event.preventDefault();

  const num1 = form.querySelector("input:first-child").value;
  const num2 = form.querySelector("input:nth-child(2)").value;
  const result = document.querySelector("#result");


  if(isNaN(Number(num1)) || isNaN(Number(num2))) {
    result.innerHTML = `숫자만 바르게 적어주세요.`;
  } else {
    if (Number(num1) < Number(num2)) {
      result.innerHTML = `${num1}은 ${num2}보다 크기가 작습니다.`
    } else if(Number(num1) === Number(num2)) {
      result.innerHTML = `${num1}은 ${num2}와 크기가 같습니다.`
    } else {
      result.innerHTML = `${num1}은 ${num2}보다 크기가 큽니다.`
    };
  };

};

form.addEventListener("submit", calculator);