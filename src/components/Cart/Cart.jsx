import React from "react";
import { ActivateCartContext } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import { getFirestore } from "../../firebase/firebase";
import { useState } from "react";
import "./Cart.css"

//Funciones del formulario
function validateEmail(){
  const inputEmailConf = document.getElementById("confEmail")
  const inputMail = document.getElementById("email")
  if(inputMail.value!== "" && inputMail.value===inputEmailConf.value ){
    inputEmailConf.className="valid"
    return inputMail.value
    
  }
  else{
    inputEmailConf.className="invalid"
    return "invalid"
  }
}
function validateInput(value){
  if(value !== ""){
    return value
  }else{
    return "invalid"
  }
}

export const Cart = () => {
  //hook de orden
  const [idOrder, setIdOrder]=useState("")
  //funcion de orden de compra
  const generateOrder = (e) => {
    e.preventDefault();
    
    const order= {}
    const buyer ={
      nombre:validateInput(e.target.nombre.value),
      apellido:validateInput(e.target.apellido.value),
      telefono:validateInput(e.target.telefono.value),
      email:validateEmail()
    }
    //condicion para generar orden de compra
    if(buyer.email!=="invalid" && buyer.email!==" "){

      order.buyer= buyer
      order.total = totalPrice()
      order.items= cartList.map(item=>{
        const nombre = item.producto.title
        const id = item.producto.id
        const cantidad=item.cantidad
        const precio = item.producto.price  * cantidad
  
        return {nombre,precio,id,cantidad}
      })
  
      order.date=firebase.firestore.Timestamp.fromDate(new Date())
      console.log(order)
  
      const db= getFirestore()
      db.collection("orders").add(order)
      .then(resp=>setIdOrder(resp.id))
      .catch(err=> console.log(err))
    }
  }

  //uso del Context del carrito
  const { cartList, removeAllProducts, removeProduct, cartEmpty ,totalPrice } =
    ActivateCartContext();
  console.log(cartList);
  //===

  return (
    <div id="cart">
      {cartEmpty ? (
        <div>
          <h2>Carrito Vacio</h2>
          <Link to="/">
            <button>Descrubrir productos</button>
          </Link>
        </div>
      ) : (
        <div>
          {idOrder ? 
          <>
            <h3>Gracias por tu compra!</h3>
            <h4>el codigo de su pedido es : {idOrder} </h4> 
          </>
          : " "
          }
          <h4>Eliminar productos del Carrito:</h4>
          <button onClick={removeAllProducts}>Eliminar Todos!</button>
          {cartList.map((prod) => (
            <div key={prod.producto.id} id={prod.producto.id}>
              <h2>{prod.producto.title}</h2>
              <img src={prod.producto.pictureUrl} alt="paquete del producto" />
              <h3>{`cantidades: ${prod.cantidad}`}</h3>
              <h3>{`precio por unidad: $${prod.producto.price}`}</h3>
              <h3>{`precio total: $${prod.producto.price * prod.cantidad}`}</h3>
              <button onClick={() => removeProduct(prod.producto.id)}>
                {" "}
                eliminar producto
              </button>
            </div>
          ))}
          <h3>Precio total de la compra: {`$${totalPrice()}`}</h3>
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
