import { telCheck } from "./array.js";
import { main } from "./test.js";

const hotOffer = [
  {
    id: 0,
    name: "Горячее предложение",
    mainInfo: `Программа FREE рассчитана на бесплатное пользование любой коробкой с голосовым роботом для автообзвона на выбор в течении 15 дней. 
        \nОграничение: загрузка и обзвон до 1000 номеров в день`,

    secondaryInfo: `К любому голосовому роботу Бот N. предоставляется возможность подключения своего провайдера связи для исходящих и входящих звонков.
        \nВ случае необходимости ANNACOM.RU обеспечивает исходящую и входящую связь. Стоимость минуты голосового вызова составляет 2,5 руб. с посекундной тарификацией.
        \nОграничение: обязательная предоплата за услуги связи в случае использования ANNACOM.RU для исходящих звонков.`,

    freePeriod: `По истечении Free-периода допускается использование робота для автоматических вызовов бесплатно и навсегда.
        \nОграничение: не более 50 номеров в день. Ограничение применяется автоматически.`,

    premiumTitle: "Переход на Premium-доступ позволяет:",
    premiumInfo: [
      "получать расширенную статистику по обработанным номерам;",

      "формировать отчет по лидогенерации с расчетом % конверсии;",

      "осуществлять мониторинг ежедневных затрат;",

      "получать уведомления через Telegram об остатке базы номеров и о завершении обработки загруженной базы;",

      "загружать в систему автообзвона черный список номеров (на номера из черного списка дозвон производится не будет);",

      "запись и хранение разговоров;",

      "подключать и отключать различные;",
    ],
  },
];

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

function form() {
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
    hotMain();
  });
  boxButton.append(backButton);

  const boxButtonCheckout = document.createElement("div");
  boxButtonCheckout.className = "box-button right";
  const checkout = document.createElement("button");
  checkout.className = "order";
  checkout.textContent = "Оформить";
  checkout.type = "submit";
  boxButtonCheckout.append(checkout);

  const form = document.createElement("form");
  form.className = "form";
  form.id = "tg";

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
  name.name = "nam";
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
  email.name = "email";
  emailForm.append(emailDescription, email);

  const telephonyForm = document.createElement("div");
  telephonyForm.className = "form-div";
  const telephonyDescription = document.createElement("p");
  telephonyDescription.textContent =
    "Роботу нужна исходящая связь и номера. Напишите, что подключаем?";
  const telephony = document.createElement("select");
  telephony.className = "form-input";
  telephony.id = "telephony";

  for (let tel of telCheck) {
    const telLabel = document.createElement("option");
    telLabel.textContent = ucFirst(tel);
    telephony.append(telLabel);
  }

  checkout.addEventListener("click", function (e) {
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
      companyErr.src = "static/pic/icon-warning.png";
      company.className = "form-input input-error";
      company.id = "companyError";
      companyForm.append(companyErr);
    }
    if (!validatePhone(phoneNumber.value)) {
      const phoneErr = document.createElement("img");
      phoneErr.className = "error";
      phoneErr.id = "phoneErr";
      phoneErr.src = "static/pic/icon-warning.png";
      phoneNumber.className = "form-input input-error";
      phoneNumber.id = "phoneNumberError";
      phoneNumberForm.append(phoneErr);
    }
    if (!validateEmail(email.value) || !/\S/.test(email.value)) {
      const emailErr = document.createElement("img");
      emailErr.className = "error";
      emailErr.id = "emailErr";
      emailErr.src = "static/pic/icon-warning.png";
      email.className = "form-input input-error";
      email.id = "emailError";
      emailForm.append(emailErr);
    }
    if (!/\S/.test(name.value)) {
      const nameErr = document.createElement("img");
      nameErr.className = "error";
      nameErr.id = "nameErr";
      nameErr.src = "static/pic/icon-warning.png";
      name.className = "form-input input-error";
      name.id = "nameError";
      nameForm.append(nameErr);
    }
    if (
      /\S/.test(company.value) &&
      validatePhone(phoneNumber.value) &&
      validateEmail(email.value) &&
      /\S/.test(email.value) &&
      /\S/.test(name.value)
    ) {
      const TOKEN = "5800428906:AAHYoNC9cQ3qmqhNmK5JXw1tLM49JtZugpM";
      const CHAT_ID = "-1001857114920";
      const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

      e.preventDefault();

      let message = `<b>💥ЗАЯВКА С САЙТА!</b>\n`;
      message += `<b>Коробка: Горячее предложение</b>`;
      message += `<b>Название компании: </b> ${company.value}\n`;
      message += `<b>Телефонный номер: </b> ${phoneNumber.value}\n`;
      message += `<b>Отправитель: </b> ${name.value}\n`;
      message += `<b>Телефония: </b> ${
        document.getElementById("telephony").value
      }\n`;

      JSON.stringify(message);

      axios
        .post(URI_API, {
          chat_id: CHAT_ID,
          parse_mode: "html",
          text: message,
        })
        .then((res) => {
          alert(
            `${name.value}, спасибо! Сценаристы Бот N. свяжутся с Вами, возможно зададут ещё пару вопросов и предложат демо...`
          );
          name.value = "";
          email.value = "";
          phoneNumber.value = "";
          company.value = "";
        })
        .catch((err) => {
          alert(
            `Извините, ${name.value}! Сервис не работает, попробуйте оформить заказ через telegram...`
          );
          console.warn(err);
        });
    }
  });

  telephonyForm.append(telephonyDescription, telephony);

  form.append(companyForm, phoneNumberForm, nameForm, emailForm, telephonyForm);

  mainBox.append(boxButton, form, boxButtonCheckout);
  document.body.append(mainBox);
}
export function hotMain() {
  if (document.querySelector(".mainBox")) {
    const mainDescription = document.querySelector(".mainBox");
    mainDescription.remove();
  }

  const mainDescription = document.createElement("div");
  mainDescription.className = "mainBox main-description";
  for (let card of hotOffer) {
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
    freePeriod.className = "price";
    freePeriod.textContent = card.freePeriod;

    const premiumTitle = document.createElement("p");
    premiumTitle.className = "connection";
    premiumTitle.textContent = card.premiumTitle;

    const list = document.createElement("ul");
    for (const elem of card.premiumInfo) {
      const elementList = document.createElement("li");
      elementList.textContent = ucFirst(elem);
      list.append(elementList);
    }

    const boxButtonCheckout = document.createElement("div");
    boxButtonCheckout.className = "box-button right";
    const checkout = document.createElement("button");
    checkout.className = "order";
    checkout.textContent = "Оформить";
    checkout.type = "submit";
    boxButtonCheckout.append(checkout);

    const roboImageBox = document.createElement("div");
    roboImageBox.className = "hotRoboImgBox";
    const roboImage = document.createElement("img");
    roboImage.src = "static/pic/98290406-f4e6-4b93-a0e0-d97607914efe.png";
    roboImage.className = "hotRoboImg";
    roboImageBox.append(roboImage);

    const boxButtonOrder = document.createElement("div");
    boxButtonOrder.className = "box-button right";
    const order = document.createElement("button");
    order.className = "order";
    order.textContent = "Заказать";
    order.addEventListener("click", () => {
      form();
    });
    boxButtonOrder.append(order);

    box.append(
      nameCard,
      mainInfo,
      secondaryInfo,
      freePeriod,
      premiumTitle,
      list,
      roboImageBox
    );
    mainDescription.append(box, boxButtonOrder);
    document.body.append(mainDescription);
  }
}
hotMain();
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
