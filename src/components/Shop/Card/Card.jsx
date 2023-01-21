import React from "react";
import  './Card.css';

const Card = ({ service }) => {
  const { categoryName, productName, price, review, ratings, describe, img } =
    service;
    const newDes = describe.slice(0, 100)

  return (
    <div>
      <div className="card">
        <img src={img} alt="" />
        <div className="content">
          <div className="row">
            <div className="details">
              <span>{productName}</span>
              <p>{newDes} ...</p>
            </div>
            <div className="price">${price}</div>
          </div>
          <div className="cate">
            <h1>Category: <span>{categoryName}</span></h1>
            <p>{ratings} Star</p>
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
