'use strict';

const credits = 23500;
const pricePerDroid = 3000;
let userChoice = prompt('Сколько дроидов нужно?');
userChoice = Number(userChoice);
const totalPrice = pricePerDroid * userChoice;
const balance = credits - totalPrice;
if (userChoice === null) {
  console.log("Отменено пользователем");
} else if (totalPrice > credits) {
  console.log("Недостаточно средств на счету");
} else {
  console.log(
    `Вы купили ${userChoice} дроидов, на счету осталось ${balance} кредитов`
  );
}
