let basket = [
  {
    idProduct: "medCard",
    num: 0,
  },
  {
    idProduct: "bankCard",
    num: 0,
  },
  {
    idProduct: "callCard",
    num: 0,
  },
  {
    idProduct: "saloonCard",
    num: 0,
  },
  {
    idProduct: "shopCard",
    num: 0,
  },
  {
    idProduct: "fitnessCard",
    num: 0,
  },
  {
    idProduct: "communalCard",
    num: 0,
  },
  {
    idProduct: "autoCard",
    num: 0,
  },
  {
    idProduct: "logisticCard",
    num: 0,
  },
  {
    idProduct: "baseCard",
    num: 0,
  },
  {
    idProduct: "eventCard",
    num: 0,
  },
  {
    idProduct: "schoolCard",
    num: 0,
  },
];

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("buttonPlus")) {
    const count = e.target.closest(".card").querySelector(".count");
    const idProduct = e.target.parentNode.id;
    basket.map((elem) => {
      if (elem.idProduct === idProduct) {
        elem.num += 1;
        count.textContent = elem.num;
      }
    });
  }
  if (e.target.classList.contains("buttonMinus")) {
    const count = e.target.closest(".card").querySelector(".count");
    const idProduct = e.target.parentNode.id;
    basket.map((elem) => {
      if (elem.idProduct === idProduct) {
        if (elem.num > 0) {
          elem.num -= 1;
          count.textContent = elem.num;
        }
      }
    });
  }

  console.log(basket);
});
