// вивести всі парні числа
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Твоє рішення тут:
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers); // [2, 4, 6, 8, 10]


// помножити всі числа на 2
// const numbers = [1, 2, 3, 4, 5];

// // Твоє рішення тут:
// const doubled = numbers.map(number => number * 2)
// console.log(doubled); // [2, 4, 6, 8, 10]




// const numbers = [1, 2, 3, 4, 5];

// // Твоє рішення тут:
// const sum = numbers.reduce((a, b) => a + b );
// console.log(sum); // 15





// const numbers = [1, 2, 3, -4, 5];

// // Твоє рішення тут:
// const allPositive = numbers.every((number => number > 0));
// console.log(allPositive); // false




// const numbers = [1, 2, 3, -4, 5];

// // Завдання: Перевірити чи є хоча б одне від'ємне число
// const hasNegative = numbers.some((number => number < 0));
// console.log(hasNegative); // true

// const numbers = [1, 2, 3, 4, 5];

// // Завдання: Знайти перше число більше за 3
// const found = numbers.find(number => number > 3);
// console.log(found); // 4




// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 17 },
//   { name: 'Charlie', age: 30 }
// ];

// // Завдання: Знайти першого неповнолітнього користувача
// const minorUser = users.find((user => user.age  < 18));
// console.log(minorUser); // { name: 'Bob', age: 17 }

// // Завдання: Отримати масив лише повнолітніх користувачів
// const adults = users.filter(user => user.age > 18);
// console.log(adults); // [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }]

// // Завдання: Отримати масив імен всіх користувачів
// const names = users.map((user => user.name));
// console.log(names); // ['Alice', 'Bob', 'Charlie']










// const products = [
//   { name: 'Телефон', price: 1000, category: 'електроніка' },
//   { name: 'Книга', price: 20, category: 'література' },
//   { name: 'Футболка', price: 30, category: 'одяг' },
//   { name: 'Навушники', price: 150, category: 'електроніка' },
//   { name: 'Штани', price: 50, category: 'одяг' }
// ];

// // Завдання 1: Знайти всі електронні товари
// const electronics = products.filter(category => category.category === "електроніка");
// console.log(electronics); 
// // [{ name: 'Телефон', ... }, { name: 'Навушники', ... }]

// // Завдання 2: Отримати масив цін всіх товарів
// const prices = products.reduce((total, product) => total + product.price ,0);
// console.log(prices); // [1000, 20, 30, 150, 50]

// // Завдання 3: Чи є товари дешевші за 25?
// const hasCheap = products.some((number => number.price < 25))
// console.log(hasCheap); // true

// // // Завдання 4: Знайти найдешевший товар
// // const cheapest = products.???;
// // console.log(cheapest); // { name: 'Книга', price: 20, ... }










const students = [
  { name: 'Анна', subjects: ['математика', 'фізика'], grade: 85 },
  { name: 'Петро', subjects: ['математика', 'історія'], grade: 92 },
  { name: 'Марія', subjects: ['фізика', 'хімія'], grade: 78 },
  { name: 'Іван', subjects: ['математика', 'фізика', 'хімія'], grade: 88 }
];

// Завдання 1: Знайти всіх студентів, у яких оцінка вище 80
const topStudents = students.filter(student => student.grade > 80 ).map(student => student.name);
console.log(topStudents);

// Завдання 2: Отримати масив усіх унікальних предметів (без повторень)
const allSubjects = students.map(student => student.subjects).flat();
const uniqueSubjects = [...new Set(allSubjects)]; //Set виводить текст без повторок
console.log(uniqueSubjects);

//Завдання 3: Знайти студента, який вивчає найбільшу кількість предметів
const busiestStudent = students.reduce((busiest, current) => {
  return  current.subjects.length > busiest.subjects.length ?  current : busiest
},students[0]);
console.log(busiestStudent);

// Завдання 4: Перевірити, чи всі студенти вивчають математику
// const allStudyMath = students.???;