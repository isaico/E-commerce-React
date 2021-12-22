import React from "react";
import { ActivateCartContext } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css"

const generateOrder = (e) => {
  e.preventDefault();
  //obtengo datos del comprador
  const buyer ={
    nombre:e.target.nombre.value,
    apellido:e.target.apellido.value,
    telefono:e.target.telefono.value,
    email:validateEmail()
  }
  console.log(buyer)
  if(buyer.email!=="invalid"){
    //bloque de codigo para generar la orden de compra correctamente
  }else{
    //bloque de codigo para rechazar order y  pedir qe reescriba el mail

  }
}

function validateEmail(){
  const inputEmailConf = document.getElementById("confEmail")
  const inputMail = document.getElementById("email")
  if(inputMail.value===inputEmailConf.value){
    inputEmailConf.className="valid"
    return inputMail.value
    
  }
  else{
    inputEmailConf.className="invalid"
    return "invalid"
  }
}
export const Cart = () => {
  //uso del Context del carrito
  const { cartList, removeAllProducts, removeProduct, cartEmpty } =
    ActivateCartContext();
  console.log(cartList);
  //===
  return (
    <div id="cart">
      <h4>Eliminar productos del Carrito:</h4>
      <button onClick={removeAllProducts}>Eliminar Todos!</button>
      {cartEmpty ? (
        <div>
          <h2>Carrito Vacio</h2>
          <Link to="/">
            <button>Descrubrir productos</button>
          </Link>
        </div>
      ) : (
        <div>
          
          {cartList.map((prod) => (
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
          ))}
          <div className="form">
              <form onSubmit={generateOrder}>
                
                <input name="nombre" type="text" placeholder="Nombre"/>
                <input name="apellido" type="text" placeholder="Apellido" />
                <input name="telefono" type="tel" placeholder="Telefono" />
                <input id="email" name="email" type="email" placeholder="E-Mail"/>
                <input id="confEmail" name="confirmacion" type="email" placeholder="confirmar E-Mail"/>
                <button type="submit">Generar orden de compra</button>
                <button type="reset" >reiniciar</button>
              </form>
            </div>
        </div>
      )}
    </div>
  );
};
