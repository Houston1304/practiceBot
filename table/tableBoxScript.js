const subscribers = [
  {
    registrationDate: "13.06.2022",
    registrationTime: "00:20:00",
    userID: "46930862",
    firstName: "Николай",
    lastName: "Николаев",
    username: "@лох",
    box: "box",
    company: "google",
    phoneNumber: "+7293752393952",
    name: "НЕ ЛОХ",
    email: "trodiso@ivs.ru",
    telephony: "СВОЯ телефония",
    robotType: "robotType",
    numberOfPhones: "количество",
    CRMName: "crm",
    CMS: "Карина - лох",
    answer: "Нажать клавишу для ответа",
    scenario: "напоминание об оплате долга",
    sending: "Точно нет",
  },
  {
    registrationDate: "02.06.2022",
    registrationTime: "22:20:00",
    userID: "78523972",
    firstName: "Амир",
    lastName: "Амирович",
    username: "@nekashtanka",
    box: "box",
    company: "google",
    phoneNumber: "+7293752393952",
    name: "ЛОХ",
    email: "trodiso@ivs.ru",
    telephony: "СВОЯ телефония",
    robotType: "robotType",
    numberOfPhones: "количество",
    CRMName: "crm",
    CMS: "Карина - лох",
    answer: "Произнести ответ",
    scenario: "прием входящих звонков для передачи показаний",
    sending: "Нет",
  },
  {
    registrationDate: "02.06.2022",
    registrationTime: "22:20:00",
    userID: "78523972",
    firstName: "Карина",
    lastName: "Трофимова",
    username: "@nekashtanka",
    box: "box",
    company: "google",
    phoneNumber: "+7293752393952",
    name: "ЛОХ",
    email: "trodiso@ivs.ru",
    telephony: "СВОЯ телефония",
    robotType: "robotType",
    numberOfPhones: "количество",
    CRMName: "crm",
    CMS: "Карина - лох",
    answer: "Произнести ответ",
    scenario: "прием входящих звонков для передачи показаний",
    sending: "Нет",
  },
];

const dateBox = document.createElement("div");
dateBox.className = "dateBox";

const startDate = document.createElement("input");
startDate.type = "date";
startDate.className = "startDate";

const endDate = document.createElement("input");
endDate.type = "date";
endDate.className = "endDate";

const dash = document.createElement("label");
dash.className = "dash";
dash.textContent = " - ";

const searchDate = document.createElement("button");
searchDate.className = "searchDate";
searchDate.textContent = "Отфильтровать";

searchDate.addEventListener("click", () => {
  const tr = document.getElementsByClassName("database");

  const backTTF = document.createElement("button");
  backTTF.textContent = "Назад";
  document.body.prepend(backTTF);

  backTTF.addEventListener("click", () => {
    window.location.href = "tableBox.html";
  });

  for (var i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByClassName("date")[0];
    let td_date = td.innerHTML;
    td_date =
      td_date.substr(6, 4) +
      "-" +
      td_date.substr(3, 2) +
      "-" +
      td_date.substr(0, 2);

    let start = startDate.value;
    let end = endDate.value;
    if (td_date < start || end < td_date) {
      tr[i].style.position = "absolute";
      tr[i].style.visibility = "hidden";
    }
  }
});

document.body.append(dateBox, searchDate);
dateBox.append(startDate, dash, endDate);

function createTable() {
  const mainTable = document.createElement("table");
  mainTable.className = "mainTable";
  const tbody = document.createElement("tbody");

  const regDateHead = document.createElement("th");
  regDateHead.textContent = "дата РЕГ.";

  const timeRegHead = document.createElement("th");
  timeRegHead.textContent = "время РЕГ.";

  const userIdHead = document.createElement("th");
  userIdHead.textContent = "TG (user_id)";

  const firstNameHead = document.createElement("th");
  firstNameHead.textContent = "TG (first_name)";

  const lastNameHead = document.createElement("th");
  lastNameHead.textContent = "TG (last_name)";

  const userNameHead = document.createElement("th");
  userNameHead.textContent = "TG (username)";

  const boxHead = document.createElement("th");
  boxHead.textContent = "Название коробки";

  const companyHead = document.createElement("th");
  companyHead.textContent = "Компания";

  const numberHead = document.createElement("th");
  numberHead.textContent = "Номер телефона";

  const nameHead = document.createElement("th");
  nameHead.textContent = "Имя";

  const emailHead = document.createElement("th");
  emailHead.textContent = "e-mail";

  const telephonyHead = document.createElement("th");
  telephonyHead.textContent = "Что подключаем";

  const robotTypeHead = document.createElement("th");
  robotTypeHead.textContent = "Тип робота";

  const numberOfHead = document.createElement("th");
  numberOfHead.textContent = "Количество клиентов";

  const CRMNameHead = document.createElement("th");
  CRMNameHead.textContent = "Название CRM";

  const CMSHead = document.createElement("th");
  CMSHead.textContent = "Связка с CMS";

  const answerHead = document.createElement("th");
  answerHead.textContent = "Лид должен";

  const scenarioHead = document.createElement("th");
  scenarioHead.textContent = "Подходящий сценарий";

  const sendingHead = document.createElement("th");
  sendingHead.textContent = "Рассылка сообщений";

  for (let subscriber of subscribers) {
    const row = document.createElement("tr");
    row.className = "database";

    const rowRegDate = document.createElement("td");
    rowRegDate.className = "date";
    rowRegDate.textContent = subscriber.registrationDate;

    const rowTimeReg = document.createElement("td");
    rowTimeReg.textContent = subscriber.registrationTime;

    const rowUserId = document.createElement("td");
    rowUserId.textContent = subscriber.userID;

    const rowFirstName = document.createElement("td");
    rowFirstName.textContent = subscriber.firstName;

    const rowLastName = document.createElement("td");
    rowLastName.textContent = subscriber.lastName;

    const rowUsername = document.createElement("td");
    rowUsername.textContent = subscriber.username;

    const rowBox = document.createElement("td");
    rowBox.textContent = subscriber.box;

    const rowCompany = document.createElement("td");
    rowCompany.textContent = subscriber.company;

    const rowNumber = document.createElement("td");
    rowNumber.textContent = subscriber.phoneNumber;

    const rowName = document.createElement("td");
    rowName.textContent = subscriber.name;

    const rowEmail = document.createElement("td");
    rowEmail.textContent = subscriber.email;

    const rowTelephony = document.createElement("td");
    rowTelephony.textContent = subscriber.telephony;

    const rowRobotType = document.createElement("td");
    rowRobotType.textContent = subscriber.robotType;

    const rowNumberOf = document.createElement("td");
    rowNumberOf.textContent = subscriber.numberOfPhones;

    const rowCRM = document.createElement("td");
    rowCRM.textContent = subscriber.CRMName;

    const rowCMS = document.createElement("td");
    rowCMS.textContent = subscriber.CMS;

    const rowAnswer = document.createElement("td");
    rowAnswer.textContent = subscriber.answer;

    const rowScenario = document.createElement("td");
    rowScenario.textContent = subscriber.scenario;

    const rowSending = document.createElement("td");
    rowSending.textContent = subscriber.sending;

    row.append(
      rowRegDate,
      rowTimeReg,
      rowUserId,
      rowFirstName,
      rowLastName,
      rowUsername,
      rowBox,
      rowCompany,
      rowNumber,
      rowName,
      rowEmail,
      rowTelephony,
      rowRobotType,
      rowNumberOf,
      rowCRM,
      rowCMS,
      rowAnswer,
      rowScenario,
      rowSending
    );
    tbody.append(row);
  }

  mainTable.append(
    regDateHead,
    timeRegHead,
    userIdHead,
    firstNameHead,
    lastNameHead,
    userNameHead,
    boxHead,
    companyHead,
    numberHead,
    nameHead,
    emailHead,
    telephonyHead,
    robotTypeHead,
    numberOfHead,
    CRMNameHead,
    CMSHead,
    answerHead,
    scenarioHead,
    sendingHead
  );
  mainTable.append(tbody);
  document.body.append(mainTable);
}
createTable();

var getCellValue = function (tr, idx) {
  return tr.children[idx].innerText || tr.children[idx].textContent;
};

var comparer = function (idx, asc) {
  return function (a, b) {
    return (function (v1, v2) {
      return v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
        ? v1 - v2
        : v1.toString().localeCompare(v2);
    })(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
  };
};

Array.prototype.slice
  .call(document.querySelectorAll("th"))
  .forEach(function (th) {
    th.addEventListener("click", function () {
      var table = th.parentNode;
      while (table.tagName.toUpperCase() != "TABLE") table = table.parentNode;
      Array.prototype.slice
        .call(table.querySelectorAll("tr:nth-child(n+1)"))
        .sort(
          comparer(
            Array.prototype.slice.call(th.parentNode.children).indexOf(th),
            (this.asc = !this.asc)
          )
        )
        .forEach(function (tr) {
          table.appendChild(tr);
        });
    });
  });
