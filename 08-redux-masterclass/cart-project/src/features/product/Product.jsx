import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Product.module.css";
import { fetchAsync } from "./productSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const productStore = useSelector((state) => state.product);

  return (
    <div>
      <button onClick={() => dispatch(fetchAsync())}>Fetch Data</button>
      <hr />
      <div className={styles.cardWrapper}>
        {productStore.products &&
          productStore.products.map((product) => (
            <div key={product.id} className={styles.card}>
              <img
                src={product.thumbnail}
                alt="Denim Jeans"
                style={{ width: "100%" }}
              />
              <h1>{product.title}</h1>
              <p className={styles.price}>${product.price}</p>
              <p>{product.description}</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
