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

