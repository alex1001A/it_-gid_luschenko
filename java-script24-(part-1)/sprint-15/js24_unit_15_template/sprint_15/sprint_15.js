// Task 1
// Добавьте через addEventListener событие 'click' на параграф .p-1. При клике запускается стрелочная функция t01, которая при событии клик дописывает в .out-1 символ единица. Т.е. кликнули два раза, в .out-1 будет '11'.

const out1 = document.querySelector(".out-1");
const p1 = document.querySelector(".p-1");

const t01 = () => {
  out1.textContent += 1;
};

p1.addEventListener("click", t01);

// Тут напишите событие.

// Task 2
// Добавьте через addEventListener событие 'dblclick' на кнопку .b-2. При событии запускается стрелочная функция t02, которая окращивает .out-2 в backgroundColor 'orange'.

const out2 = document.querySelector(".out-2");
const b2 = document.querySelector(".b-2");

const t02 = () => {
  out2.style.background = "orange";
};

b2.addEventListener("dblclick", t02);

// Тут напишите событие.

// Task 3
// Добавьте через addEventListener событие 'mouseup' на кнопку .p-3. При событии запускается стрелочная функция t03, которая выводит в .out-3 строку 'mouseup'.

const out3 = document.querySelector(".out-3");
const p3 = document.querySelector(".p-3");

const t03 = () => {
  out3.textContent = "mouseup";
};

p3.addEventListener("mouseup", t03);

// Тут напишите событие.

// Task 4
// Добавьте через addEventListener событие 'mousedown' на кнопку .p-4. При событии  запускается стрелочная функция t04, которая при выводит в .out-4 строку 'mousedown'.

const out4 = document.querySelector(".out-4");
const p4 = document.querySelector(".p-4");

const t04 = () => {
  out4.textContent = "mousedown";
};

p4.addEventListener("mousedown", t04);

// Тут напишите событие.

// Task 5
// Добавьте через addEventListener событие 'mouseover' на .block-5.  При событии запускается стрелочная функция t05, которая выводит в .out-5 строку 'mousedown'.

const out5 = document.querySelector(".out-5");
const block5 = document.querySelector(".block-5");

const t05 = () => {
  out5.textContent = "mousedown";
};

block5.addEventListener("mouseover", t05);

// Тут напишите событие.

// Task 6
// Добавьте через addEventListener событие 'mouseout' на .block-6.  При событии запускается стрелочная функция t06, которая добавляет классу .block-6 класс 'bg-orange'.

const block6 = document.querySelector(".block-6");

const t06 = () => {
  block6.classList.add("bg-orange");
};

block6.addEventListener("mouseout", t06);

// Тут напишите событие.

// Task 7
// Добавьте событие click на кнопку .b-7, по событию запускается стрелочная функция t07. Функция отключает событие contextmenu на блоке .block-7.

const b7 = document.querySelector(".b-7");
const block7 = document.querySelector(".block-7");

const t07 = () => {
  block7.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
};

b7.addEventListener("click", t07);

// Тут напишите событие.

// Task 8
// Добавьте событие mousemove на блок .block-8. При событии запускается стрелочная функция t08.

const block8 = document.querySelector('.block-8')
const h4 = document.querySelector('.h4')

let w = 100;

const t08 = () => {
  w++;
  document.querySelector(".block-8").style.width = w + "px";
};

block8.addEventListener('mousemove', t08)

// тут добавьте событие

// Task 9
// Добавьте событие click на .block-9. При клике запускается функция t09 (стрелочная). Функция при срабатывании поворачивает блок .block-9 на 15 градусов.
// Т.е. после двух кликов будет блок повернут на 30 градусов.

const block9 = document.querySelector('.block-9')

let deg = 0

const t09 = () => {
    block9.style.transform = `rotate(${deg}deg)`
    deg += 15
}

// тут напишите функцию t09

block9.addEventListener('click', t09)

// тут добавьте событие

// Task 10
// При клике на кнопке .b-10 запускается функция t10. Функция должна добавлять через addEventListener событие mousemove на блок .block-10. При срабатывании события запускается функция blockSize.


const blockSize = () => {
  let w = document.querySelector(".block-10").offsetWidth;
  w++;
  document.querySelector(".block-10").style.width = w + "px";  
};

const t10 = () => {
    document.querySelector(".block-10").addEventListener('mousemove', blockSize)
};

document.querySelector(".b-10").addEventListener("click", t10);

// Task 11
// При клике на кнопке .b-11 запускается функция t11. Функция должна удалять через removeEventListener событие mousemove на блоке .block-10.

const t11 = () => {
    document.querySelector(".block-10").removeEventListener('mousemove', blockSize)
};

document.querySelector(".b-11").addEventListener("click", t11);

// Task 12
// Добавьте на input.i-12 событие input с помощью addEventListener. При событии запускается стрелочная функция t12. Функция должна получать value из input.i-12 и выводить в .out-12.

const i12 = document.querySelector('.i-12')
const out12 = document.querySelector('.out-12')

const t12 = () => {
    out12.textContent = i12.value
}
// тут напишите функцию t12

i12.addEventListener('input', t12)

// тут напишите событие

// Task 13
// Добавьте событие copy на input.i-13. При срабатывании события запускается функция t13, которая выводит в .out-13 строку 'copy'.

const i13 = document.querySelector('.i-13')
const out13 = document.querySelector('.out-13')

const t13 = () => {
    out13.textContent = 'copy'
};

i13.addEventListener('copy', t13)

// тут напишите событие

// Task 14
// Добавьте событие paste на input.i-14. При срабатывании события запускается функция t14, которая выводит в .out-14 вставленный в input.i-14 текст.

const i14 = document.querySelector('.i-14')
const out14 = document.querySelector('.out-14')

const t14 = () => {
    out14.textContent = i14.value    
};

i14.addEventListener('paste', () => {
    setTimeout(t14, 0)
})

// тут напишите событие

// Task 15
// Добавьте событие cut на input.i-15. При срабатывании события запускается функция t15, которая добавляет .i-15 атрибут placeholder с текстом 'cut'

const t15 = () => {};

// тут напишите событие

// Task 16
// Добавьте событие focus на input.i-16. При срабатывании события запускается функция t16, которая добавляет .i-16 класс  'focus-input'.

const t16 = () => {};

// тут напишите событие

// Task 17
// Добавьте событие blur на input.i-16. При срабатывании события запускается функция t17, которая удаляет .i-16 класс  'focus-input'.

const t17 = () => {};

// тут напишите событие

// Task 18
// Добавьте событие click на кнопку .b-18. По клику запускается стрелочная функция t18, которая ищет элемент с tabindex = 18 и делает элемент focus().

const t18 = () => {};

// тут напишите событие

// Task 19
// Добавьте событие canсel на input .i-19. По клику запускается стрелочная функция t19, которая выводит в .out-19 текст 'Cancel'.

const t19 = () => {};

// тут напишите событие

// Task 20
// Добавьте событие dragstart на .block-20. По событию запускается стрелочная функция t20. Функция выводит в .out-20 строку 'drag'.

const t20 = () => {};

// тут напишите событие
