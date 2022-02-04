const numAskerForm = document.querySelector("#number-asker form");

function calculator(event) {
  event.preventDefault();
  
  const num = document.querySelector("#number-asker input:first-child");
  const answer = document.querySelector("#number-asker .answer");

  if(num.value % 3 === 0) {
    answer.innerText = `👉 '${num.value}'은(는) 3의 배수가 맞습니다. 👈`;
  } else {
    answer.innerText = `👉 '${num.value}'은(는) 3의 배수가 아닙니다. 👈`;
  };
  
  num.value = "";
  answer.classList.remove("hidden");

};
numAskerForm.addEventListener("submit", calculator);