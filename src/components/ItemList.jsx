import React from "react";
import { Item } from "./Item";
// import { ItemListContainer } from './ItemListContainer';

export const ItemList = (props) => {
  console.log(props.items)
  return(
    props.items.map( item => 
       
    <Item key={item.id}itemProps={item}></Item>
  )
)}
