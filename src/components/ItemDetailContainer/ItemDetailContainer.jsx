import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/firebase";
// import { getItem } from "../helpers/apiFetch";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  //Hook
  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const { urlDetalleItem } = useParams();
  //fetch
  useEffect(() => {
    const db = getFirestore();
    const itemDoc = db.collection("burgers").doc(urlDetalleItem);
    console.log(itemDoc)
    if (urlDetalleItem) {
      itemDoc.get()
        .then((resp) => {
          if (resp.size === 0) console.log("no hay datos");
          console.log(resp)
          console.log(resp.id)
          setItemDetail( { id:resp.id,...resp.data()} );
        })
        .catch((err) => console.log(err))
        .finally(() => {
            console.log("Detalles cargados");
            setLoading(false);
        });
      return () => console.log("clean");
    } 
  }, [urlDetalleItem]);
  console.log(itemDetail)
  return (
    <div id="itemDetails">
      {loading ? (
        <h2>cargando...</h2>
      ) : (
        <ItemDetail key={urlDetalleItem} item={itemDetail} />
      )}
    </div>
  );
};
