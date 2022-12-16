import { hotOffer } from "./hotOfferArray";

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const q = parseInt(params.get("q"));

const mainBox = document.querySelector(".mainBox");
const backButton = document.createElement("button");
backButton.className = "back";
backButton.textContent = "Вернуться";
backButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

for (let card of hotOffer) {
  if (card.id === q) {
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

    box.append(
      nameCard,
      mainInfo,
      secondaryInfo,
      freePeriod,
      premiumTitle,
      list
    );
    mainBox.append(box);
  }
}
