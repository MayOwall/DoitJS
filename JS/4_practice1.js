const practice1 = document.querySelector("#practice1");
const practice1Form = practice1.querySelector("form");

function calculator(event) {
  event.preventDefault();


  const visitorNum = practice1Form.querySelector("input:first-child");
  const columnNum = practice1Form.querySelector("input:nth-child(2)");
  const answer = practice1.querySelector(".answer");

  answer.innerHTML = "";
  let j;
  let i;
  let sum = 0;

  for (j = 1; j <= Number(columnNum.value); j++) {
    const positionColumn = document.createElement("div");
    positionColumn.setAttribute("class", "column-box");

    for (i = 1; i <= Number(columnNum.value); i++) {
      sum++;
      if (sum > Number(visitorNum.value)) break;
      const positionTag = document.createElement("span");
      positionTag.innerText = `자리 ${sum}`;
      positionColumn.appendChild(positionTag);
    };
    answer.appendChild(positionColumn);
  };
};

practice1Form.addEventListener("submit", calculator);