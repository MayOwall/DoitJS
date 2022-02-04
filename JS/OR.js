const ORsection = document.querySelector("#OR");
const form = ORsection.querySelector("form");

function calculator(event) {
  event.preventDefault();

  const num1 = form.querySelector("input:first-child");
  const num2 = form.querySelector("input:nth-child(2)");
  const answer = ORsection.querySelector(".answer");

  if(Number(num1.value) < 50 || Number(num2.value) < 50) {
    answer.innerText = "적어도 둘 중 한 숫자는 50 미만입니다.";
  } else {
    answer.innerText = "두 숫자 모두 50 미만이 아닙니다.";
  }

  answer.classList.remove("hidden");
}

form.addEventListener("submit", calculator);