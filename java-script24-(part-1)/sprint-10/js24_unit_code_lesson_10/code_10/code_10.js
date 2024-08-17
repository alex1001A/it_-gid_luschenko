const p1 = document.querySelector(".p-1");
console.log(p1);

// Получения атрибута
console.log(p1.getAttribute("class"));
console.log(p1.getAttribute("id"));
console.log(p1.getAttribute("name"));
console.log(p1.id);
const catImg = document.querySelector("img");
console.log(catImg.getAttribute("src"));
console.log(catImg.src);

// Изменение атрибутов
catImg.src = "./images/dog.png";
catImg.setAttribute("src", "images/witch.png"); // первый параметр - атрибут, второй - его новое значение, похожая система и в jQuery (parameter name, new parametr value)

p1.id = "two";
p1.setAttribute("id", "three");

const checkbox = document.querySelector('[type="checkbox"]');
console.log(checkbox);
// checkbox.checked = true
checkbox.setAttribute("checked", true);

const link = document.querySelector(".link");
console.log(link);
link.href = "https://google.com";
link.setAttribute = ("target", "blank");

catImg.removeAttribute("src");

const button1 = document.querySelector(".add-button-1");
console.log(button1);
let a = button1.getAttributeNode("data-user-session");

// console.log(button.getAttribute('data-articule'));
console.log(button1.dataset);
console.log(button1.dataset.articule);
console.log(button1.dataset.userSession);

const button2 = document.querySelector(".add-button-2");
button2.setAttributeNode(a.cloneNode(true));
console.log(button2);
