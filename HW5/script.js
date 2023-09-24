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
