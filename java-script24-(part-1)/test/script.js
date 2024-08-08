const login = prompt("type your login...", '');

if (login === "Admin") {
  const password = prompt("type your password...", '');
  if (password === "Lord") {
    alert("Ласкаво просимо!");
  } else if (password === "" || password === null) {
    alert("Скасовано! Введіть пароль");
  } else {
    alert("Неправильний пароль");
  }
} else if (login === "" || login === null) {
  alert("Скасовано");
} else {
  alert("Я вас не знаю");
}
