import React from "react";
import { Item } from "./Item";
// import { ItemListContainer } from './ItemListContainer';

export const ItemList = (props) => {
  console.log(props.items)
  return(
    props.items.map( item => 
        // <div className="item">
        //     <img src={item.pictureURL} alt="#" />
        //     <h3>{item.title}</h3>
        //     <p>{item.description}</p>
        //     <p>{item.price}</p>
        // </div>
    <Item key={item.id}itemProps={item}></Item>
  )
)}
