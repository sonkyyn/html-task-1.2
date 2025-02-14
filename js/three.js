// условные конструкции

// if (логическое_выражение) {
// //блок когда истина
// }  else {
//     //блок кода если ложь
// }
let logic = true
if (logic) {
    console.log("тут истина");
}

let age = 16;
let passExam = 4;

if(age>=18 || passExam<4) {
    console.log ("Я не еду в лагерь...")
} else if (age>= 18){
    console.log ("Я не поеду в лагерь. Без шансов...")
} else{
    console.log("Собираем вещи и едем а лагерь")
}

// условный цикл
// while (условие) {
//     тело цикла выполняется пока "условие"= ИСТИНА
// }

// while (true) {
//     console.log (1)
// }

//матч по волейболу
let team1 = 1;
let team2 = 0;

// todo учесть баланс
 while(
  (team1 < 25 && team2 < 25) 
  ||
  (team1>= 24 && team2 >= 24 && Math.abs (team1-team2)<2)
 ){
    // розыгрыш мяча
    if(Math.random () <0.5) {
        team1++;
    } else {
        team2++; 
    }
}
console.log(`Команда 1 набрала ${team1} очков`);
console.log(`Команда 2 набрала ${team2} очков`);

if (team1 > team2) {
    console.log(`Победила команда 1`)
} else {
console.log(`Победила команда 2`)}


