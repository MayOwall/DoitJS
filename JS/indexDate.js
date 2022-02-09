document.write(`<br><div style="font-weight:900">==(Date methods)===========</div><br>`);

document.write(`자바스크립트의 날짜, 시간 입력 방식 :<br>`);
document.write(`(1) "YYYY-MM-DD"<br>`);
document.write(`(2) "YYYY-MM-DDTHH:MM:SS(Z)"<br>`);
document.write(`(3) "DD/MM/YYYY"<br>`);
document.write(`(4) "Mon Jan DD YYYY HH:MM:SS"<br><br><br>`);

document.write(`<b>날짜 계산하는 프로그램 만들기</b><br>`);
const today = new Date();
const startDate = new Date("2022-02-04");
document.write(`<div style="color:gray;font-size:0.5rem">잔디 심기를 시작한 날짜 : 2022-02-04</div>`);

console.log(today.getTime());
console.log(startDate.getTime());

const days = Math.ceil((today.getTime() - startDate.getTime()) / 86400000);
console.log(days);
document.write(`👉 와우! 당신은 <b>${days}일</b> 연속으로 잔디 심기에 성공했군요! <span style="color:gray;font-size:0.5rem;text-decoration:line-through">(아마도...)</span><br> 한달 잔디심기를 목표로, 앞으로도 화이팅!!<br><br><br>`);
