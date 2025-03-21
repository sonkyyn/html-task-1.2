let events=[
    {title:'день космонавтики', year:1961, month:4 ,day: 12},
     {title:'др клуба', year:1961, month:10,day: 15},
     {title:'день числа пи', year:2025, month:3 ,day: 13},
];

//удаление  и добавление элементов массива
//events.shift();
//events.pop();

events.push({
    titel:'Основание Санкт-Петербурга',
year: 1703,
month: 5,
day: 27,
});

events.forEach(function (elem, i, array) {
    console.log(`${i + 1}) ${elem.title}`);
});

events.forEach((elem, i) => console.log(`${i + 1}) ${elem.titel}`));

let earlier20Centuary = (elem) => elem.year < 1900;
let continDay = (elem) => elem.titel.includes ('день')

events.find(earlier20Centuary);
console.log(newElem);

let newArray = events.filter(earliter20Ctntury);
console.log(newArray)