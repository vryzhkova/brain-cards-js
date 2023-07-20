import { createElement } from "../helper/createElement.js";

export const createCategory = (app) => {
  const category = createElement("section", {
    className: "category section-offset",
  });

  const container = createElement("div", {
    className: "container",
  });

  category.append(container);

  const categoryList = createElement("ul", {
    className: "category__list",
  });

  const createCategoryCard = (data) => {
    const item = createElement("li", {
      className: "category__item",
      textContent: data.title,
    });
    item.dataset.id = data.id;

    return item;
  };

  container.append(categoryList);

  const mount = (data) => {
    categoryList.textContent = "";
    app.append(category);
    const cards = data.map(createCategoryCard);

    categoryList.append(...cards);
  };

  const unmount = () => {
    category.remove();
  };

  return { mount, unmount, categoryList };
};
