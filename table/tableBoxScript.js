const subscribers = [
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

    },
    {
        registrationDate: "22.06.2022",
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

    }
]

function createTable() {
    const mainTable = document.createElement("table");
    const tbody = document.createElement('tbody');

    const regDateHead = document.createElement("th");
    regDateHead.textContent = "дата РЕГ."

    const timeRegHead = document.createElement("th");
    timeRegHead.textContent = "время РЕГ."

    const userIdHead = document.createElement("th");
    userIdHead.textContent = "TG (user_id)"

    const firstNameHead = document.createElement("th");
    firstNameHead.textContent = "TG (first_name)"

    const lastNameHead = document.createElement("th");
    lastNameHead.textContent = "TG (last_name)"

    const userNameHead = document.createElement("th");
    userNameHead.textContent = "TG (username)"

    const boxHead = document.createElement("th")
    boxHead.textContent = "Название бота"

    const companyHead = document.createElement("th")
    companyHead.textContent = "Компания"

    const numberHead = document.createElement("th")
    numberHead.textContent = "Номер телефона"

    const nameHead = document.createElement("th")
    nameHead.textContent = "Имя"

    const emailHead = document.createElement("th")
    emailHead.textContent = "e-mail"

    const telephonyHead = document.createElement("th")
    telephonyHead.textContent = "Что подключаем"

    const robotTypeHead = document.createElement("th")
    robotTypeHead.textContent = "Тип робота"

    const numberOfHead = document.createElement('th')
    numberOfHead.textContent = "Количество клиентов"

    const CRMNameHead = document.createElement("th")
    CRMNameHead.textContent = "Название CRM"

    const CMSHead = document.createElement("th")
    CMSHead.textContent = "Связка с CMS"

    for (let subscriber of subscribers) {

        const row = document.createElement("tr")

        const rowRegDate = document.createElement("td")
        rowRegDate.textContent = subscriber.registrationDate

        const rowTimeReg = document.createElement("td")
        rowTimeReg.textContent = subscriber.registrationTime

        const rowUserId = document.createElement("td")
        rowUserId.textContent = subscriber.userID

        const rowFirstName = document.createElement("td")
        rowFirstName.textContent = subscriber.firstName

        const rowLastName = document.createElement("td")
        rowLastName.textContent = subscriber.lastName

        const rowUsername = document.createElement("td")
        rowUsername.textContent = subscriber.username

        const rowBox = document.createElement("td")
        rowBox.textContent = subscriber.box

        const rowCompany = document.createElement("td")
        rowCompany.textContent = subscriber.company

        const rowNumber = document.createElement("td")
        rowNumber.textContent = subscriber.phoneNumber

        const rowName = document.createElement("td")
        rowName.textContent = subscriber.name

        const rowEmail = document.createElement("td")
        rowEmail.textContent = subscriber.email

        const rowTelephony = document.createElement("td")
        rowTelephony.textContent = subscriber.telephony

        const rowRobotType = document.createElement("td")
        rowRobotType.textContent = subscriber.robotType

        const rowNumberOf = document.createElement("td")
        rowNumberOf.textContent = subscriber.numberOfPhones

        const rowCRM = document.createElement("td")
        rowCRM.textContent = subscriber.CRMName

        const rowCMS = document.createElement("td")
        rowCMS.textContent = subscriber.CMS

        row.append(rowRegDate, rowTimeReg, rowUserId, rowFirstName, rowLastName, rowUsername, rowBox, rowCompany, rowNumber, rowName, rowEmail, rowTelephony, rowRobotType, rowNumberOf, rowCRM, rowCMS)
        tbody.append(row)

    }

    mainTable.append(regDateHead, timeRegHead, userIdHead, firstNameHead, lastNameHead, userNameHead, boxHead, companyHead, numberHead, nameHead, emailHead, telephonyHead, robotTypeHead, numberOfHead, CRMNameHead, CMSHead)
    mainTable.append(tbody)
    document.body.append(mainTable)
}
createTable();