for (let i = 0; i < 5; ++i) {
  // console.log(i);
}

let out = "";

for (let i = 99; i > 88; i--) {
  out += i + "_";
}

document.querySelector(".out-1").textContent = out;

// ==============================

let out2 = "";

for (let i = 0; i < 5; ++i) {
  out2 += "******<br>";
}

document.querySelector(".out-2").innerHTML = out2;

// сумма ряда

// 1 + 2 + 3 + 4 + ... + 10 = ?

let sum = 0;

for (let i = 0; i <= 10; i++) {
  sum = sum + i;
}

// console.log(sum);

// умножение ряда

// 1 * 2 * 3 * 4 * ... * 10 = ?

let sum2 = 1;

for (let i = 1; i <= 10; i++) {
  sum2 = sum2 * i;
}

// console.log(sum2);

// Пропустить одну или несколько иттераций

for (let i = 0; i <= 5; ++i) {
  if (i === 3) continue;
  // console.log(i);
}

// Выйти из цикла

for (let i = 0; i <= 5; ++i) {
  if (i === 3) break;
  //   console.log(i);
}

const elems = document.querySelectorAll("div > p");
// console.log(elems);
// console.log(elems[0].textContent);

for (let i = 0; i < elems.length; i++) {
  console.log(elems[i].textContent);
}

const r1 = document.getElementsByName("r-1");
console.log(r1);

console.clear()

function radio() {
  for (let i = 0; i < r1.length; i++) {
    console.log(i);
    
    if (r1[i].checked) {
      console.log(r1[i].value);
      break;
    }
  }
}

document.querySelector('.b-1').onclick = radio
