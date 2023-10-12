//Домашка 2.8
//Задание 1
let people1 = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

people.sort (function (a, b) {
  if (a.age > b.age) {
      return 1;
    } 
    if (a.age < b.age) {
      return -1;
    } 
    return 0;
});
console.log(people1);

//Задание 2
function isPositive(num) {
  return num > 0;
  }
 
  function filter(array, callback) {
   const outPut = [];
   array.map (element => {
    if (callback(element)){
      outPut.push (element)
    }
   });
   return outPut;
  }
  
  console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]


   function isMale(human) {
   return human.gender === 'male'
  }
  const people = [
     {name: 'Глеб', gender: 'male'},
     {name: 'Анна', gender: 'female'},
     {name: 'Олег', gender: 'male'},
     {name: 'Оксана', gender: 'female'}
  ];
  
  console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

//Задание 3  // 1 сек 1000 мс спустя время
let intervalID  

setTimeout(() => {
clearInterval(intervalID)
console.log('30 секунд прошло')
}, 30000);

intervalID = setInterval(() => {
  console.log(new Date());
}, 3000);

//Задание 4
function delayForSecond(callback) {
   setTimeout(() => {
   callback();
   }, 1000)
  
}
delayForSecond(function () {
  console.log('Привет, Глеб!');
})

//Задание 5

function delayForSecond(cb) {
  setTimeout(() => {


      console.log('Прошла одна секунда');
      if(cb) { 	cb(); }

  }, 1000)
}
function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

sayHi('Глеб');
delayForSecond();
