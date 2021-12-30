import { useState } from "react";
import { ActivateCartContext } from "../../context/CartContext/CartContext";
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css"


export const ItemDetail = ({ item }) => {
  // //Hook
  const [count, setCount] = useState(0);

  //uso del Context
  const { addProduct } = ActivateCartContext();

  //funciones
  function onAdd(cant) {
    setCount(cant);
    addProduct({ producto: item, cantidad: cant });
  }

  
  return (
    <div className="itemDetail-container">
      <div className="itemDetail-desc-container">
        <div className="itemDetail-right">
          <h2 className="itemDetail-title">{item.title}</h2>
          <p className="itemDetail-desc">{item.description}</p> 
        </div>  

      </div>
      
      <div className="itemDetail-left">

        {count === 0 ? (
          <ItemCount onAdd={onAdd} item={item} />
        ) : (
         < >
           <h4 className="itemDetails-left-sign">Agregado al carrito: " {item.title}", con un valor de : {`$${item.price*count}`}</h4>
            <Link to="/carrito" className="button-anchor" >
              <h4 className="itemDetail-button finish-buy-button" >Terminar Compra</h4>
              
            </Link>
            <Link to="/" className="button-anchor">
              <h4 className="itemDetail-button">seguir comprando</h4>
            </Link>
         </>
        )}
      </div>
    </div>
  );
};
