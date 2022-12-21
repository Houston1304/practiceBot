const subscribers = [
    {
        registrationDate: "02.06.2022",
        registrationTime: "22:20:00",
        userID: "78523972",
        firstName: "Карина",
        lastName: "Трофимова",
        username: "@nekashtanka",
    },
    {
        registrationDate: "22.06.2022",
        registrationTime: "00:20:00",
        userID: "46930862",
        firstName: "Николай",
        lastName: "Николаев",
        username: "@лох",
    }
]

function createTable(){    
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

    for(let subscriber of subscribers){

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
    
    row.append(rowRegDate, rowTimeReg, rowUserId, rowFirstName, rowLastName, rowUsername)
    tbody.append(row)
    
    }

    mainTable.append(regDateHead, timeRegHead, userIdHead, firstNameHead, lastNameHead, userNameHead)
    mainTable.append(tbody)
    document.body.append(mainTable)
}
createTable();