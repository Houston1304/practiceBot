import { listCard, basket } from "./array";

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
  const pName = document.createElement("p");
  const pPrice = document.createElement("p");
  const button = document.createElement("button");

  div.className = "card";
  pName.textContent = card.name;
  pPrice.textContent = "Стоимость ежемесячного платежа от " + card.price + "₽";
  button.textContent = "Добавить";
  button.addEventListener("click", () => {
    button.remove();
    const counter = document.createElement("div");
    const buttonPlus = document.createElement("button");
    const pCount = document.createElement("p");
    const buttonMinus = document.createElement("button");

    const buttonCheckout = document.createElement("button");
    buttonCheckout.className = "checkout";
    buttonCheckout.textContent = "Оформить заказ";

    buttonPlus.addEventListener("click", () => {
      basket.map((elem) => {
        if (elem.name === card.name) {
          elem.num += 1;
          pCount.textContent = elem.num;
        }
      });
    });
    buttonMinus.addEventListener("click", () => {
      basket.map((elem) => {
        if (elem.name === card.name) {
          elem.num -= 1;
          if (elem.num !== 0) {
            pCount.textContent = elem.num;
          } else {
            counter.remove();
            div.append(button);
            if (elem.num > 0) {
              elem.num -= 1;
              pCount.textContent = elem.num;
            }
          }
        }
      });
    });

    buttonPlus.textContent = "+";
    buttonMinus.textContent = "-";
    basket.map((elem) => {
      if (elem.name === card.name) {
        elem.num += 1;
        pCount.textContent = elem.num;
      }
    });
    counter.className = "counter";
    counter.append(buttonMinus, pCount, buttonPlus);
    div.append(counter);
    mainBox.append(buttonCheckout);
  });

  div.append(imageBox, pName, pPrice, button);
  mainBox.append(div);
}
