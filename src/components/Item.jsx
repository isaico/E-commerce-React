import React from "react";
import { Link } from "react-router-dom";

export const Item = ({itemProps}) => {
  return (
    <div className="itemList__item" id={itemProps.id}>
      <div className="itemList__item--head">
        <img
          src={itemProps.pictureUrl}
          alt="#"
          className="itemList__item--img"
        />
      </div>
      <div className="itemList__item--body">
        <h3 className="itemList__item--title">{itemProps.title}</h3>
        <Link to="/detalle">
          <button className="itemList__item--buttonDetail">Ver mas detalles</button>

        </Link>
        <p className="itemList__item--price">{itemProps.price}</p>
      </div>
    </div>
  );
};
