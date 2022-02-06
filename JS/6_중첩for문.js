const doubleFor = document.querySelector("#중첩for문 form");
const doubleForUserAnswer = doubleFor.querySelector("input:first-child");
const answer = document.querySelector("#중첩for문 .answer");

function calculator() {
  let i,j;

  for (i = 1; i <= parseInt(doubleForUserAnswer.value); i++) {
    const formulaBlock = document.createElement("div");
    formulaBlock.setAttribute("id", "formula-block");
    const title = document.createElement("div");
    title.innerText = `${i}단`;
    formulaBlock.appendChild(title);
    for (j = 1; j <=9; j++) {
      const formula = document.createElement("div");
      formula.innerText = `${i} x ${j} = ${i*j}`;
      formulaBlock.appendChild(formula);
    };
    answer.appendChild(formulaBlock);
  };
};

function formulaWritter(event) {
  event.preventDefault();

  answer.innerHTML = "";
  calculator();
};


doubleFor.addEventListener("submit", formulaWritter);