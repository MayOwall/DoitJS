const forSection = document.querySelector("#for문");
const forForm = forSection.querySelector("form");


function forWritter(event) {
  event.preventDefault();
  const inputText = forForm.querySelector("input:first-child");
  const answer = forSection.querySelector(".answer");

  if (isNaN(Number(inputText.value))) {
    answer.innerText = "숫자만 입력해 주셔유~";
  } else {
    let i;
    let sum = 0;
    for (i = 0; i <= Number(inputText.value); i++) {
      sum += i;
    };
    answer.innerText = `1부터 ${inputText.value}까지 더한 값은 " ${sum} "입니다.`;
    inputText.value = "";
};
};

forForm.addEventListener("submit", forWritter);