import React from "react";
import { useEffect, useState } from "react";
import { getItem } from "../helpers/apiFetch";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  //Hook
  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  
  //fetch
  useEffect(() => {
    getItem
      .then((data) => {
        setItemDetail(data);
       
      })
      .catch((err) => console.log(err))
      .finally(() => {
        console.log("Detalles del produco cargados");
        setLoading(false);
      });
    return () => console.log("clean");
  }, []);
 
  return (
    <div id="itemDetails">
       {loading ? <h2>cargando...</h2> : <ItemDetail item={itemDetail}/>}
    </div>
)};
