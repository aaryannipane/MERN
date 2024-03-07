import React from "react";
import { CartState } from "../context/Context";
import { SingleProduct } from "./SingleProduct";
import "./styles.css";
import { Filters } from "./Filters";

export const Home = () => {
  const {
    state: { products },
    productState: { byStock, byFastDelivery, byRating, searchQuery, sort },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((p) => p.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((p) => p.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter((p) => p.rating >= byRating);
    }

    if(searchQuery){
      sortedProducts = sortedProducts.filter((p)=> p.name.toLowerCase().includes(searchQuery))
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};
