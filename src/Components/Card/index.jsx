import React from "react";
import { Link } from "react-router-dom";
import style from './Card.module.css'
export default function Card({ img, name, price, id }) {
  return (
    <div className={`card ${style.cardContainer}`}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price : {price}</p>
        <Link
          to={`/product-details/${id}/${name.replaceAll(" ", "-")}`}
          className="btn btn-primary"
        >
          More Details
        </Link>
      </div>
    </div>
  );
}
