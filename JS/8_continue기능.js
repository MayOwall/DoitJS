const section8 = document.getElementById("continue기능");
const section8Form = section8.querySelector("form");

function section8Calculator(event) {
  event.preventDefault();
  
  const inputText = section8Form.querySelector("input:first-child");
  const answer = section8.querySelector(".answer");
  
  answer.innerHTML = "";
  if (isNaN(Number(inputText.value))) {
    answer.innerText = "숫자만 입력해 주셔유~";
  } else {
    let i;
    let sum = 0;
    for (i = 1; i <= Number(inputText.value); i++) {
      if(i % 2 === 1) continue
      sum += i;
      const formula = document.createElement("div");
      formula.innerText = `${i} ---- ${sum}`;
      answer.appendChild(formula);
    };
  };
};
section8Form.addEventListener("submit", section8Calculator);