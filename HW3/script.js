let pw = 'пароль';
alert(pw)
let password = prompt('Введите пароль');
alert(password);
if (password==33) {
    alert ('Пароль введен верно');
} else  {
    alert('Пароль введен неправильно');
}

let c = 3;
c=0;
c=10;
c=-3;
c=2;
if (c>0&&c<10) {
    console.log('верно')
} else {
    console.log('неверно')
}

let d =500;
let e =10;
if (d>100||e>100) {
    console.log('верно')
} else {
    console.log('неверно')
}

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let monthNumber = Number(prompt('Число месяца'));
switch(monthNumber){
    case 1 :
        alert('Зима');
        break;
    case 2 :
        alert('Зима');
        break;
    case 3 :
       alert('Весна');
        break;
    case 4 :
        alert('Весна');
        break;
    case 5 :
        alert('Весна');
        break;
    case 6 :
        alert('Лето');
        break;
    case 7 :
        alert('Лето');
        break;
    case 8 :
        alert('Лето');
        break;
    case 9 :
        alert('Осень');
        break;
    case 10 :
        alert('Осень');
        break;
    case 11 :
        alert('Осень');
        break;
    case 12 :
        alert('Зима');
        break;
    default:
        alert('Такого месяца не существует')
        break;
}

