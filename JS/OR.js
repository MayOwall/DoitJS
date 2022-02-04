const ORsection = document.querySelector("#OR");
const ORform = ORsection.querySelector("form");

function calculator(event) {
  event.preventDefault();

  const num1 = ORform.querySelector("input:first-child");
  const num2 = ORform.querySelector("input:nth-child(2)");
  const answer = ORsection.querySelector(".answer");
  

  if(Number(num1.value) >= 50 && Number(num2.value) >= 50) {
    answer.innerText = `👉 '${num1.value}', '${num2.value}' 두 숫자 모두 50 이상입니다. 👈`;
  } else {
    answer.innerText = `👉 '${num1.value}', '${num2.value}' 두 숫자 중 하나는 50이하 입니다. 👈`;
  };

  answer.classList.remove("hidden");
}

ORform.addEventListener("submit", calculator);