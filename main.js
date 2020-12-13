let user = 'John Doe';
console.log(user);
let student = 'Jenia';
console.log(student);
user = student;  // в user находится "Jenia"
console.log(user);

let test = 1;
test++;
test = test + `1`; // в переменной находится 21 строчное
console.log(test);
test--; // число 20
console.log(test);
test = Boolean(test); // true так как 20>0
console.log(test);

//произведение
let array1 = [2, 3, 5, 8];
let allElement = array1[0];
for (let i = 1; i < array1.length; i++) {
    allElement *= array1[i];
}
console.log(allElement);

// числа больше 5 но меньше 10
let array2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < array2.length; i++) {
    if (array2[i] > 5 && array2[i] < 10) {
        console.log(array2[i]);
    }
}

// четные элементы
for (let i = 0; i <array2.length; i++) {
    if (array2[i] % 2 === 0) {
        console.log(array2[i]);
    }
}

//функция palindrome
function Palindrome(word) {
    let Reverse = word.split('').reverse().join('');
    return Reverse === word;

}
console.log(Palindrome('шалаш'));

//функция min(a, b),возвращает меньшее из чисел
function min(a, b) {
    if (a < b) {
        return a;
    }
        return b;
}
console.log(min(8, 3)); // 3

//функция max(a, b),возвращает большее из чисел
function max(a, y) {
    if (a > y) {
        return a;
    }
        return y;
}
console.log(max(4, 2)); // 4

//функция min(a, b) с тернарным оператором
function min1(a, b) {
    return a < b ? a : b;
}
console.log(min1(4, 3)); // 3

//функция max(a, b) с тернарным оператором
function max1(a, y) {
    return a > y ? a : y;
}
console.log(max1(2, 8)); // 8

//функция, которая заменяет все 0 на 'zero'
let array3 = [ ];
for (let i = 0; i < 10; i++) {
    array3[i] = Math.floor(Math.random() * 101);
}
console.log(array3);

function myFunc(array) {
    for (let i = 0; i < array.length; i++) {
        let b = String(array[i]);
        if (b.endsWith('0')) {
            b = b.replaceAll('0', 'zero');
            array[i] = b;
        }
    }
    return array;
}

console.log(myFunc(array3));

// функция sum
function sum(a = 0) {
    return function(b = 0) {
        return a + b;
    };
}
console.log(sum(5)(2));

// Покрасьте абзацы по клику (событие click)
const text1El = document.getElementById('text1');
const text2El = document.getElementById('text2');
const text3El = document.getElementById('text3');

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const colorText = () => {
    let j = 0;
    return (event) => {
        event.target.style.color = colors[j];
        j = j > 3 ? 0 : j + 1;
        };
    };

text1El.addEventListener('click', colorText());
text2El.addEventListener('click', colorText());
text3El.addEventListener('click', colorText());

//преобразование формата даты: '2020-11-26' => '26.11.2020'
const date = '2020-11-26';
const dateFormat = (date2) => date2.split('-').reverse().join('.');

console.log(dateFormat(date));

//поиск объектов размещения:
const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];

const replaceStrForSearch = str => str.toLowerCase().replaceAll(' ', '');

const search = str => {
    const searchStr = replaceStrForSearch(str);

   return data
        .filter(object => {
            const string = `${object.country}${object.city}${object.hotel}`;
            return replaceStrForSearch(string).includes(searchStr);
        }).map(object => `Страна: ${object.country} Город: ${object.city} Отель: ${object.hotel}`);
};

console.log(search('ger '));



// функция getCalendarMonth
const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
if (dayOfWeek >= daysInWeek)  {
    throw new  Error('Invalid data');
}

  const daysWithoutTail = daysInMonth + dayOfWeek; //сумма дней месяца и смещение первого дня месяца.
  const iteration = daysWithoutTail + (daysInWeek - (daysWithoutTail % daysInWeek));
  let currentDay = daysInMonth - dayOfWeek;
  let subArrayIndex = 0;                           //индекс массива
  const result = [[]];                             //задаем вложенный массив (наш месяц)

  for (let i = 1; i <= iteration; i++) {
      if (result[subArrayIndex].length === daysInWeek) {
         if (result[subArrayIndex][result[subArrayIndex].length - 1] === daysInMonth) {
              break;
         }

           subArrayIndex++;                       //индекс массива увеличивается на 1
           result[subArrayIndex] = [];             //создается новый массив
         }

       currentDay++;

       if (currentDay > daysInMonth) {
           currentDay = 1;
       }

      result[subArrayIndex].push(currentDay);
  }

    return result;
};

const calendarMonth = getCalendarMonth(30, 7, 2);

console.log(calendarMonth);

