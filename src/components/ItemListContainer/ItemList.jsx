import React from "react";
import { Item } from "./Item";


export const ItemList = (props) => {
 
  return(
    props.items.map( item => 
       
    <Item key={item.id}itemProps={item}></Item>
  )
)}
