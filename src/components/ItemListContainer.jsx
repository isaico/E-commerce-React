import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiFetch } from './helpers/apiFetch';
import { ItemList } from './ItemList';



export const ItemListContainer = () => {
  //Hook
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const {urlCategoria}=useParams()
  //fetch
  useEffect(() => {

	if (urlCategoria) {
	  apiFetch
	  .then((data) => {
		setItems(data.filter( item=> item.categoria === urlCategoria ))
		
	  })
	  .catch( err =>  console.log(err) )
	  .finally(() => { 
	  console.log("Finalizada la carga de Api")
	  setLoading(false)
	});
	} else {
	  apiFetch
	  .then((data) => {
		setItems(data)
		
	  })
	  .catch( err =>  console.log(err) )
	  .finally(() => { 
	  console.log("Finalizada la carga de Api")
	  setLoading(false)
	});
	}
	// apiFetch
	//   .then((data) => {
	//     setItems(data)
	//     console.log(data)
	//   })
	//   .catch( err =>  console.log(err) )
	//   .finally(() => { 
	//   console.log("Finalizada la carga de Api")
	//   setLoading(false)
	// });
	return () => console.log("clean")
  },[urlCategoria]);
  
  
	return (
		
	   <div  id="itemList">
		 {loading ? <h2>cargando...</h2> :  <ItemList items={items} />}
	   </div>
	   
	)
}
