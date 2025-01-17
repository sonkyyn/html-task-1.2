console. log('это моя первая строка на JS!'); //<=выводим в консоль текст
//Это коментарий, но node.JS его не видит
//существует 7 (8) основных\базовых типов данных
//1. число (number)
//2. строка (string)
//3. булевый\логический (Boolean)
//4. большое число (BegInt)
//5."пустота" (null)
//6. "неопределенно" (underfined)
//7. объект (object)
//8. символ (symbol)

//ПЕРЕМЕННАЯ
let value;
let переменная_на_русском;
let _val;
let $val$;
let value1;
// let 2value; -тут будет ошибка

//устаревший способ
var val_var;
//

const pi=3.14; // эта переменная не может быть изменена
//pi=4; -это приведет к ошибке
//tipeof- возращает тип переменной
console. log(typeof 1);
console. log(typeof (typeof 1));

//булевый\логигечкий
let success = true;
let question = false;
console. log(success, typeof success);
console. log(question, typeof question);
// число
let easy = 4;
let persent = 0.99;
let not_a_number = NaN;
let space = Infinity;
console. log(easy, typeof easy);
console. log(persent, typeof persent);
console. log(not_a_number, typeof not_a_number);
console. log(space, typeof space);

// строки
let nameOfMuseum = "Эрмитаж";
let nameOfTheater = `Мариинский театр`;
let nameOfConcert = 'Руки Вверх. Уже не молодой';

console. log(nameOfMuseum, typeof nameOfMuseum);
console. log(nameOfTheater, typeof nameOfTheater);
console. log(nameOfConcert, typeof nameOfConcert);

let e = 2.7;
let descriptionOf_e = `Число Эйлера равно ${e}`;
console. log(descriptionOf_e)

//"пустота" и "неопределенно"
let any;

console. log(any, typeof any);

let some = null;
console. log(some, typeof some);