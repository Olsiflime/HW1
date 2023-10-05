// Домашка 5
function min (a, b){
    if (a >= b) {
      console.log (`Минимальное число ${b}`);
    } else {
      console.log (`Минимальное число ${a}`);
    }
}
min ( 5 , 8);
min (8 , 3);
min (6 , 6);
min (33 , 21);

function evenOdd (){
  let num = prompt('Напиши число');

  if (num % 2 == 0) {
    console.log('Четное')
  } else {
    console.log('Нечетное')
  }
}
evenOdd()

function calc (sq){
  let square = sq ** 2;
  let noSquare = Math.sqrt(sq);
  console.log(`Корень из числа равен ${square}, а возврат квадрата из числа будет ${noSquare}`)
}
calc (9);
calc (1);
calc (100);
calc (144);

function age(){
    let age = prompt('Напиши свой возраст');
   if (age > 12) {
     alert ('Добро пожаловать!');
    } else {
        if(age > 0 && age < 13){
         alert('Привет, друг!')
    } else {
    alert('Вы ввели неправильное значение');
   }
 }
}
age();

const lots = (a , b) => {
  if (isNaN(a) || isNaN(b)){
      return 'Одно или оба значения не являются числом';
  } else {
      return a * b;
  }
}
alert(lots("4", "5"))


let n = Number(prompt('Введите число')); 
 
function numberUser() { 
    if (!isNaN(n)) { 
   return n ** 3; 
    } else { 
   console.log('Переданный параметр не является числом'); 
      } 
 } 
 console.log (numberUser("n"));

 function area() {
  return this.radius ** 2 * 3.14;
}
function perimiter() {
 return this.radius * 2 * 3.14; 
}
const circle1={
  radius:5,

  getArea: area,
  getPerimiter: perimiter,
}
const circle2={ 
  radius:7,

  getArea: area,
  getPerimiter: perimiter,
}
  console.log(circle1.getArea());
  console.log(circle1.getPerimiter());
  console.log(circle2.getArea());
  console.log(circle2.getPerimiter());


//Игра
function seasons (){
  let monthNumber = Number(prompt('Введите число месяца'));

if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
  alert ('Зима');
 } else { 
  if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
    alert ('Весна');
  } else {
    if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
      alert ('Лето');
    } else {
      if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        alert ('Осень');
      } else {
        alert ('Такого месяца не существует');
      }
    }
  }
 }
}

//Домашка 6
//Задание 1
const klik = [1, 5, 4, 10, 0, 3];

for (let mix = 0 ; mix < klik.length;
      mix++){
        console.log (klik[mix])
        if (klik[mix] == 10) break;
      }
//Задание 2
let index = klik.indexOf(4);
console.log(index)
//Задание 3
const shift = [1, 3, 5, 10, 20];
shiftleng = shift.join(' ');
console.log(shiftleng);

//Задание 4
let mono = [];
for (let i = 0; i < 3; i++){
  mono [i] = [];
  for (let j = 0; j < 3; j++){
    mono[i].push(1);
  }
}
console.log(mono)


//Задание 5
const one = [1, 1, 1];
one.push(2, 2, 2)
console.log(one)
//Задание 6
let garbage = [9, 8, 7, 'a', 6, 5];
garbage = garbage.sort();
console.log(garbage.pop());
console.log(garbage)
//Задание 7
let m = Number(prompt('Угадай число'));
let search = garbage.includes(m);
if (search == true) {
  alert('Угадал')
} else {
  alert('Не угадал')
}
//Задание 8
let letters = 'abcdef';
letters = letters.split('').reverse().join('');
console.log(letters);

//Задание 9
const str = [
  [1, 2, 3,],
  [4, 5, 6]
];
const result = [].concat(...str);
console.log(result);

//Задание 10
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length - 1; i++) {
    const sum = array[i] + array[i + 1];
    console.log("Сумма", array[i], "и", array[i + 1], "равна", sum);
}
//Задание 11
const massive = [4, 5, 6, 7];
const number = (massive) => {
    return massive.map(a => a ** 2)
}
console.log(number(massive))

// Задание 12
const string = ['я', 'устала', 'очень сложно', 'хватит'];
function getWordLengths(string) {
    return string.map(p => p.length);
}
const lengths = getWordLengths(string);
console.log(lengths);

//Задание 13

function filterPositive(array) {
  return array.filter(number => number < 0)

}
filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);