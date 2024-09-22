const goods = document.querySelector(".goods");
const square = document.querySelector(".square");
const layer = document.querySelector(".layer");
const out1 = document.querySelector(".out-1");
const out2 = document.querySelector(".out-2");
const out3 = document.querySelector(".out-3");
const goodsImg = document.querySelector(".goods-img");
const btn = document.querySelector(".b-1");

function t01() {
  let expenditure = 0;
  let k = 0;
  let price = 0;

  const value = goods.value;

  switch (value) {
    case "budmaster":
      price = 157;
      k = 1.9;
      break;
    case "ceresit":
      price = 136;
      k = 2;
      break;
    case "siltek":
      price = 151;
      k = 2;
      break;
    case "polimin":
      price = 110;
      k = 1;
      break;
  }

  if (square.value < 1) {
    square.value = 1;
  } else if (square.value > 10000) {
    square.value = 10000;
  }

  if (layer.value < 1) {
    layer.value = 1;
  } else if (layer.value > 100) {
    layer.value = 100;
  }

  if (square.value.trim() === "") {
    square.value = 1;
  }
  if (layer.value.trim() === "") {
    layer.value = 1;
  }

  expenditure = square.value * layer.value * k;
  out1.textContent = `${expenditure} кг`;
  const bagsQty = Math.ceil(expenditure / 25);
  out2.textContent = `${bagsQty} мешка/мешков`;
  out3.textContent = `${bagsQty * price} uah`;
}

btn.onclick = t01;

function t02() {
  goodsImg.src = `./images/${goods.value}.jpg`;
  out1.textContent, out2.textContent, (out3.textContent = "");
}

goods.onchange = t02;
