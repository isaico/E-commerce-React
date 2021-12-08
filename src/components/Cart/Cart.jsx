import React from "react";
import { ActivateCartContext } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
export const Cart = () => {
  //uso del Context del carrito
  const { cartList, removeAllProducts, removeProduct,cartEmpty } = ActivateCartContext();
  console.log(cartList)
  //===
  return (
    <div id="cart">
      {
	  cartEmpty ? 
        
         <div>
            <h2>Carrito Vacio</h2>
          <Link to="/">
            <button>Descrubrir productos</button>
          </Link>
         </div>
       :  
        cartList.map((prod) => (
          <div key={prod.producto.id} id={prod.producto.id}>
            <h2>{prod.producto.title}</h2>
            <img src={prod.producto.pictureUrl} alt="paquete del producto" />
            <h3>{`cantidades: ${prod.cantidad}`}</h3>
            <h3>{`precio por unidad: ${prod.producto.price}`}</h3>
            <h3>{`precio total:${prod.producto.price * prod.cantidad}`}</h3>
            <button onClick={() => removeProduct(prod.producto.id)}>
              {" "}
              eliminar producto
            </button>
          </div>
        ))
      }
      <h4>Eliminar productos del Carrito:</h4>
      <button onClick={removeAllProducts}>Eliminar!</button>
    </div>
  );
};
