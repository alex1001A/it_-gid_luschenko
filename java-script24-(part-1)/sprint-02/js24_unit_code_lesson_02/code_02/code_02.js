console.log(document.getElementById('one').textContent = 'Hello')
console.log(document.getElementById('two').textContent = 'Hi')
two.textContent = 'Abba'

// не смотря на то, что <p> с классом "text-block" у нас 2, примениться функция только к первому
document.querySelector('.text-block').innerHTML = 'Class'

document.querySelector('span').textContent = 'span'

// Можно создавать вложенность как и в CSS, для более гибкого управления элементами страницы
document.querySelector('.text-block > span').textContent = 'span'

// То есть все, что работает в CSS работае и тут и в общем-то нет необходимости обращаться к методу "getElementById"
document.querySelector('#one').textContent = 'ID one'

// Т.к. JS динамически типизируемый, то нет необходимости оборачивать числа в кавычки чтобы получить строку, ну и вычисления так же хорошо работают
document.querySelector('#one').textContent = 8 + 8

// Разница в том, что innerHTML переформатирует тег в ТЕГ (жирный)? или картинку, в общем интерпритируется как обычная верстка, а textContent оставит его просто текстом
document.querySelector('#one').innerHTML = '<b>bold</b>'
document.querySelector('#two').textContent = '<b>bold</b>'
document.querySelector('.img-block').innerHTML = '<img src="https://cakeshop.com.ua/images/2a6OCM1_WwEvlZpOb1gfU0I7xjuN8nvAlEq5yWs_E9Y/w:1000/bG9jYWw/6Ly8vY2FrZXNob3AuY29tLnVhL3B1YmxpY19odG1sL3N0b3JhZ2UvYXBwL3B1YmxpYy9pbWcvcHJvZHVjdC8yNzM5XzEuanBn">'
document.querySelector('.img-block').innerHTML = '<img src="./images/leaf.png">'

// Экранирование кавычек помогает "не разрывать строку", а дает понять JS что мы еще не закончили команду
document.querySelector('.img-block').innerHTML = '<img src=\'./images/tree.png\'>'

// ссылка на объект типа Element соответствующий указанному ID или null, если элемент с указанным ID не найден в документе.
// Всё это вернет null!
document.querySeLector('.img-block').innerHTML = '<img src=\'./images/tree.png\'>'
document.querySeLector('.Img-block').innerHTML = '<img src=\'./images/tree.png\'>'
document.querySeLector('img-block').innerHTML = '<img src=\'./images/tree.png\'>'
document.querySeLector('img-block').InnerHTML = '<img src=\'./images/tree.png\'>'