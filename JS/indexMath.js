document.write(`<br><div style="font-weight:900">==(Math methods)===========</div><br>`);

document.write(`<b>당첨자를 랜덤추첨하는 프로그램 만들기</b><br>`);

function randomNum(event) {
  const winner = Math.floor((Math.random() * 50) + 1);
  document.write(`당첨 번호는 "${winner}"`);
};