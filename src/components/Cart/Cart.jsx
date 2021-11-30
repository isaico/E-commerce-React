import React from "react";
import { ActivateCartContext } from "../../context/CartContext/CartContext";

export const Cart = () => {
  const { cartList, removeAllProducts, removeProduct,cartEmpty } = ActivateCartContext();
  console.log(cartList)

  return (
    <div id="cart">
      {
	  cartEmpty ? 
        <h2>Carrito Vacio</h2>
       :  
        cartList.map((prod) => (
          <div key={prod.producto.id} id={prod.producto.id}>
            <h2>{prod.producto.title}</h2>
            <img src={prod.producto.pictureUrl} alt="paquete del producto" />
            <h3>{prod.producto.price}</h3>
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
