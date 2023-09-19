let a = 0;
while(a<2){
    console.log('Привет');
    a++;}

let b = 0;
do {
    console.log(b);
    b++;
} while (b<6);

let c = 7;
do {
    console.log(c);
    c++;
 } while (c<23);

 const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
 };
 for (let name in obj){
    console.log(`${name} - зарплата ${obj[name]} долларов`);
 }

  let n = 1000;
  let num = 0;
  do {
    n/=2;
    num++;
  } while (n>=50);
  console.log(n)
  console.log(num)

let fri=4;
do {
    console.log(`Сегодня пятница, ${fri} число. Необходимо подготовить отчет`);
    fri+=7;
} while (fri<=31);
  
  