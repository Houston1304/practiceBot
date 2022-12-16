import { listCard } from "./array.js";
import { hotOffer } from "./hotOfferArray.js";

const mainBox = document.querySelector(".mainBox");
let count = 1;
for (let card of listCard) {
  const imageBox = document.createElement("img");
  if (count === 1) {
    imageBox.src =
      "https://www.anncom.ru/wp-content/uploads/elementor/thumbs/box-001-ortiizib2wmf6w5qnsgd9m4qig8wyqvs09yom4k2co.png";
    count++;
  } else if (count === 2) {
    imageBox.src =
      "https://www.anncom.ru/wp-content/uploads/elementor/thumbs/box-002-ortikcdwyahbym6qqdkyv9spehk0309tizvxkijld4.png";
    count++;
  } else if (count === 3) {
    imageBox.src =
      "https://www.anncom.ru/wp-content/uploads/elementor/thumbs/box-003-ortiky07bhaxdnbc84xdymcb2clg01nn9yw3lvnje0.png";
    count = 1;
  }

  const div = document.createElement("div");
  div.className = "card";

  const pName = document.createElement("p");
  pName.className = "headline";
  pName.textContent = card.name;

  const pPrice = document.createElement("p");
  pPrice.textContent = "от " + card.price + "₽ в месяц";

  const button = document.createElement("button");
  button.textContent = "Что внутри?";
  button.addEventListener("click", () => {
    window.location.href = "description.html" + "?q=" + card.id;
  });

  div.append(imageBox, pName, pPrice, button);
  mainBox.append(div);
}

for (let card of hotOffer) {
  const div = document.createElement("div");
  div.className = "card";

  const pName = document.createElement("p");
  pName.className = "headline";
  pName.textContent = card.name;

  const imageBox = document.createElement("img");
  imageBox.src =
    "https://darth-shop.ru/modules/TwoAsOne/Content/Images/fire.png";

  const button = document.createElement("button");
  button.textContent = "Подробнее";
  button.addEventListener("click", () => {
    window.location.href = "description.html" + "?q=" + card.id;
  });

  div.append(imageBox, pName, button);
  mainBox.append(div);
}
