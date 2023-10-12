
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
words(first, last);

