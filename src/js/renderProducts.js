// import { fetchProducts } from "./API";
import { ProductCard } from "./ProductCard.jsx";
import { store } from "./Store.js";

export const renderProducts = async () => {
  const goodsList = document.querySelector(".goods__list");
  const updateList = () => {
    const products = store.getProducts();
    goodsList.innerHTML = "";

    products.forEach((product) => {
      const productCard = ProductCard(product);
      goodsList.append(productCard);
    });
  };
  // const products = await fetchProducts();
  store.subscribe(updateList);
  updateList();
};
