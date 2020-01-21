"use strict";

// const credits = 23500;
// const pricePerDroid = 3000;
// let userChoice = prompt('Сколько дроидов нужно?');
// userChoice = Number(userChoice);
// const totalPrice = pricePerDroid * userChoice;
// const balance = credits - totalPrice;
// if (userChoice === null) {
//   console.log("Отменено пользователем");
// } else if (totalPrice > credits) {
//   console.log("Недостаточно средств на счету");
// } else {
//   console.log(
//     `Вы купили ${userChoice} дроидов, на счету осталось ${balance} кредитов`
//   );
// }

const credits = 23580;
const pricePerDroid = 3000;
const numbersDroids = prompt("сколько дронов вы хотите купить?");
const totalPrice = Number(numbersDroids) * pricePerDroid;
const balanceCredits = credits - totalPrice;
if (numbersDroids === null) {
  console.log("отменено пользователем");
}
else if (totalPrice > credits) {
  console.log ("недостаточно средств на счету");
}
else {
  console.log (`Вы купили ${numbersDroids} дронов, на счету осталось ${balanceCredits} кредитов`);
}
