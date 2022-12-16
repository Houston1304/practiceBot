import { listCard } from "./array.js";

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const q = parseInt(params.get("q"));

const mainBox = document.querySelector(".mainBox");
const boxButton = document.createElement("div");
boxButton.className = "box-button";
const backButton = document.createElement("button");
backButton.className = "back";
backButton.textContent = "Вернуться";
backButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
const order = document.createElement("button");
order.className = "order";
order.textContent = "Заказать";
boxButton.append(backButton, order);
mainBox.append(boxButton);

for (let card of listCard) {
  if (card.id === q) {
    const box = document.createElement("div");
    box.className = "box";
    const nameCard = document.createElement("p");
    nameCard.className = "headline";
    nameCard.textContent = card.name;
    const description = document.createElement("p");
    description.textContent = card.description;
    const list = document.createElement("ul");
    for (const elem of card.list) {
      const elementList = document.createElement("li");
      elementList.textContent = ucFirst(elem);
      list.append(elementList);
    }
    const price = document.createElement("p");
    price.classList = "price";
    price.textContent = card.priceFull;
    const connection = document.createElement("p");
    connection.className = "connection";
    if (card.connection === "individ" && card.integration === "individ") {
      connection.textContent =
        "Подключение и интеграции обсуждаются индивидуально!";
    } else if (card.connection === "free") {
      if (card.integration === "absence") {
        connection.textContent = "Подключение БЕСПЛАТНО!";
      } else if (card.integration === "false") {
        connection.textContent = "Подключение без интеграции с CRM БЕСПЛАТНО!";
      } else if (card.integration === "individ") {
        connection.textContent =
          "ПОДКЛЮЧЕНИЕ БЕСПЛАТНО! Интеграции обсуждаются индивидуально.";
      }
    } else if (card.connection === "freeStorage") {
      connection.textContent =
        "ПОДКЛЮЧЕНИЕ + Запись разговоров – 10Гб - БЕСПЛАТНО!";
    }
    box.append(nameCard, description, list, price, connection);
    if (card.addition.length > 0) {
      const additionList = document.createElement("aside");
      const blockquote = document.createElement("blockquote");
      for (const add of card.addition) {
        const addition = document.createElement("p");
        addition.textContent = add;
        additionList.append(addition);
      }
      box.append(blockquote, additionList);
    }
    mainBox.append(box);
  }
}
