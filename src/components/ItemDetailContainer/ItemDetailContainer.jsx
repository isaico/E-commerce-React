import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../helpers/apiFetch";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  //Hook
  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const {urlDetalleItem}=useParams()
  //fetch
  useEffect(() => {
	
	if(urlDetalleItem){
	  getItem
	  .then((data) => {
		setItemDetail(data.find(item=> item.id===urlDetalleItem));
	   
	  })
	  .catch((err) => console.log(err))
	  .finally(() => {
		console.log("Detalles del produco cargados");
		setLoading(false);
	  });

	}else{
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
	}
  }, [urlDetalleItem]);
 
  return (
	<div id="itemDetails">
	   {loading ? <h2>cargando...</h2> : <ItemDetail item={itemDetail}/>}
	</div>
)};
