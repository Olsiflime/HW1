const fibonacci = [1, 1, 2, 3, 5, 8];

const multipleByTwoFib = fibonacci.map(item => (item *2))
// Используйте метод map, чтобы получить массив fibonacci, в котором к каждому числу добавили 10
const plusTenFib = fibonacci.map (item=> (item + 10))
// Используйте метод filter, чтобы получить массив, в который входят числа Фибоначчи больше 3
const onlyBigFib = fibonacci.filter (item=> (item > 3))

console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
console.log(onlyBigFib); // => [5, 8]