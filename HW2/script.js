let a = 10;
a = 20;
alert(a);

let b = 2007;
alert(b);
let js = "Брендан Эйх";
alert(js);
let c = 10;
let d = 2;
let summ = c + d;
let diff = c - d;
let mul = c * d;
let div = c / d;
alert(summ);
alert(diff);
alert(mul);
alert(div);
let e = 2;
let result = e ** 5;
alert(result);
let f = 9;
let g = 2;
alert(f % g);

let num = 1;
num +=5;
num -=3;
num *=7;
num /=3;
num +=1;
num -=1;
alert(num);

let age = Number(prompt('Сколько вам лет?'));
alert(age);

const user = {  name:`lexy`, age: 25, isAdmin: true};
alert(user.name);
alert(user.age);
alert(user.isAdmin); 

user[`sity of residence`]=true;
alert([`sity of residence`]);

user.age=30;
alert(user.age);

delete user[`sity of residence`];

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

let nam = String(prompt('Твое имя?'));
alert (`Привет, ${nam}!`);



