import { listCard, hotOffer } from "./array.js";

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function description(card) {
  const mainBox = document.querySelector(".mainBox");
  mainBox.remove();

  const mainDescription = document.createElement("div");
  mainDescription.className = "mainBox main-description";

  const boxButton = document.createElement("div");
  boxButton.className = "box-button";
  const backButton = document.createElement("button");
  backButton.className = "back";
  backButton.textContent = "Вернуться";
  backButton.addEventListener("click", () => {
    main();
  });
  const order = document.createElement("button");
  order.className = "order";
  order.textContent = "Заказать";
  boxButton.append(backButton, order);
  mainDescription.append(boxButton);

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
  mainDescription.append(box);
  document.body.append(mainDescription);
}

function hotOff(card) {
  const mainBox = document.querySelector(".mainBox");
  mainBox.remove();

  const mainDescription = document.createElement("div");
  mainDescription.className = "mainBox main-description";

  const boxButton = document.createElement("div");
  boxButton.className = "box-button";
  const backButton = document.createElement("button");
  backButton.className = "back";
  backButton.textContent = "Вернуться";
  backButton.addEventListener("click", () => {
    main();
  });
  boxButton.append(backButton);
  mainDescription.append(boxButton);

  const box = document.createElement("div");
  box.className = "box";

  const nameCard = document.createElement("p");
  nameCard.className = "headline";
  nameCard.textContent = card.name;

  const mainInfo = document.createElement("p");
  mainInfo.textContent = card.mainInfo;

  const secondaryInfo = document.createElement("p");
  secondaryInfo.textContent = card.secondaryInfo;

  const freePeriod = document.createElement("p");
  freePeriod.textContent = card.freePeriod;

  const premiumTitle = document.createElement("p");
  premiumTitle.textContent = card.premiumTitle;

  const list = document.createElement("ul");
  for (const elem of card.premiumInfo) {
    const elementList = document.createElement("li");
    elementList.textContent = ucFirst(elem);
    list.append(elementList);
  }

  box.append(nameCard, mainInfo, secondaryInfo, freePeriod, premiumTitle, list);
  mainDescription.append(box);
  document.body.append(mainDescription);
}

function main() {
  if (document.querySelector(".main-description")) {
    const mainDescription = document.querySelector(".main-description");
    mainDescription.remove();
  }

  const mainBox = document.createElement("div");
  mainBox.className = "mainBox";

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
    if (card.actual) {
      const nook = document.createElement("div");
      nook.className = "nook";
      const actual = document.createElement("div");
      actual.className = "actual";
      actual.textContent = "актуально";
      nook.append(actual);
      div.append(nook);
    }
    if (card.hot) {
      const hot = document.createElement("div");
      hot.className = "hot";
      hot.textContent = "HOT";
      div.append(hot);
    }

    const pName = document.createElement("p");
    pName.className = "headline";
    pName.textContent = card.name;

    const pPrice = document.createElement("p");
    pPrice.className = "p-price";
    if (card.price !== 0) {
      pPrice.textContent = "от " + card.price + "₽ в месяц";
    }

    const button = document.createElement("button");
    button.className = "button";
    button.textContent = "Что внутри?";
    button.addEventListener("click", () => {
      description(card);
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
    button.className = "button";
    button.textContent = "Подробнее";
    button.addEventListener("click", () => {
      hotOff(card);
    });

    div.append(imageBox, pName, button);
    mainBox.append(div);
    document.body.append(mainBox);
  }
}
main();
