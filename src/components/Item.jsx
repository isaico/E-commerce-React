import React from "react";

export const Item = (props) => {
  return (
    <div className="itemList__item">
      <div className="itemList__item--head">
        <img
          src={props.itemProps.pictureUrl}
          alt="#"
          className="itemList__item--img"
        />
      </div>
      <div className="itemList__item--body">
        <h3 className="itemList__item--title">{props.itemProps.title}</h3>
        <p className="itemList__item--desc">{props.itemProps.description}</p>
        <p className="itemList__item--price">{props.itemProps.price}</p>
      </div>
    </div>
  );
};
