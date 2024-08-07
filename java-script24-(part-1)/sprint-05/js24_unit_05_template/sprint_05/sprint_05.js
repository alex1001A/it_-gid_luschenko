// Task 1
// Создана функция t01. Функция запускается при нажатии .b-1. Напишите код внутри функции, который читает строку из .i-1 и выводит в .out-1.


let i1 = document.querySelector('.i-1')
let out1 = document.querySelector('.out-1')

function t01 () {
    out1.textContent = i1.value
}

document.querySelector('.b-1').onclick = t01;


// Task 2
// Создана функция t02. Функция запускается при нажатии .b-2. Напишите код внутри функции, которая присваивает input.i-2 значение value равное 'one piece'.

function t02 () {
    document.querySelector('.i-2').value = 'one piece'
}

document.querySelector('.b-2').onclick = t02;

// Task 3
// Создана функция. Изучите ее работу. Посмотрите, на тип input, и на тип данных, которые выводятся в консоль. Почему происходит так? Если не понятно - задавайте вопрос в чате.

function t03 () {
    const value = document.querySelector('.i-3').value;
    console.log(value);
    console.log(typeof value);
}

document.querySelector('.b-3').onclick = t03;


// Task 4
// Создана функция t04. Функция запускается при нажатии .b-4. Напишите код внутри функции, который считывает числа из input.i-41 и input.i-42 и выводит в .out-4 их сумму.

const i41 = document.querySelector('.i-41')
const i42 = document.querySelector('.i-42')
const out4 = document.querySelector('.out-4')

function t04 () {
    out4.textContent = +i41.value + +i42.value
}

document.querySelector('.b-4').onclick = t04;


// Task 5
// Создана функция t05. Функция запускается при нажатии .b-5. Напишите код внутри функции, который читает строку из input.i-51 и записывает в input.i-5.

const i51 = document.querySelector('.i-51')
const i5 = document.querySelector('.i-5')

function t05 () {
    i5.value = i51.value
}

document.querySelector('.b-5').onclick = t05;

// Task 6
// Создана функция t06. Функция запускается при нажатии .b-6. Напишите код внутри функции, который читает строку из input.i-6 и выводит в .out-6.

const i6 = document.querySelector('.i-6')
const out6 = document.querySelector('.out-6')

function t06 () {
    out6.textContent = i6.value
}

document.querySelector('.b-6').onclick = t06;

// Task 7
// Давайте чуть разнообразим наши знания событий и изучим событие input. Событие срабатывает при вводе информации в input. Напишите в функцию t07 код, который получает value из input.i-7 и выводит в .out-7. Для проверки - начните вводить любой текст в input.i-7.

const i7 = document.querySelector('.i-7')
const out7 = document.querySelector('.out-7')

function t07 () {
    out7.textContent = i7.value
}

document.querySelector('.i-7').oninput = t07;


// Task 8
// Создана функция t08. Функция запускается при нажатии .b-8. Напишите код внутри функции, который читает число из input.i-8 и записывает в progress.p-8. Также, число выводится в .out-8.

const i8 = document.querySelector('.i-8')
const p8 = document.querySelector('.p-8')
const out8 = document.querySelector('.out-8')

function t08 () {
    // out8.textContent = p8.value = i8.value
    out8.textContent = i8.value
    p8.value = i8.value
}

document.querySelector('.b-8').onclick = t08;

// Task 9
// Создана функция t09. Функция запускается при нажатии .b-9. Напишите код внутри функции, который читает цвет из input.i-9 и выводит в .out-9.

const i9 = document.querySelector('.i-9')
const out9 = document.querySelector('.out-9')

function t09 () {
    out9.textContent = i9.value
}

document.querySelector('.b-9').onclick = t09;


// Task 10
// Создана функция t10. Функция запускается при нажатии .b-10. Напишите код внутри функции, который читает цвет из input.i-10 и выводит в .out-10 и окрашивает .out-10 с помощью свойства style.backgroundColor.

const i10 = document.querySelector('.i-10')
const out10 = document.querySelector('.out-10')

function t10 () {
    // out10.textContent = out10.style.background = i10.value
    out10.textContent = i10.value
    out10.style.background = i10.value
}

document.querySelector('.b-10').onclick = t10;

// Task 11
// Создана функция t11. Функция запускается при нажатии .b-11. Напишите код внутри функции, который читает строку из input.i-11 и присваивает input.i-111.

const i11 = document.querySelector('.i-11')
const i111 = document.querySelector('.i-111')

function t11 () {
    i111.value = i11.value
}

document.querySelector('.b-11').onclick = t11;

// Task 12
// Создана функция t12. Функция запускается при нажатии .b-12. Напишите код внутри функции, который получает выбранный value из select.s-12 и выводит в .out-12. Напоминаю - не усложняйте! Задача решается одной строкой.

const s12 = document.querySelector('.s-12')
const out12 = document.querySelector('.out-12')

function t12 () {
    out12.textContent = s12.value
}

document.querySelector('.b-12').onclick = t12;


// Task 13
// Создана функция t13. Функция запускается при нажатии .b-13. Напишите код внутри функции, который получает текст между тегами option выбранного option. Напоминаю - не усложняйте! 

const s13 = document.querySelector('.s-13')
const out13 = document.querySelector('.out-13')
console.log(s13);


function t13 () {
   out13.textContent = s13.options[s13.selectedIndex].textContent
}

document.querySelector('.b-13').onclick = t13;


// Task 14
// Создана функция t14. Функция запускается при нажатии .b-14. Напишите код внутри функции, который присваивает select.s-14 свойству value значение из переменной g14. Изучите как изменяется select при таком действии.

const s14 = document.querySelector('.s-14')

let g14 = 333;

function t14 () {
   s14.value = g14
}

document.querySelector('.b-14').onclick = t14;

// Тask 15
// Мы получали значение из select по нажатию на кнопку. Давайте изучим еще одно событие, которое очень подходит для select - событие change. Событие срабатывает когда select изменяется. Написана функция t15, функция срабатывает при изменении select.s-15. Напишите код внутри функции, который получает значение value выбранного option и выводит в .out-15.

const s15 = document.querySelector('.s-15')
const out15 = document.querySelector('.out-15')

function t15() {
    out15.textContent = s15.value
}

document.querySelector('.s-15').onchange = t15;


// Task 16
// Создана функция t16. Функция запускается при нажатии .b-16. Внутри функции получите value из select.s-161 и присвойте value в select.s-162.

const s161 = document.querySelector('.s-161')
const s162 = document.querySelector('.s-162')

function t16 () {
    s162.value = s161.value
}

document.querySelector('.b-16').onclick = t16;

// Task 17
// Создана функция t17. Функция запускается при нажатии .b-17. Функция читает текст из textarea.ta-17 и выводит в .out-17.

const ta17 = document.querySelector('.ta-17')
const out17 = document.querySelector('.out-17')

function t17 () {
   out17.textContent = ta17.textContent
}

document.querySelector('.b-17').onclick = t17;


// Task 18
// Создана функция t18. Функция запускается при событии input на input range. Напишите код внутри функции, который получает value из input.i-18 и выводит в .out-18.

const i18 = document.querySelector('.i-18')
const out18 = document.querySelector('.out-18')

function t18 () {
    out18.textContent = i18.value
}

document.querySelector('.i-18').oninput = t18;

// Task 19
// Создана функция t19. Функция запускается при клике на кнопку .b-19. Изучите как работает функция. Снимите комментарий с переменной g19 и изучите как меняется checkbox.ch-19.

let g19 = true;
g19 = false;

const ch19 = document.querySelector('.ch-19');

function t19() {
    ch19.checked = g19;
    if (ch19.checked) {
        document.querySelector('.out-19').textContent = ch19.value;
    }

}

document.querySelector('.b-19').onclick = t19;

// Task 20
// Создана функция t20. Функция запускается при клике на кнопку .b-20. Напишите код внутри функции, который проверяет является ли .ch-20 выбранным (checked) и если да, то выводит в .out-20 value элемента .ch-20.

const ch20 = document.querySelector('.ch-20')
const out20 = document.querySelector('.out-20')

function t20() {
    if (ch20.checked) {
        out20.textContent = ch20.value
    }
}

document.querySelector('.b-20').onclick = t20;