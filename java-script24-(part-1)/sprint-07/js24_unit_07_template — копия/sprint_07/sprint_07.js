const goods = document.querySelector('.goods')
const square = document.querySelector('.square')
const layer = document.querySelector('.layer')
const out1 = document.querySelector('.out-1')
const out2 = document.querySelector('.out-2')
const out3 = document.querySelector('.out-3')
const b1 = document.querySelector('.b-1')
const goodsImg = document.querySelector('.goods-img')
const outs = document.querySelectorAll('.out-all')

const handleChangeImg = () => {
  goodsImg.src = `./images/${goods.value}.jpg`

  outs.forEach((out) => {
    out.textContent = ''
  })

  square.value = 1
  layer.value = 1
}

const calculateExpenditure = () => {

  let expediture = 0
  let k = 0
  let price = 0

  const value = goods.value

  switch (value) {
    case "budmaster":
      console.log("budmaster");
      k = 1.9;
      price = 157;
      break;
    case "ceresit":
      console.log("ceresit");
      k = 2;
      price = 136;
      break;
    case "siltek":
      console.log("siltek");
      k = 2;
      price = 151;
      break;
    case "polimin":
      console.log("polimin");
      k = 1;
      price = 110;
      break;
  }

  expediture = square.value * layer.value * k
  out1.textContent = expediture + 'кг'
}

b1.onclick = calculateExpenditure

goods.onchange = handleChangeImg
