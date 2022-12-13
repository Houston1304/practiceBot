const listCard = [
  {
    name: "Коробка для медицинских центров",
    price: 3000,
  },
  {
    name: "Коробка для банков",
    price: 3500,
  },
  {
    name: "Коробка для лидогенерации и коллцентров",
    price: 3900,
  },
  {
    name: "Коробка для салонов красоты",
    price: 1800,
  },
  {
    name: "Коробка для интернет-магазинов",
    price: 2500,
  },
  {
    name: "Коробка для фитнес центров",
    price: 2500,
  },
  {
    name: "Коробка для ЖКХ и УК",
    price: 1500,
  },
  {
    name: "Коробка для автобизнеса",
    price: 2600,
  },
  {
    name: "Коробка для логистики(доставка)",
    price: 2600,
  },
  {
    name: "Пакет-фильтр базы",
    price: 1800,
  },
  {
    name: "Коробка для EVENT-агентств",
    price: 2700,
  },
  {
    name: "Коробка для онлайн-школ",
    price: 2700,
  },
];

const basket = [
  {
    name: "Коробка для медицинских центров",
    num: 0,
  },
  {
    name: "Коробка для банков",
    num: 0,
  },
  {
    name: "Коробка для лидогенерации и коллцентров",
    num: 0,
  },
  {
    name: "Коробка для салонов красоты",
    num: 0,
  },
  {
    name: "Коробка для интернет-магазинов",
    num: 0,
  },
  {
    name: "Коробка для фитнес центров",
    num: 0,
  },
  {
    name: "Коробка для ЖКХ и УК",
    num: 0,
  },
  {
    name: "Коробка для автобизнеса",
    num: 0,
  },
  {
    name: "Коробка для логистики(доставка)",
    num: 0,
  },
  {
    name: "Пакет-фильтр базы",
    num: 0,
  },
  {
    name: "Коробка для EVENT-агентств",
    num: 0,
  },
  {
    name: "Коробка для онлайн-школ",
    num: 0,
  },
];

const mainBox = document.querySelector(".mainBox");
count = 1;
for (let card of listCard) {
  const imageBox = document.createElement("img");
  if (count === 1) {
    imageBox.src = "./box-001-ortiizib2wmf6w5qnsgd9m4qig8wyqvs09yom4k2co.png";
    count++;
  } else if (count === 2) {
    imageBox.src = "./box-002-ortikcdwyahbym6qqdkyv9spehk0309tizvxkijld4.png";
    count++;
  } else if (count === 3) {
    imageBox.src = "./box-003-ortiky07bhaxdnbc84xdymcb2clg01nn9yw3lvnje0.png";
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

    buttonCheckout.addEventListener("click", () => {
      window.location.href = "basket.html";
    });

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
        }});
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
