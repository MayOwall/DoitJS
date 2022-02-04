const session = document.querySelector("#switch");
const form = session.querySelector("form");

function calculator(event) {
  event.preventDefault();

  const userPick = form.querySelector("input:first-child");
  const answer = session.querySelector(".answer");

  switch(userPick.value) {
    case "꼬부기": 
    answer.innerText = `💧 당신이 선택한 포켓몬은 '꼬부기'입니다. 💧`,
    userPick.value = "";
    break;
    case "파이리": 
    answer.innerText = `🔥 당신이 선택한 포켓몬은 '파이리'입니다. 🔥`,
    userPick.value = "";
    break;
    case "이상해씨": 
    answer.innerText = `🌿 당신이 선택한 포켓몬은 '이상해씨'입니다. 🌿`,
    userPick.value = "";
    break;
    default: 
    answer.innerText = `세 포켓몬 중 어느 이름도 입력하지 않으셨네요. 오타가 있진 않은지 확인해주세요!`;
  };
};

form.addEventListener("submit", calculator);