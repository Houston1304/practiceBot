import {
  listCard,
  hotOffer,
  checkList,
  telCheck,
  replyList,
  scriptList,
} from "./array.js";

const subscribers = {
  box: "",
  company: "",
  phoneNumber: "",
  name: "",
  email: "",
  telephony: "",
  robotType: "",
  numberOfPhones: "",
  CRMName: "",
  CMS: "",
  answer: "",
  scenario: "",
  sending: "",
};

let tg = window.Telegram.WebApp;

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
// описание коробок
function description(card) {
  const mainBox = document.querySelector(".mainBox");
  mainBox.remove();

  const mainDescription = document.createElement("div");
  mainDescription.className = "mainBox main-description";

  const boxButtonBack = document.createElement("div");
  boxButtonBack.className = "box-button";
  const backButton = document.createElement("button");
  backButton.className = "back";
  backButton.textContent = "Вернуться";
  backButton.addEventListener("click", () => {
    main();
  });

  const roboImageBox = document.createElement("div");
  roboImageBox.className = "roboImgBox";
  const roboImage = document.createElement("img");
  roboImage.src = "WQkg7C0g-2A.png";
  roboImage.className = "roboImg";
  roboImageBox.append(roboImage);

  boxButtonBack.append(backButton);
  mainDescription.append(boxButtonBack);

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
  box.append(roboImageBox);

  const boxButtonOrder = document.createElement("div");
  boxButtonOrder.className = "box-button right";
  const order = document.createElement("button");
  order.className = "order";
  order.textContent = "Заказать";
  order.addEventListener("click", () => {
    form(card);
  });
  boxButtonOrder.append(order);
  mainDescription.append(box, boxButtonOrder);
  document.body.append(mainDescription);
}
// описание горячее предложение
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
// главная страница
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

  const imageRobot = document.createElement("img");
  imageRobot.className = "img-robot";
  imageRobot.src = "робот рука вверхПлащ.png";

  const selfRobot = document.createElement("button");
  selfRobot.className = "selfRobo";
  selfRobot.textContent = "Создай своего робота";
  selfRobot.addEventListener("click", () => {
    form(0);
  });
  divSelf.append(notSuitable, imageRobot, selfRobot);
  mainBox.append(divSelf);
}
// квиз
function form(card) {
  tg.expand();
  tg.MainButton.text = "Отправить запрос";
  tg.MainButton.setParams({ color: '#8B00FF' });
  tg.MainButton.show();
  tg.MainButton.enable();
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
  boxButton.append(backButton);

  const boxButtonCheckout = document.createElement("div");
  boxButtonCheckout.className = "box-button right";
  const checkout = document.createElement("input");
  checkout.className = "order";
  checkout.type = "submit";
  checkout.textContent = "Оформить";
  boxButtonCheckout.append(checkout);

  const form = document.createElement("form");
  form.className = "form";
  form.method = "GET";

  const companyForm = document.createElement("div");
  companyForm.className = "form-div";
  const companyDescription = document.createElement("p");
  companyDescription.textContent = "Название компании";
  const company = document.createElement("input");
  company.placeholder = "Введите название вашей компании";
  company.className = "form-input";
  companyForm.append(companyDescription, company);

  const phoneNumberForm = document.createElement("div");
  phoneNumberForm.className = "form-div";
  const phoneNumberDescription = document.createElement("p");
  phoneNumberDescription.textContent = "Номер телефона";
  const phoneNumber = document.createElement("input");
  phoneNumber.placeholder = "+7 (999)-999-99-99";
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
  name.placeholder = "Введите ваше имя";
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
  email.placeholder = "Введите вашу почту";
  email.type = "email";
  email.className = "form-input";
  emailForm.append(emailDescription, email);

  const telephonyForm = document.createElement("div");
  telephonyForm.className = "form-div";
  const telephonyDescription = document.createElement("p");
  telephonyDescription.textContent =
    "Роботу нужна исходящая связь и номера. Напишите, что подключаем?";
  const telephony = document.createElement("select");
  telephony.id = "telephony";
  telephony.className = "form-input";
  if (card.name === "Пакет-фильтр базы") {
    telCheck.push("нужен комплекс услуг");
  }
  for (let tel of telCheck) {
    const telLabel = document.createElement("option");
    telLabel.textContent = ucFirst(tel);
    telephony.append(telLabel);
  }
  telephonyForm.append(telephonyDescription, telephony);

  form.append(companyForm, phoneNumberForm, nameForm, emailForm, telephonyForm);

  const CRMForm = document.createElement("div");
  CRMForm.className = "form-div";
  const CRMDescription = document.createElement("p");
  CRMDescription.textContent = "CRM-система";
  const CRMName = document.createElement("input");
  CRMName.placeholder = "Напишите название CRM, если нужна интеграция";
  CRMName.className = "form-input";

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

  const numberOfPhonesForm = document.createElement("div");
  numberOfPhonesForm.className = "form-div";
  const numberOfPhonesDescription = document.createElement("p");
  numberOfPhonesDescription.textContent =
    "Планируемое количество номеров для загрузки в день";
  const numberOfPhones = document.createElement("input");
  numberOfPhones.placeholder =
    "Напишите планируемое количество номеров для загрузки в день";
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

  const CMSForm = document.createElement("div");
  CMSForm.className = "form-div checkbox";
  const CMSChecbox = document.createElement("input");
  CMSChecbox.type = "checkbox";
  CMSChecbox.id = "CMS";
  const CMSLabel = document.createElement("label");
  CMSChecbox.for = "CMS";
  CMSLabel.textContent = "Нужна связка с CMS(с сайтом)";

  const replyForm = document.createElement("div");
  replyForm.className = "form-div";
  const replyDescription = document.createElement("p");
  replyDescription.textContent = "После сообщения, ваш Лид должен:";
  const replySelect = document.createElement("select");
  replySelect.id = "replySelect"
  replySelect.className = "form-input";
  for (let reply of replyList) {
    const replyCheck = document.createElement("option");
    replyCheck.textContent = reply;
    replySelect.append(replyCheck);
  }

  const scriptForm = document.createElement("div");
  scriptForm.className = "form-div";
  const scriptDescription = document.createElement("p");
  scriptDescription.textContent = "Выберете более подходящий сценарий:";
  const scriptSelect = document.createElement("select");
  scriptSelect.id = "scriptSelect";
  scriptSelect.className = "form-input";
  for (let script of scriptList) {
    const scriptCheck = document.createElement("option");
    scriptCheck.textContent = ucFirst(script);
    scriptSelect.append(scriptCheck);
  }

  const sendingForm = document.createElement("div");
  sendingForm.className = "form-div checkbox";
  const sendingChecbox = document.createElement("input");
  sendingChecbox.type = "checkbox";
  sendingChecbox.id = "sending";
  const sendingLabel = document.createElement("label");
  sendingChecbox.for = "sending";
  sendingLabel.textContent = `Нужна рассылка сообщений в мессенджеры после разговора "робот-человек"`;

  if (card === 0) {
    robotTypeForm.append(robotTypeDescription, robotType);
    form.append(robotTypeForm);
  } else {
    numberOfPhonesForm.append(numberOfPhonesDescription, numberOfPhones);
    form.append(numberOfPhonesForm);

    if (card.name !== "Пакет-фильтр базы") {
      CRMForm.append(CRMDescription, CRMName);
      form.append(CRMForm);
    }
    if (card.name === "Коробка для интернет-магазинов") {
      CMSForm.append(CMSChecbox, CMSLabel);
      form.append(CMSForm);
    }
    if (card.name === "Коробка для лидогенерации и коллцентров") {
      replyForm.append(replyDescription, replySelect);
      form.append(replyForm);
    }
    if (card.name === "Коробка для ЖКХ и УК") {
      scriptForm.append(scriptDescription, scriptSelect);
      form.append(scriptForm);
    }
    if (card.name === "Коробка для онлайн-школ") {
      sendingForm.append(sendingChecbox, sendingLabel);
      form.append(sendingForm);
    }
    Telegram.WebApp.onEvent('mainButtonClicked', () => {
      if (document.getElementById("numberOfErr")) {
        const numberOfErr = document.getElementById("numberOfErr");
        numberOfErr.remove();
        const numberOfPhones = document.getElementById("numberOfPhonesErr");
        numberOfPhones.className = "form-input";
      }
      if (!/\S/.test(numberOfPhones.value)) {
        const numberOfErr = document.createElement("img");
        numberOfErr.className = "error";
        numberOfErr.id = "numberOfErr";
        numberOfErr.src = "./icon-warning.png";
        numberOfPhones.className = "form-input input-error";
        numberOfPhones.id = "numberOfPhonesErr";
        numberOfPhonesForm.append(numberOfErr);
      }
      if (
        /\S/.test(company.value) &&
        validatePhone(phoneNumber.value) &&
        (validateEmail(email.value) || /\S/.test(email.value)) &&
        /\S/.test(name.value) &&
        /\S/.test(numberOfPhones.value)
      ) {
        subscribers.box = card.name;
        subscribers.company = company.value;
        subscribers.phoneNumber = phoneNumber.value;
        subscribers.name = name.value;
        subscribers.email = email.value;
        subscribers.numberOfPhones = numberOfPhones.value;
        subscribers.telephony = document.getElementById("telephony").value;
        alert(
          `${name.value}, спасибо! Сценаристы Бот N. свяжутся с Вами, возможно зададут ещё вопросов и предложат демо»`
        );
      }
    });
  }
  mainBox.append(boxButton, form, boxButtonCheckout);
  document.body.append(mainBox);
  Telegram.WebApp.onEvent('mainButtonClicked', () => {
    if (document.getElementById("companyErr")) {
      const companyErr = document.getElementById("companyErr");
      companyErr.remove();
      const company = document.getElementById("companyError");
      company.className = "form-input";
    }

    if (document.getElementById("phoneErr")) {
      const phoneErr = document.getElementById("phoneErr");
      phoneErr.remove();
      const phoneNumber = document.getElementById("phoneNumberError");
      phoneNumber.className = "form-input";
    }

    if (document.getElementById("emailErr")) {
      const emailErr = document.getElementById("emailErr");
      emailErr.remove();
      const email = document.getElementById("emailError");
      email.className = "form-input";
    }

    if (document.getElementById("nameErr")) {
      const nameErr = document.getElementById("nameErr");
      nameErr.remove();
      const name = document.getElementById("nameError");
      name.className = "form-input";
    }

    if (!/\S/.test(company.value)) {
      const companyErr = document.createElement("img");
      companyErr.className = "error";
      companyErr.id = "companyErr";
      companyErr.src = "./icon-warning.png";
      company.className = "form-input input-error";
      company.id = "companyError";
      companyForm.append(companyErr);
    }
    if (!validatePhone(phoneNumber.value)) {
      const phoneErr = document.createElement("img");
      phoneErr.className = "error";
      phoneErr.id = "phoneErr";
      phoneErr.src = "./icon-warning.png";
      phoneNumber.className = "form-input input-error";
      phoneNumber.id = "phoneNumberError";
      phoneNumberForm.append(phoneErr);
    }
    if (!validateEmail(email.value) || !/\S/.test(email.value)) {
      const emailErr = document.createElement("img");
      emailErr.className = "error";
      emailErr.id = "emailErr";
      emailErr.src = "./icon-warning.png";
      email.className = "form-input input-error";
      email.id = "emailError";
      emailForm.append(emailErr);
    }
    if (!/\S/.test(name.value)) {
      const nameErr = document.createElement("img");
      nameErr.className = "error";
      nameErr.id = "nameErr";
      nameErr.src = "./icon-warning.png";
      name.className = "form-input input-error";
      name.id = "nameError";
      nameForm.append(nameErr);
    }

    if (
      card == 0 &&
      /\S/.test(company.value) &&
      validatePhone(phoneNumber.value) &&
      (validateEmail(email.value) || /\S/.test(email.value)) &&
      /\S/.test(name.value)
    ) {
      subscribers.box = "Создать робота";
      subscribers.company = company.value;
      subscribers.phoneNumber = phoneNumber.value;
      subscribers.name = name.value;
      subscribers.email = email.value;
      subscribers.telephony = document.getElementById("telephony").value;
      subscribers.robotType = document.getElementById("robotSelect").value;
      alert(
        `${name.value}, спасибо! Сценаристы Бот N. свяжутся с Вами, возможно зададут ещё вопросов и предложат демо»`
      );
    }

    if (CRMName.value !== '') {
      subscribers.CRMName = CRMName.value;
    }

    if (card.name === "Коробка для лидогенерации и коллцентров") {
      subscribers.answer = document.getElementById("replySelect").value;
    }
    if (card.name === "Коробка для ЖКХ и УК") {
      subscribers.scenario = document.getElementById("scriptSelect").value;
    }
    if (CMSChecbox.checked) {
      subscribers.CMS = "Нужна связка с CMS(с сайтом)";
    } else {
      subscribers.CMS = "";
    }
    if (sendingChecbox.checked) {
      subscribers.sending = `Нужна рассылка сообщений в мессенджеры после разговора "робот-человек"`;
    } else {
      subscribers.sending = "";
    }
    tg.sendData(JSON.stringify(subscribers));
  });
}

main();
// маска номера телефона
function mask(event) {
  let matrix = "+7 (___)-___-__-__",
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
  if (def.length >= val.length) val = def;
  this.value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length
      ? val.charAt(i++)
      : i >= val.length
        ? ""
        : a;
  });
  if (event.type == "blur") {
    if (this.value.length == 2) this.value = "";
  } else setCursorPosition(this.value.length, this);
}

function setCursorPosition(pos, elem) {
  elem.focus();
  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
  else if (elem.createTextRange) {
    var range = elem.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
}
