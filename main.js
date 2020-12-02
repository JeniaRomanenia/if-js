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

text1El.addEventListener('click', colorText());
text2El.addEventListener('click', colorText());
text3El.addEventListener('click', colorText());

function colorText (){
    let j = 0;
    return function (){
        this.style.color = colors[j];
        j++;
        if (j == colors.length){
            j = 0;
        }
    }
}