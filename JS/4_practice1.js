const practice1 = document.querySelector("#practice1");
const practice1Form = practice1.querySelector("form");

function calculator(event) {
  event.preventDefault();

  const visitorNum = practice1Form.querySelector("input:first-child");
  const columnNum = practice1Form.querySelector("input:nth-child(2)");
  const rowNum = Math.floor(Number(visitorNum.value) / Number(columnNum.value)) + 1;
  const answer = practice1.querySelector(".answer");

  answer.innerText = `관람객 ${visitorNum.value}명을 한 줄당 ${columnNum.value}명씩 앉히긴 위해선, 총 ${rowNum}줄이 필요합니다.`;
  
  visitorNum.value = "";
  columnNum.value = "";
  
};

practice1Form.addEventListener("submit", calculator);