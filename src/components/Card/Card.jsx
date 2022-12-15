import React from "react";
import { Link } from "react-router-dom";
import  './Card.css';

const Card = ({ service }) => {
  const { categoryName, productName, price, review, ratings, describe, img } =
    service;
    const newDes = describe.slice(1, 100)

  return (
    <div>
      <div className="card">
        <img src="https://i.ibb.co/6WJdVF6/farhad-ibrahimzade-u-G5jdjo-PKus-unsplash.jpg" alt="" />
        <div className="content">
          <div className="row">
            <div className="details">
              <span>{productName}</span>
              <p>Category: {categoryName}</p>
            </div>
            <div className="price">${price}</div>
          </div>
          <div className="buttons">
            <button>Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
