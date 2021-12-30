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
function validateInput(value,id){
  const input=document.getElementById(`${id}`)
  if(value !== ""){
    input.className="valid"
    return value
  }else{
    input.className="invalid"
    return "invalid"
  }
}

export const Cart = () => {
  //hook de orden
  const [idOrder, setIdOrder]=useState("")
  //funcion de orden de compra
  const generateOrder = (e) => {
    e.preventDefault();
    console.log(e.target.nombre.id)
    const order= {}
    const buyer ={
      nombre:validateInput(e.target.nombre.value,e.target.nombre.id),
      apellido:validateInput(e.target.apellido.value,e.target.apellido.id),
      telefono:validateInput(e.target.telefono.value,e.target.telefono.id),
      email:validateEmail()
    }
    //condicion para generar orden de compra
    if(buyer.email!=="invalid" && buyer.email!==""){
      if(buyer.nombre !=="invalid" && buyer.nombre !== ""){
        if(buyer.apellido !=="invalid" && buyer.apellido !== ""){
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
  
        const db= getFirestore()
        db.collection("orders").add(order)
        .then(resp=>setIdOrder(resp.id))
        .catch(err=> console.log(err))
        }
      }
    }
  }

  //uso del Context del carrito
  const { cartList, removeAllProducts, removeProduct, cartEmpty ,totalPrice } =
    ActivateCartContext();
  //===

  return (
    <div id="cart">
      
      {cartEmpty ? (
        <div className="cart-empty">
          <h2>Carrito Vacio!!</h2>
          <Link to="/" className="cart-link-home">
            <h4 className="cart-btn-hidden" >Descrubrir productos</h4>
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
          
           <h3 className="cart-totalPrice">Precio total de la compra: {`$${totalPrice()}`}</h3>
           <div className="cart-options">
              <h4 >Opciones del Carrito:</h4>
              <h4  className="cart-button-delete cart-opt-button" onClick={removeAllProducts}>Eliminar Todos!
              </h4>
             <Link className="cart-link-home" to="/">
                <h4 className="cart-button-delete cart-opt-button cart-btn-home" >seguir Comprando</h4>
            </Link>
           </div>
          <div className="cart-main">
            <div className="cart-products-container">
              {cartList.map((prod) => (
                <div key={prod.producto.id} id={prod.producto.id} className="cart-product">
                  <h2 className="cart-product-title">{prod.producto.title}</h2>
                  <img src={prod.producto.pictureUrl} alt="paquete del producto" />
                  <h3 className="cart-product-desc">{`Cantidad : ${prod.cantidad}`}</h3>
                  <h3 className="cart-product-desc">{`Precio unitario : $${prod.producto.price}`}</h3>
                  <h3 className="cart-product-desc">{`Precio total : $${prod.producto.price * prod.cantidad}`}</h3>
                  <h3 className="cart-button-delete" onClick={() => removeProduct(prod.producto.id)}>
                    {" "}
                    Eliminar producto
                  </h3>
                </div>
              ))}
            </div>
            <div className="form">
                <form onSubmit={generateOrder}>  
                  <input id="nombre" name="nombre" type="text" placeholder="Nombre"/>
                  <input id="apellido" name="apellido" type="text" placeholder="Apellido" />
                  <input id="telefono" name="telefono" type="tel" placeholder="Telefono" />
                  <input id="email" name="email" type="email" placeholder="E-Mail"/>
                  <input id="confEmail" name="confirmacion" type="email" placeholder="confirmar E-Mail"/>
                  
                  <div className="form-button-container">
                    <button type="submit" className="form-button">Generar orden de compra</button>
                    <button type="reset"className="form-button cart-reset-btn" >Reiniciar datos</button>
                  
                  </div>
                </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
