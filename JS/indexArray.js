const time = new Date();
document.write(`현재 시간은 ${time.toLocaleString()}입니다. <br><br>`);

const numbers = new Array(3);
let week = ["mon", "tue", "weds", "thur", "fri", "sat", "sun"];


for(let i = 0; i <week.length; i++) {
  document.write(`<span> ${week[i]} </span>`);
};

document.write(`<br><br><br><div style="font-weight:900">==(Array methods)===========</div><br>`)
const numsArabian = ["1", "2", "3"];
const numsAmerican = ["one", "two", "three"];
document.write(`numArabian = ["1", "2", "3"];<br>`);
document.write(`numAmerican = ["one", "two", "three"];<br>`);
document.write(`week = ["mon", "tue", "weds", "thur", "fri", "sat", "sun"];<br><br>`);

const numAraAme = numsArabian.concat(numsAmerican);
const numAmeAra = numsAmerican.concat(numsArabian);
document.write(`<b>concat()</b> : numsArabian에 numsAmerican을 concat하면 [${numAraAme}] <br>`);
document.write(`<b>concat()</b> : numsAmerican에 numsArabian을 concat하면 [${numAmeAra}] <br><br>`);

numsArabian.push("4", "5");
document.write(`<b>push()</b> : numsArabian에 4, 5를 push하면 [${numsArabian}] <br>`);
numsArabian.unshift("-1", "0");
document.write(`<b>unshift()</b> : numsArabian에 -1, 0을 unshift하면 [${numsArabian}] <br><br>`);

numsArabian.pop("5");
document.write(`<b>pop()</b> : numsArabian에 5를 pop하면 [${numsArabian}] <br>`);
numsArabian.shift("-1");
document.write(`<b>shift()</b> : numsArabian에 -1을 shift하면 [${numsArabian}] <br>`);
document.write(`<div style="color:gray;font-size:0.5rem">※ 한번에 하나의 요소만 삭제 가능!</div><br>`);

document.write(`<b>splice() :</b>`);
document.write(`<div style="color:gray;font-size:0.5rem">※ 인수가 1개일 때</div>`);
const newWeek = week.splice(5);
document.write(`<b>splice(5)</b> : week를 splice(5)하면 [${newWeek}] 반환.<br>`);
document.write(`<b>splice실행 후의 week</b> :  [${week}].`);

document.write(`<div style="color:gray;font-size:0.5rem">※ 인수가 2개일 때</div>`);
const newWeek2 = week.splice(2, 2);
document.write(`<b>splice(2, 2)</b> : week를 splice(2, 2)하면 [${newWeek2}] 반환.<br>`);
document.write(`<b>splice실행 후의 week</b> :  [${week}].`);

document.write(`<div style="color:gray;font-size:0.5rem">※ 인수가 3개 이상일 때</div>`);
const newWeekHolymoly = week.splice(1, 2, "sat🔥", "sat🔥", "sat🔥", "sat🔥", "sat🔥", "sat🔥", "sun");
document.write(`<b>splice(1, 2, "sat🔥", ..., "sat🔥", "sun")</b> : week를 splice(2, 2)하면 [${newWeekHolymoly}] 반환.<br>`);
document.write(`<b>splice실행 후의 week</b> :  [${week}].<br><br>`);


week = ["mon", "tue", "weds", "thur", "fri", "sat", "sun"];
document.write(`<b>slice() :</b>`);
document.write(`<div style="color:gray;font-size:0.5rem">※ 인수가 1개일 때</div>`);
const slice1 = week.slice(4);
document.write(`<b>slice(4)</b> : week에 slice(4)를 하면 [${slice1}];<br>`);
document.write(`<div style="color:gray;font-size:0.5rem">※ 인수가 2개일 때</div>`);
const slice2 = week.slice(1, 5);
document.write(`<b>slice(1, 5)</b> : week에 slice(1, 5)를 하면 [${slice2}];<br>`);
document.write(`<div style="color:gray;font-size:0.5rem">※ 인수가 3개 이상일 때</div>`);


