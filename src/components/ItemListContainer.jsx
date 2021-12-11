import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { apiFetch } from "./helpers/apiFetch";
import { ItemList } from "./ItemList";
//importo base de datos
import { getFirestore } from "../firebase/firebase";

export const ItemListContainer = () => {
  //Hook
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { urlCategoria } = useParams();

  //Coleccion de Firestore (base de datos)
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("burgers");

    if (urlCategoria) {

      const itemCollCategoria = itemCollection.where(
        "categoria",
        "==",
        urlCategoria
      );
      itemCollCategoria
        .get()
        .then((data) => {
			if (data.size === 0) console.log("no se encontraron los datos");

			setItems(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));

    } else {

      const itemCollection = db.collection("burgers");
      itemCollection
        .get()
        .then((data) => {
			if (data.size === 0) console.log("no se encontraron los datos")
			setItems(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));

    }
},[urlCategoria])
    
  return (
    <div id="itemList">
      {loading ? <h2>cargando...</h2> : <ItemList items={items} />}
    </div>
  );
};
