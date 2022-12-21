import { listCard, hotOffer, checkList, telCheck } from "./array.js";

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function validatePhone(phone) {
  let regex =
    /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  return regex.test(phone);
}

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
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

  const divSelf = document.createElement("div");
  divSelf.className = "div-self";
  const notSuitable = document.createElement("p");
  notSuitable.className = "pSuit";
  notSuitable.textContent = "Робот в коробке не подходит?";

  const selfRobot = document.createElement("button");
  selfRobot.className = "selfRobo";
  selfRobot.textContent = "Создай своего робота";
  selfRobot.addEventListener("click", () => {
    form(0);
  });
  divSelf.append(notSuitable, selfRobot);
  mainBox.append(divSelf);
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
  if (card === 0) {
    backButton.addEventListener("click", () => {
      main();
    });
  } else {
    backButton.addEventListener("click", () => {
      description(card);
    });
  }
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
  phoneNumber.className = "form-input";
  phoneNumber.id = "tel";
  phoneNumber.addEventListener("input", mask, false);
  phoneNumber.addEventListener("focus", mask, false);
  phoneNumber.addEventListener("blur", mask, false);
  phoneNumberForm.append(phoneNumberDescription, phoneNumber);

  const nameForm = document.createElement("div");
  nameForm.className = "form-div";
  const nameDescription = document.createElement("p");
  nameDescription.textContent = "Ваше Имя";
  const name = document.createElement("input");
  name.type = "text";
  name.className = "form-input";
  nameForm.append(nameDescription, name);

  name.addEventListener("keydown", (e) => {
    if (e.key.match(/[0-9]/)) return e.preventDefault();
  });

  const emailForm = document.createElement("div");
  emailForm.className = "form-div";
  const emailDescription = document.createElement("p");
  emailDescription.textContent = "Ваш Е-mail";
  const email = document.createElement("input");
  email.type = "email";
  email.className = "form-input";
  emailForm.append(emailDescription, email);

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

  form.append(
    boxButton,
    companyForm,
    phoneNumberForm,
    nameForm,
    emailForm,
    telephonyForm
  );
  if (card === 0) {
    const robotTypeForm = document.createElement("div");
    robotTypeForm.className = "form-div";
    const robotTypeDescription = document.createElement("p");
    robotTypeDescription.textContent = "Какой тип робота вам нужен?";
    const robotType = document.createElement("select");
    robotType.className = "form-input";
    robotType.id = "robotSelect";
    for (let checkbox of checkList) {
      const optionCheck = document.createElement("option");
      optionCheck.textContent = checkbox;
      robotType.append(optionCheck);
    }
    robotTypeForm.append(robotTypeDescription, robotType);
    form.append(robotTypeForm);
  } else {
    const numberOfPhonesForm = document.createElement("div");
    numberOfPhonesForm.className = "form-div";
    const numberOfPhonesDescription = document.createElement("p");
    numberOfPhonesDescription.textContent =
      "Напишите планируемое количество  номеров для загрузки в день";
    const numberOfPhones = document.createElement("input");
    numberOfPhones.type = "number";
    numberOfPhones.className = "form-input";
    numberOfPhones.addEventListener("keydown", function (event) {
      if (
        event.keyCode == 46 ||
        event.keyCode == 8 ||
        event.keyCode == 9 ||
        event.keyCode == 27 ||
        (event.keyCode == 65 && event.ctrlKey === true) ||
        (event.keyCode >= 35 && event.keyCode <= 39)
      ) {
        return;
      } else {
        if (
          (event.keyCode < 48 || event.keyCode > 57) &&
          (event.keyCode < 96 || event.keyCode > 105)
        ) {
          event.preventDefault();
        }
      }
    });

    numberOfPhonesForm.append(numberOfPhonesDescription, numberOfPhones);
    form.append(numberOfPhonesForm);

    const CRMForm = document.createElement("div");
    CRMForm.className = "form-div";
    const CRMDescription = document.createElement("p");
    CRMDescription.textContent = "Напишите название CRM, если нужна интеграция";
    const CRMName = document.createElement("input");
    CRMName.className = "form-input";

    CRMForm.append(CRMDescription, CRMName);
    form.append(CRMForm);
    checkout.addEventListener("click", () => {
      if (document.getElementById("numberOfErr")) {
        const numberOfErr = document.getElementById("numberOfErr");
        numberOfErr.remove()
      }
      if (!/\S/.test(numberOfPhones.value)) {
        const numberOfErr = document.createElement("p");
        numberOfErr.className = "error";
        numberOfErr.id = "numberOfErr";
        numberOfErr.textContent = "Введите количество номеров!";
        numberOfPhonesForm.append(numberOfErr);
      }
    });
  }
  mainBox.append(form);
  document.body.append(mainBox);
  checkout.addEventListener("click", () => {

    if (document.getElementById("companyErr")) {
      const companyErr = document.getElementById("companyErr")
      companyErr.remove()
    }

    if (document.getElementById("phoneNumberErr")) {
      const phoneNumberErr = document.getElementById("phoneNumberErr")
      phoneNumberErr.remove()
    }


    if (document.getElementById("emailErr")) {
      const emailErr = document.getElementById("emailErr")
      emailErr.remove()
    }

    if (document.getElementById("nameErr")) {
      const nameErr = document.getElementById("nameErr")
      nameErr.remove()
    }

    if (!/\S/.test(company.value)) {
      const companyErr = document.createElement("p");
      companyErr.className = "error";
      companyErr.id = "companyErr"
      companyErr.textContent = "Введите название компании!";
      companyForm.append(companyErr);
    }
    if (!validatePhone(phoneNumber.value)) {
      const phoneErr = document.createElement("p");
      phoneErr.className = "error";
      phoneErr.id = "phoneNumberErr"
      phoneErr.textContent = "Введите корректный номер!";
      phoneNumberForm.append(phoneErr);
    }
    if (!validateEmail(email.value) || !/\S/.test(email.value)) {
      const emailErr = document.createElement("p");
      emailErr.className = "error";
      emailErr.id = "emailErr"
      emailErr.textContent = "Введите корректный адрес!";
      emailForm.append(emailErr);
    }
    if (!/\S/.test(name.value)) {
      const nameErr = document.createElement("p");
      nameErr.className = "error";
      nameErr.id = "nameErr";
      nameErr.textContent = "Введите ваше Имя!";
      nameForm.append(nameErr);
    }
    if (/\S/.test(company.value) && /\S/.test(name.value) && (validateEmail(email.value) || /\S/.test(email.value)) && validatePhone(phoneNumber.value)) {
      alert(
        `${name.value}, спасибо! Сценаристы Бот N. свяжутся с Вами, возможно зададут ещё вопросов и предложат демо»`
      );
    }
  });
}

main();

function mask(event) {
  let matrix = "+7 (___)-___-__-__",
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
  if (def.length >= val.length) val = def;
  this.value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
  });
  if (event.type == "blur") {
    if (this.value.length == 2) this.value = ""
  } else setCursorPosition(this.value.length, this)
};

function setCursorPosition(pos, elem) {
  elem.focus();
  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
  else if (elem.createTextRange) {
    var range = elem.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select()
  }
};
