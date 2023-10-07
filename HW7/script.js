
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
//Игра 2

function words (a, b){
let opcion = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
opcion = opcion.sort(() => Math.random() - 0.5)
alert (opcion)

let first = prompt ('Какая вкусняшка была первой?');
let last = prompt ('Какая вкусняшка была последней?');

let masFirst = (opcion[0].toLowerCase());
let masLast = (opcion[6].toLowerCase())

if (masFirst === first.toLowerCase() && masLast === last.toLowerCase()) {
  alert('Отлично')
} else {
    if (masFirst === first.toLowerCase() || masLast === last.toLowerCase()) {
      alert('Почти')
    } else {
      alert('Попробуй еще раз')
      
    }
  }
}
words(first, last)

//Домашка 7

//Задание 1
let names = 'Валера';
names = names.toUpperCase(names);
console.log (names)

//Задание 2
const searchStart = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const ko = 'ко';

searchStart.forEach((searchStart) => {
  if (searchStart.toLowerCase().startsWith(ko.toLowerCase())){
    console.log(searchStart)
  }
})

//Задание 3
let a = [32.58884];

console.log(Math.floor(a) ) //меньшее целое
console.log(Math.ceil(a) ) //большее целое
console.log(Math.round(a) ) //ближайшее целое


//Задание 4
const numb = [52, 53, 49, 77, 21, 32];
 let max = Math.max(...numb)
 let min = Math.min(...numb)

 console.log(max)
 console.log(min)

//Задание 5
function ranOm (nRan, xRan){
  return Math.random( )* 10;
}
console.log(Math.round(ranOm()));

//Задание 6
let sixNum = prompt ('Напиши число');
function bred (p){
  const six = [];
  

  for (let i = 0; i < p / 2; i++){
    let pol = Math.round(Math.random() * p);
    six.push(pol);
}
return six;
}

console.log (bred(sixNum));

//Задание 7
function seven (r, t){
  return Math.floor(Math.random() * (t-r)) + r;
}
let rez = seven(2, 5);
console.log(rez)

//Задание 8
let myDate = new Date();
console.log(myDate);

//Задание 9

let currentDate = new Date();
currentDate.setDate (currentDate.getDate() + 73);

console.log(currentDate)


//Задание 10

let dateNew = new Date();
let monthRU = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
let dayRU = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье',];

function rezult (dateNew){
  let date = dateNew.getDate();
 let month = dateNew.getMonth();
 let year = dateNew.getFullYear();
 let day = dateNew.getDay();
 let time = dateNew.toTimeString();
 console.log(`Сегодня ${date} ${monthRU[month]} ${year} года, ${dayRU[day-1]} ${time}`)

}
rezult(dateNew)


