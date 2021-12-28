import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/firebase";
import { ItemDetail } from "./ItemDetail";
import { Loader } from "../Loader/Loader";

export const ItemDetailContainer = () => {
  //Hook
  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const { urlDetalleItem } = useParams();
  //fetch
  useEffect(() => {
    const db = getFirestore();
    const itemDoc = db.collection("burgers").doc(urlDetalleItem);
    
    if (urlDetalleItem) {
      itemDoc.get()
        .then((resp) => {
          if (resp.size === 0) console.log("no hay datos");
          
          setItemDetail( { id:resp.id,...resp.data()} );
        })
        .catch((err) => console.log(err))
        .finally(() => {
            setLoading(false);
        });
      
    } 
  }, [urlDetalleItem]);
  
  return (
    <div id="itemDetails">
      {loading ? (

        <Loader/>
      ) : (
        <ItemDetail key={urlDetalleItem} item={itemDetail} />
      )}
    </div>
  );
};
