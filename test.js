import { listCard, hotOffer, checkList, telCheck } from "./array.js";

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function validatePhone(phone) {
  let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  return regex.test(phone);
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
  order.addEventListener("click", () => {
    form(card);
  });
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
  if (document.querySelector(".mainBox")) {
    const mainDescription = document.querySelector(".mainBox");
    mainDescription.remove();
  }

  const mainBox = document.createElement("div");
  mainBox.className = "mainBox";

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
}

function form(card) {
  const mainDescription = document.querySelector(".mainBox");
  mainDescription.remove();
  const mainBox = document.createElement("div");
  mainBox.className = "mainBox main-description";

  const boxButton = document.createElement("div");
  boxButton.className = "box-button";
  const backButton = document.createElement("button");
  backButton.className = "back";
  backButton.textContent = "Вернуться";
  backButton.addEventListener("click", () => {
    description(card);
  });
  const checkout = document.createElement("div");
  checkout.className = "checkout";
  checkout.textContent = "Оформить";
  boxButton.append(backButton, checkout);

  const form = document.createElement("form");

  const companyForm = document.createElement("div");
  companyForm.className = "form-div";
  const companyDescription = document.createElement("p");
  companyDescription.textContent = "Название компании";
  const company = document.createElement("input");
  company.className = "form-input";
  companyForm.append(companyDescription, company);

  const phoneNumberForm = document.createElement("div");
  phoneNumberForm.className = "form-div";
  const phoneNumberDescription = document.createElement("p");
  phoneNumberDescription.textContent = "Номер телефона";
  const phoneNumber = document.createElement("input");
  phoneNumber.type = "text";
  phoneNumber.maxLength = 17;
  phoneNumber.className = "form-input";
  phoneNumberForm.append(phoneNumberDescription, phoneNumber);

  phoneNumber.value = "+";

  let old = 0;
  phoneNumber.onkeydown = function () {
    let curLen = phoneNumber.value.length;

    if (curLen < old) {
      old--;
      return;
    }

    if (curLen == 2)
      phoneNumber.value = phoneNumber.value + "(";
    if (curLen == 6)
      phoneNumber.value = phoneNumber.value + ")-";
    if (curLen == 7)
      phoneNumber.value = phoneNumber.value + "-";
    if (curLen == 11)
      phoneNumber.value = phoneNumber.value + "-";
    if (curLen == 14)
      phoneNumber.value = phoneNumber.value + "-";

    old++;
  }

  phoneNumber.addEventListener('keydown', function (event) {
    // Разрешаем: backspace, delete, tab и escape
    if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
      // Разрешаем: Ctrl+A
      (event.keyCode == 65 && event.ctrlKey === true) ||
      // Разрешаем: home, end, влево, вправо
      (event.keyCode >= 35 && event.keyCode <= 39)) {

      // Ничего не делаем
      return;
    } else {
      // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
      if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
        event.preventDefault();
      }
    }
  });

  const nameForm = document.createElement("div");
  nameForm.className = "form-div";
  const nameDescription = document.createElement("p");
  nameDescription.textContent = "Ваше Имя";
  const name = document.createElement("input");
  name.type = "text";
  name.className = "form-input";
  nameForm.append(nameDescription, name);

  const emailForm = document.createElement("div");
  emailForm.className = "form-div";
  const emailDescription = document.createElement("p");
  emailDescription.textContent = "Ваш Е-mail";
  const email = document.createElement("input");
  email.type = "email";
  email.className = "form-input";
  emailForm.append(emailDescription, email);

  const robotTypeForm = document.createElement("div");
  robotTypeForm.className = "form-div";
  const robotTypeDescription = document.createElement("p");
  robotTypeDescription.textContent = "Какой тип робота вам нужен?";
  const robotType = document.createElement("select");
  robotType.className = "form-input";
  for (let checkbox of checkList) {
    const optionCheck = document.createElement("option");
    optionCheck.textContent = checkbox;
    robotType.append(optionCheck);
  }
  robotTypeForm.append(robotTypeDescription, robotType);



  const numberOfPhonesForm = document.createElement("div");
  numberOfPhonesForm.className = "form-div";
  const numberOfPhonesDescription = document.createElement("p");
  numberOfPhonesDescription.textContent = "Напишите планируемое количество  номеров для загрузки в день";
  const numberOfPhones = document.createElement("input");
  numberOfPhones.type = "number";
  numberOfPhones.className = "form-input";
  numberOfPhonesForm.append(numberOfPhonesDescription, numberOfPhones);

  const telephonyForm = document.createElement("div");
  telephonyForm.className = "form-div";
  const telephonyDescription = document.createElement("p");
  telephonyDescription.textContent = "Своя телефония или нет?";
  const telephony = document.createElement("select");
  telephony.className = "form-input";
  for (let tel of telCheck) {
    const telLabel = document.createElement("option");
    telLabel.textContent = tel;
    telephony.append(telLabel);
  }
  telephonyForm.append(telephonyDescription, telephony);

  form.append(boxButton, companyForm, phoneNumberForm, nameForm, emailForm, robotTypeForm, numberOfPhonesForm, telephonyForm);
  mainBox.append(form);
  document.body.append(mainBox);

}
main();
