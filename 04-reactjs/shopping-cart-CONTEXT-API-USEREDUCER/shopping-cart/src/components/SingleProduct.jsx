import React from "react";
import { Button, Card } from "react-bootstrap";
import { Rating } from "./Rating";
import { CartState } from "../context/Context";

export const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <>
      <div className="products">
        <Card>
          <Card.Img variant="top" src={prod.image} alt={prod.name} />
          <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Subtitle style={{ paddingBottom: 10 }}>
              <span>R {prod.price.split(".")[0]}</span>
              {prod.fastDelivery ? (
                <div>Fast Delivery</div>
              ) : (
                <div>4 days Delivery</div>
              )}
              <Rating
                rating={prod.rating}
                onClick={() => {
                  return;
                }}
              />
            </Card.Subtitle>
            {cart.some((p) => p.id === prod.id) ? (
              <Button
                onClick={()=> dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })}
                variant="danger"
              >
                Remove From Cart
              </Button>
            ) : (
              <Button
                onClick={()=>dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })}
                disabled={!prod.inStock}
              >
                {prod.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
