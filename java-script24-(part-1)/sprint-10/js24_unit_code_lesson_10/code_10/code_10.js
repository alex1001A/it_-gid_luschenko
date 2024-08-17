const p1 = document.querySelector('.p-1')
console.log(p1);

// Получения атрибута
console.log(p1.getAttribute('class'))
console.log(p1.getAttribute('id'))
console.log(p1.getAttribute('name'))
console.log(p1.id)
const catImg = document.querySelector('img')
console.log(catImg.getAttribute('src'))
console.log(catImg.src)

// Изменение атрибутов
catImg.src = './images/dog.png'
catImg.setAttribute('src', 'images/witch.png') // первый параметр - атрибут, второй - его новое значение, похожая система и в jQuery (parameter name, new parametr value)

p1.id = 'two'
p1.setAttribute('id','three')

const checkbox = document.querySelector('[type="checkbox"]')
console.log(checkbox);
// checkbox.checked = true
checkbox.setAttribute('checked', true)

const link = document.querySelector('.link')
console.log(link);
link.href = 'https://google.com'
link.setAttribute = ('target', 'blank')

catImg.removeAttribute('src')

const button = document.querySelector('.add-button')
console.log(button);
// console.log(button.getAttribute('data-articule'));
console.log(button.dataset);
console.log(button.dataset.articule);
console.log(button.dataset.userSession);
