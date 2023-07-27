import { createElement } from "../helper/createElement.js";
import { shuffle } from "../helper/shuffle.js";
import { showAlert } from "./showAlert.js";

export const createPairs = (app) => {
  const pairs = createElement("section", {
    className: "card section-offset",
  });

  const container = createElement("div", {
    className: "container card__container",
  });

  const buttonReturn = createElement("button", {
    className: "card__return",
    ariaLabel: "Возврат к категориям",
  });

  const buttonCard = createElement("button", {
    className: "card__item",
  });

  const front = createElement("span", {
    className: "card__front",
    textContent: "one",
  });

  const back = createElement("span", {
    className: "card__back",
    textContent: "two",
  });

  buttonCard.append(front, back);
  container.append(buttonReturn, buttonCard);
  pairs.append(container);

  let dataCards = [];

  const flipCard = () => {
    console.log(buttonCard.index);
    buttonCard.classList.add("card__item_flipped");
    buttonCard.removeEventListener("click", flipCard);
    setTimeout(() => {
      buttonCard.classList.remove("card__item_flipped");
      setTimeout(() => {
        buttonCard.index += 1;
        if (buttonCard.index === dataCards.length) {
          front.textContent = "the end";
          showAlert("Вернемся на главную!");
          setTimeout(() => {
            buttonReturn.click();
          }, 2000);
          return;
        }
        front.textContent = dataCards[buttonCard.index][0];
        back.textContent = dataCards[buttonCard.index][1];
        setTimeout(() => {
          buttonCard.addEventListener("click", flipCard);
        }, 200);
      }, 100);
    }, 1000);
  };

  const cardController = (data) => {
    dataCards = [...data];
    buttonCard.index = 0;
    front.textContent = data[buttonCard.index][0];
    back.textContent = data[buttonCard.index][1];

    buttonCard.addEventListener("click", flipCard);
  };

  const mount = (data) => {
    app.append(pairs);
    const newDate = shuffle(data.pairs);
    cardController(newDate);
  };

  const unmount = (data) => {
    pairs.remove();
    buttonCard.removeEventListener("click", flipCard);
  };

  return { buttonReturn, mount, unmount };
};
