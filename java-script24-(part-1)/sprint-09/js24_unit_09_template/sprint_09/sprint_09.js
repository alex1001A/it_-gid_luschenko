// Task 1
// Создана функция t01. Функция запускается при нажатии .b-1. Напишите код внутри функции, который создает c помощью цикла while строку, где шаблон '_*' повторяется 10 раз. Функция выводит в .out-1 созданную строку. Обращаю внимание - функция должна гарантировать один и тот же результат в не зависимости от количества запусков. Данное требование справедливо для всех функций далее.
// т.е. результат _*_*_*_*_*_*_*_*_*_*

const out1 = document.querySelector(".out-1");

function t01() {
  let i1 = 0;
  let str1 = "";
  while (i1 < 10) {
    str1 += "_*";
    i1++;
  }

  out1.textContent = str1;
}

document.querySelector(".b-1").onclick = t01;

// Task 2
// Создана функция t02. Функция запускается при нажатии .b-2. Напишите код внутри функции, который создает c помощью цикла while строку, где шаблон '_*' повторяется число раз указанное в .input-2. Функция выводит в .out-2 созданную строку.

const out2 = document.querySelector(".out-2");

function t02() {
  let str2 = "";
  let value1 = 0;
  const i2 = +document.querySelector(".i-2").value;

  while (value1 < i2) {
    str2 += "_*";
    value1++;
  }

  out2.textContent = str2;
}

document.querySelector(".b-2").onclick = t02;

// Task 3
// Создана функция t03. Функция запускается при нажатии .b-3. Напишите код внутри функции, который получает число из input и с помощью цикла while создает строку от 0 до указанного числа с разделителем - подчеркивание. Выводит созданную строку в .out-3.
// Введено число 5, получаем строку 0_1_2_3_4_5_

const out3 = document.querySelector(".out-3");

function t03() {
  let value3 = 0;
  let str3 = "";
  const i3 = +document.querySelector(".i-3").value;

  while (value3 <= i3) {
    str3 += `${value3}_`;
    value3++;
  }

  out3.textContent = str3;
}

document.querySelector(".b-3").onclick = t03;

// Task 4
// Создана функция t04. Функция запускается при нажатии .b-4. Напишите код внутри функции, который получает число из input и с помощью цикла while создает строку от полученного числа до нуля, с разделителем - подчеркивание. Выводит созданную строку в .out-4.
// Введено число 5, получаем строку 5_4_3_2_1_0_

const out4 = document.querySelector(".out-4");

function t04() {
  let value4 = 0;
  let str4 = "";
  let i4 = +document.querySelector(".i-4").value;

  while (i4 >= value4) {
    str4 += `${i4}_`;
    i4--;
  }

  out4.textContent = str4;
}

document.querySelector(".b-4").onclick = t04;

// Task 5
// Создана функция t05. Функция запускается при нажатии .b-5. Напишите код внутри функции, который читает ЧИСЛО из input.i-5 и создает строку от 0 до введенного числа с шагом 2. Разделитель - подчеркивание.
// Введено число 6, получаем строку 0_2_4_6_
// Введено число 4, получаем строку 0_2_4_
// При проверке в input будут вводиться только четные числа.
// Строка выводится в .out-5. Для решения используйте цикл while.

const out5 = document.querySelector(".out-5");

function t05() {
  const i5 = +document.querySelector(".i-5").value;
  let value5 = 0;
  let str5 = "";

  while (value5 <= i5) {
    if (value5 % 2 !== 0) continue;
    str5 += `${value5}_`;
    value5 += 2;
  }

  out5.textContent = str5;
}

document.querySelector(".b-5").onclick = t05;

// Task 6
// Создана функция t06. Функция запускается при нажатии .b-6. Напишите код внутри функции. Код должен выводить в .out-6 количество чисел, которые делятся на 7 с остатком нуль, в диапазоне от 0 (включительно) до 100 (включительно). Решите задачу циклом while.

const out6 = document.querySelector(".out-6");

function t06() {
  let count6 = 0;
  let value6 = 0;

  while (value6 <= 100) {
    if (value6 % 7 === 0) {
      count6++;
    }
    value6++;
  }

  out6.textContent = count6;
}

document.querySelector(".b-6").onclick = t06;

// Task 7
// Создана функция t07. Функция запускается при нажатии .b-7. Напишите код внутри функции. Код содержит цикл while от 10 (включительно) до 99 (включительно) и создает строку, куда выводит числа в которых сумма цифр десятков и единиц равна 8. Разделитель подчеркивание.
// т.е. выводятся 17_26_ и далее

const out7 = document.querySelector(".out-7");

function t07() {
  let str7 = "";
  let i = 10;

  while (i <= 99) {
    let ten = Math.floor(i / 10);
    let unit = i % 10;
    if (ten + unit === 8) {
      str7 += `${i}_`;
    }
    i++;
  }

  out7.textContent = str7;
}

document.querySelector(".b-7").onclick = t07;

// Task 8
// Создана функция t08. Функция запускается при нажатии .b-8. Функция получает число из input.i-8 и создает строку вида 0_**_1_**_ до введенного числа включительно. Строку выводит в .out-8.
// Например ввели 3, получаем строку 0_**_1_**_2_**_3_**_

const out8 = document.querySelector(".out-8");

function t08() {
  let i8 = +document.querySelector(".i-8").value;
  let str8 = "";
  let i = 0;
  while (i <= i8) {
    str8 += `${i}_**_`;
    i++;
  }

  out8.textContent = str8;
}

document.querySelector(".b-8").onclick = t08;

// Task 9
// Создана функция t09. Функция запускается при нажатии .b-9. Напишите код внутри функции. Код получает число из input.i-9 и формирует строку, которая при выводе на страницу рисует прямоугольник. Ширина прямоугольника - 6 звездочек, а высота определяется введенным числом. Выведите строку в .out-9.
// Например ввели число 3. Необходимо сформировать строку '******<br>******<br>******<br>'

const out9 = document.querySelector(".out-9");

function t09() {
  let i9 = +document.querySelector(".i-9").value;
  let str9 = "";
  let i = 0;

  while (i < i9) {
    str9 += `******<br>`;
    i++;
  }

  out9.innerHTML = str9;
}

document.querySelector(".b-9").onclick = t09;

// Task 10
// Создана функция t10. Функция запускается при нажатии .b-10. Напишите код внутри функции. Код получает число из input.i-10 и создает строку от 0 до введенного числа включительно, где разделитель после четных чисел знак =, а после не четных знак минус. Строка выводится в .out-10. Применяйте цикл while.
// Например введено число 5, необходимо сформировать строку '0=1-2=3-4=5-'

const out10 = document.querySelector(".out-10");

function t10() {
  const i10 = +document.querySelector(".i-10").value;

  let str10 = "";
  let i = 0;

  while (i <= i10) {
    if (i % 2 === 0) {
      str10 += `${i}=`;
    } else {
      str10 += `${i}-`;
    }
    i++;
  }

  out10.textContent = str10;
}

document.querySelector(".b-10").onclick = t10;

// Task 11
// Создана функция t11. Функция запускается при нажатии .b-11. Напишите код, который формирует строку вида 11_21_ до 91_ включительно, с помощью цикла do while. Выведите строку в .out-11.

const out11 = document.querySelector(".out-11");

function t11() {
  let str11 = "";
  let i = 0;

  do {
    let unit = i % 10;
    if (unit === 1) {
      console.log(unit);
      str11 += `${i}_`;
    }
    i++;
  } while (i <= 91);

  out11.textContent = str11;
}

document.querySelector(".b-11").onclick = t11;

// Task 12
// Создана функция t12. Функция запускается при нажатии .b-12. Напишите код внутри функции, который формирует строку с 77_74_71_ до 35_. Т.е. от 77 до 35 с шагом 3. Разделитель - подчеркивание. Решите задачу с помощью do while. Строку выведите в .out-12.

const out12 = document.querySelector(".out-12");

function t12() {
  let i = 77;
  let str12 = "";
  do {
    str12 += `${i}_`;
    i = i - 3;
  } while (i >= 35);

  out12.textContent = str12;
}

document.querySelector(".b-12").onclick = t12;

// Task 13
//  Создана функция t13. Функция запускается при нажатии .b-13. Напишите код внутри функции, который получает разделитель из select.s-13 и создает строку от 0 до 10 с выбранным разделителем. Выведите строку в .out-13. Применяйте цикл do while.
// Например выбран разделитель =, получим строку 0=1=2=3=4=5=6=7=8=9=10=

const out13 = document.querySelector(".out-13");

function t13() {
  const select = document.querySelector(".s-13").value;
  let i = 0;
  let str13 = "";

  do {
    str13 += `${i}${select}`;
    i++;
  } while (i <= 10);
  out13.textContent = str13;
}

document.querySelector(".b-13").onclick = t13;

// Task 14
// Создана функция t14. Функция запускается при изменении input.range-14, код в функции должен получать value из input и создавать строку от 0 до полученного числа, шаг 1 и разделитель пробел. Строка должна выводиться в .out-14. Применяйте цикл do while.

const out14 = document.querySelector(".out-14");

function t14() {
  let i14 = document.querySelector(".range-14").value;
  let i = 0;
  let str14 = "";

  do {
    str14 += `${i} `;
    i++;
  } while (i <= i14);
  out14.textContent = str14;
}

document.querySelector(".range-14").oninput = t14;

// Тask 15
// Создана функция t15. Функция запускается при нажатии .b-15. Напишите код внутри функции, который записывает в каждый div.d-15 число 0 (очищая предыдущее содержимое). Применяйте цикл do while.

const divs15 = document.querySelectorAll(".d-15");

function t15() {
  let i = 0;
  do {
    divs15[i].textContent = 0;
    i++;
  } while (i < divs15.length);
}

document.querySelector(".b-15").onclick = t15;

// Task 16
// Создана функция t16. Функция запускается при нажатии .b-16. Напишите код внутри функции, который записывает в каждый div.d-16 число (очищая предыдущее содержимое). Применяйте цикл do while. Т.е. в первом div.d-16 выведите  число 1, во второй - число 2 и т.д.

const divs16 = document.querySelectorAll(".d-16");

function t16() {
  let i = 0;
  do {
    divs16[i].textContent = i + 1;
    i++;
  } while (i < divs16.length);
}

document.querySelector(".b-16").onclick = t16;

// Task 17
// Создана функция t17. Функция запускается при нажатии .b-17. Напишите код внутри функции, который записывает в каждый div.d-17 число в начало текста. Применяйте do while.
// т.е. был <div>one</div> после выполнения цикла должно быть <div>1. one</div>
// т.е. был <div>two</div> после выполнения цикла должно быть <div>2. two</div>
// т.е. был <div>three</div> после выполнения цикла должно быть <div>3. three</div>

const divs17 = document.querySelectorAll(".d-17");

function t17() {
  let i = 0;

  do {
    divs17[i].textContent = `${i + 1}.${divs17[i].textContent}`;
    i++;
  } while (i < divs17.length);
}

document.querySelector(".b-17").onclick = t17;

// Task 18
// Напишите в функции t18 код, который с помощью цикла do while формирует строку 1 10 2 20 3 30 и так далее до 10 100 . Выведите строку в .out-18.

const out18 = document.querySelector(".out-18");

function t18() {
  let i = 1;
  let str18 = "";
  do {
    let small = i;
    let large = i * 10;
    i++;
    str18 += `${small} ${large} `;
  } while (i <= 10);
  out18.textContent = str18;
}

document.querySelector(".b-18").onclick = t18;

// Task 19
// Напишите в функции t19 код, который с помощью цикла do while формирует строку 0 10 1 9 2 8 3 7 4 6 5 5 6 4 7 3 8 2 9 1 10 0 . Выведите строку в .out-19.

const out19 = document.querySelector(".out-19");

function t19() {
  let i = 0;
  let k = 10
  let str19 = "";
  
  do {
    str19 += `${i} ${k} `
    i++
    k--
  } while (i <= 10);

  out19.textContent = str19;
}

document.querySelector(".b-19").onclick = t19;

// Task 20
// Получите все td с классом .price, c помощью querySelectorAll(). В функции посчитайте сумму товаров в данных ячейках и выведите в ячейку .total. Примените цикл do while.

const total = document.querySelector('.total')
const prices = document.querySelectorAll('.price')

function t20() {
let i = 0
  let sum = 0
  do {
    let price = +prices[i].textContent
    
    sum += price
    
    i++
  } while (i < prices.length);

  total.textContent = sum
}

document.querySelector(".b-20").onclick = t20;
