const p = document.createElement('p')
p.textContent = 'hello js 24'
p.classList.add('bg-orange')
p.setAttribute('data-p', 22)
console.log(p);

// таким образом мы не вставляем копии параграфа, а перезаписываем вставку уже имеющегося, т.е. если он был то перезаписываем, если не было то вставим внуть .out
// document.querySelector('.out').append(p)
// document.querySelector('.out').append(p)

// Параграф не копируется в оба out, а перемещается из 1-го во 2-й
// Он не может находиться в двух местах одновременно
// document.querySelector('.out-1').append(p)
// document.querySelector('.out-2').append(p)

// метод after помещает элемент после искомого
// document.querySelector('.out-1').after(p)

// метод before помещает элемент до искомого
// document.querySelector('.out-1').after(p)

// у нас есть текстовый узел внутри .out-1 = 'Text1' метод append помещает наш параграф после этого текстового узла 
document.querySelector('.out-1').append(p)

// а метод prepend помещает наш параграф перед этим текстовым узлом 
document.querySelector('.out-2').prepend(p)

const img = document.createElement('img')
img.src = './images/harconen.png'
img.alt = 'harconen'
console.log(img);

p.after(img)

const inp = document.createElement('input')
inp.oninput = t1
inp.type = 'text'
document.querySelector('.out-1').append(inp)
console.log(inp);
inp.value = 'hello '

function t1() {
    console.log(inp.value);
}