const listCard = [
  {
    name: `Коробка для медицинских центров`,
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

sum = 0; 

const backButton = document.getElementById("backBtn")

backButton.addEventListener("click", ()=>{
  window.location.href = "index.html";
})

for (let card of listCard) {
  const mainBasket = document.querySelector(".mainBasket");

  const totalPrice = document.querySelector(".totalPrice");
  totalPrice.textContent = card.num;

  const div = document.createElement("div");
  const pName = document.createElement("p");
  pName.id = "productName";

  const pPrice = document.createElement("p");
  pPrice.id = "productPrice";

  const pAmount = document.createElement("p");
  pAmount.id = "productAmount";
  pAmount.textContent = 0;

  div.className = "product";
  pName.textContent = card.name;
  pPrice.textContent = card.price;

  const buttonPlus = document.createElement("button");
  buttonPlus.id = "plusBtn";
  const buttonMinus = document.createElement("button");
  buttonMinus.id = "minusBtn";

  buttonPlus.addEventListener("click", () => {
    basket.map((elem) => {
      if (elem.name === card.name) {
        elem.num += 1;
        pAmount.textContent = elem.num;
        sum += card.price;
        totalPrice.textContent = sum;
      }
    });
  });
  buttonMinus.addEventListener("click", () => {
    basket.map((elem) => {
      if (elem.name === card.name) {
        if (elem.num > 0) {
          sum -= card.price;
          totalPrice.textContent = sum;
          elem.num -= 1;
          pAmount.textContent = elem.num;
        }
      }
    });
  });
  pPrice.textContent = card.price;
  buttonPlus.textContent = "+";
  buttonMinus.textContent = "-";

  
  div.append(pName, pPrice, buttonPlus, pAmount, buttonMinus);
  mainBasket.append(div);
}
