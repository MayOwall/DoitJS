const forSection = document.querySelector("#for문");
const forForm = forSection.querySelector("form");

function calculator(event) {
  event.preventDefault();

  const userTyped = forForm.querySelector("input:first-child");
  const answer = forSection.querySelector(".answer");
  let i;
  let sum = 0;

  for (i = 0; i <= Number(userTyped.value); i++) {
    sum += i;
  };

  answer.innerText = `1부터 ${userTyped.value}까지 더한 값은 " ${sum} "입니다.`;
  userTyped.value = "";
};

forForm.addEventListener("submit", calculator);