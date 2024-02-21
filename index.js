// ЗАДАЧА 3 . С помощью объекта Date, выведи какой сегодня день недели .

// const daysOfWeek = [
//   "Воскресенье",
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
// ];
// const currentDate = new Date();
// const currentDayOfWeek = currentDate.getDay();
// const dayOfWeekString = daysOfWeek[currentDayOfWeek];
// console.log("Сегодня " + dayOfWeekString);

// ЗАДАЧА 1 . Создай три промта, два числа и  арифметический оператор (+,-,/,*),и выполни вычисление. Отработать ошибку.

// const number1 = prompt("Введите первое число");
// const number2 = prompt("Введите второе число");
// const operator = prompt("Введите арифметический оператор (+, -, /, *):");
// const num1 = parseFloat(number1);
// const num2 = parseFloat(number2);
// if (isNaN(num1) || isNaN(num2)) {
//   console.log("Ошибка: Одно или оба введенных значения не являются числами.");
// } else {
//   let result;
//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "/":
//       if (num2 !== 0) {
//         result = num1 / num2;
//       } else {
//         console.log("Ошибка: Деление на ноль.");
//       }
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     default:
//       console.log("Ошибка: Введен неправильный арифметический оператор.");
//   }
//   console.log("Результат " + result);
// }

// ЗАДАЧА 2 Добавь промта возможность ввести название фруктов, вебери 5 фруктов .

const fruit = prompt("Введите название фрукта");
const fruits = ["яблоко", "груша", "слива", "апельсин", "ананас"];
if (fruits.includes(fruit)) {
  alert("в списке есть такой фрукт");
} else {
  alert("В спииске нет фрукт с таким названием");
}
