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
    if (Reverse === word) {
        return true;
    }
        return false;
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


