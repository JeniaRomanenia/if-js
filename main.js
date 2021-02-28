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
for (let i = 0; i < array2.length; i++) {
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
let array3 = [];
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
    return function (b = 0) {
        return a + b;
    };
}

console.log(sum(5)(2));

// Покрасьте абзацы по клику (событие click)
//const text1El = document.getElementById('text1');
//const text2El = document.getElementById('text2');
//const text3El = document.getElementById('text3');

//const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

//const colorText = () => {
//    let j = 0;
//    return (event) => {
//       event.target.style.color = colors[j];
//        j = j > 3 ? 0 : j + 1;
//        };
//    };

//text1El.addEventListener('click', colorText());
//text2El.addEventListener('click', colorText());
//text3El.addEventListener('click', colorText());

//преобразование формата даты: '2020-11-26' => '26.11.2020'
//const date = '2020-11-26';
//const dateFormat = (date2) => date2.split('-').reverse().join('.');

//console.log(dateFormat(date));

//поиск объектов размещения:
//const data = [
//    {
//        country: 'Russia',
//        city: 'Saint Petersburg',
//        hotel: 'Hotel Leopold',
//    },
//    {
//        country: 'Spain',
//        city: 'Santa Cruz de Tenerife',
//        hotel: 'Apartment Sunshine',
//    },
//    {
//        country: 'Slowakia',
//        city: 'Vysokie Tatry',
//        hotel: 'Villa Kunerad',
//    },
//    {
//        country: 'Germany',
//        city: 'Berlin',
//        hotel: 'Hostel Friendship',
//    },
//    {
//        country: 'Indonesia',
//        city: 'Bali',
//        hotel: 'Ubud Bali Resort&SPA',
//    },
//    {
//        country: 'Netherlands',
//        city: 'Rotterdam',
//        hotel: 'King Kong Hostel',
//    },
//    {
//        country: 'Marocco',
//        city: 'Ourika',
//        hotel: 'Rokoko Hotel',
//    },
//    {
//        country: 'Germany',
//        city: 'Berlin',
//        hotel: 'Hotel Rehberge Berlin Mitte',
//    },
//];

//const replaceStrForSearch = str => str.toLowerCase().replaceAll(' ', '');

//const search = str => {
//    const searchStr = replaceStrForSearch(str);

//   return data
//        .filter(object => {
//            const string = `${object.country}${object.city}${object.hotel}`;
//            return replaceStrForSearch(string).includes(searchStr);
//        }).map(object => `Страна: ${object.country} Город: ${object.city} Отель: ${object.hotel}`);
//};

//console.log(search('ger '));


// функция getCalendarMonth

//const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
//    if (dayOfWeek >= daysInWeek)  {
//        throw new  Error('Invalid data');
//    }

//    const daysWithoutTail = daysInMonth + dayOfWeek; //сумма дней месяца и смещение первого дня месяца.
//    const iteration = daysWithoutTail + (daysInWeek - (daysWithoutTail % daysInWeek));
//    let currentDay = daysInMonth - dayOfWeek;
//    let subArrayIndex = 0;                           //индекс массива
//    const result = [[]];                             //задаем вложенный массив (наш месяц)

//    for (let i = 1; i <= iteration; i++) {
//       if (result[subArrayIndex].length === daysInWeek) {
//           if (result[subArrayIndex][result[subArrayIndex].length - 1] === daysInMonth) {
//                break;
//            }
//            subArrayIndex++;                       //индекс массива увеличивается на 1
//            result[subArrayIndex] = [];             //создается новый массив
//        }
//        currentDay++;
//        if (currentDay > daysInMonth) {
//            currentDay = 1;
//        }
//        result[subArrayIndex].push(currentDay);
//    }
//    return result;
//};

//const calendarMonth = getCalendarMonth(30, 7, 2);

//'console.log(calendarMonth);


const date = new Date();

const renderCalendar = (year, month, elementID) => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
        "November", "December"]; //массив месяцев

    const nameMonth = document.getElementById(elementID);
    nameMonth.textContent = `${months[date.getMonth()]} ${date.getFullYear()}`; //выводим месяц в h1

    let days = "";

    for (let x = firstDayIndex; x > 1; x--) {
        days += `<div class="prev-date">${prevLastDay}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
    }
    monthDays.innerHTML = days;
};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar(date.getFullYear(), date.getMonth(), 'month');
//renderCalendar(date.getFullYear(), date.setMonth(date.getMonth() + 1),'month-next');

// Работа с классами

const studentsData = [
    {
        firstName: 'Василий',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Java',
    },
    {
        firstName: 'Иван',
        lastName: 'Иванов',
        admissionYear: 2018,
        courseName: 'JavaScript',
    },
    {
        firstName: 'Александр',
        lastName: 'Федоров',
        admissionYear: 2017,
        courseName: 'Python',
    },
    {
        firstName: 'Николай',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Android',
    }
];

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student extends User {
    constructor(firstName, lastName, admissionYear, courseName) {
        super(firstName, lastName);
        this.admissionYear = admissionYear;
        this.courseName = courseName;
    }

    get course() {
        return new Date().getFullYear() - this.admissionYear;
    }
}

class Students {
    constructor(students) {
        this.students = students.map(({
                                          firstName, lastName, admissionYear, courseName,
                                      }) => new Student(firstName, lastName, admissionYear, courseName));
    }

    getInfo() {
        this.students.sort((prev, next) => prev.course - next.course);
        const arr = [];
        this.students.forEach((item) => {
            arr.push(`${item.fullName} - ${item.courseName}, ${item.course} курс`);
        });
        return arr;
    }
}

const students = new Students(studentsData);
console.log(students.getInfo());

//lesson-13 Reduce the number of requests to the server.
function addCards(array, homes) {
    array.forEach((item, index) => {
        const el = document.createElement('div');
        el.classList.add('home', 'col-3', 'col-xs-3');
        el.innerHTML = `
         <img class="homes-img" src=${item.imageUrl} alt=${item.name}>
         <a class="homes-link" href="">${item.name}</a>
         <p class="homes-text">${item.city}, ${item.country}</p>
     `;
        homes.appendChild(el);
        if (index > 3) {
            el.classList.add('homes-displaynone');
        }
    });
}

const sendReguest = (url, options) => (
    fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then((data) => data)
    .catch(error => console.log(error.message))
);

//lesson-15 Bubble sorting of data from the "Homes guests loves" block by the name field.

function bubbleSort(array) {
    for (let n = 0; n < array.length; n++) {
        for (let i = 0; i < array.length - 1 - n; i++) {
            if (array[i].name > array[i + 1].name) {
                const buff = array[i].name;
                array[i].name = array[i + 1].name;
                array[i + 1].name = buff;
            }
        }
    }
    return array;
}

const homesEl = document.getElementById('homes');

(async () => {
    let data;
    if (!sessionStorage.getItem('homes')) {
        data = await sendReguest ('https://fe-student-api.herokuapp.com/api/hotels/popular')
        sessionStorage.setItem('homes', JSON.stringify(data));
    } else {
        data = JSON.parse(sessionStorage.getItem('homes'));
    }
    if (!data) {
        console.log('error')
    } else {
        bubbleSort(data);
        addCards(data, homesEl);
    }
})();

//lesson-14 The form that will submit the file to the url https://fe-student-api.herokuapp.com/api/file.
const formLessonEl = document.getElementById('form');

formLessonEl.addEventListener('submit', async event => {
    event.preventDefault();

    const res = await sendReguest ('https://fe-student-api.herokuapp.com/api/file', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: new FormData(formLessonEl),
        },
    )
    console.log(res);
});

//lesson-16 Made search hotel.
const availableHotelsEl = document.getElementById('availableHotels');
const formsEl = document.getElementById('forms');

formsEl.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formCity = document.getElementById('city');
    const formCityData = formCity.value.toLowerCase().trim();

    const data = await sendReguest (`https://fe-student-api.herokuapp.com/api/hotels?search=${formCityData}`)
    if (data.length === 0) {
        availableHotelsEl.classList.add('homes');
        availableHotelsEl.innerHTML = `
        <div class='container'>
            <h2 class="text-center h2-text">Available hotels</h2>
        </div>
        `;
    }
    if (data.length !== 0) {
        bubbleSort(data);
        availableHotelsEl.classList.add('homes');
        availableHotelsEl.innerHTML = `
        <div class='container'>
            <h2 class="text-center h2-text">Available hotels</h2>
            <div class="row" id="available-homes">
            <svg class="homes-svg-right">
        <use href="#arrow"></use>
      </svg>
      <svg class="homes-svg-left, homes-svg-left-displaynone">
        <use href="#arrow"></use>
      </svg>
        </div>
        `;
        const availableHomesEl = document.getElementById('available-homes')
        addCards(data, availableHomesEl);
    }
});

//слайдер




