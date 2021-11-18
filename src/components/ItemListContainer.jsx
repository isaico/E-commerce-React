import React from 'react'
import { useEffect, useState } from "react";
import { apiFetch } from './helpers/apiFetch';
import { ItemList } from './ItemList';


export const ItemListContainer = () => {
  //Hook
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  //fetch
  useEffect(() => {
    apiFetch
      .then((data) => {
        setItems(data)
        console.log(data)
      })
      .catch( err =>  console.log(err) )
      .finally(() => { 
      console.log("Finalizada la carga de Api")
      setLoading(false)
    });
    return () => console.log("clean")
  },[]);
  
    return (
        
       <div  id="itemList">
         {loading ? <h2>cargando...</h2> :  <ItemList items={items} />}
       </div>
       
    )
}
