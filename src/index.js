import "@/scss/index.scss";

import { initHeaderFixer } from "@/js/headerFixer";
import { initChoices } from "./js/choices";
import { initCart } from "./js/cart";
import { renderProducts } from "./js/renderProducts";
import { initChoicesType } from "./js/choicesType";
import { filterProducts } from "./js/filterProducts";

const init = () => {
  initHeaderFixer();
  initChoices();
  initChoicesType();
  initCart();
  renderProducts();
  filterProducts();
};

document.addEventListener("DOMContentLoaded", init);
