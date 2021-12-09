import { Link } from "react-router-dom";
// import  Anchor  from "./Anchor" puede servir para poner links en el futuro
import { Brand } from "./Brand"
import "./NavBar.css"
import { ActivateCartContext } from "../context/CartContext/CartContext";
import { CartWidget } from "./CartWidget"
import { useState } from "react";


const NavBar = () => {

    //uso del Context del carrito
    const { cartList,contarElementosDelCart } = ActivateCartContext()
 
    console.log("ahora llamando al context")
    let valorDelContador =contarElementosDelCart()
  
    return (
        
        <nav className="navBar">
            <Link to="/">
                <Brand name="Vegg-Burger" />
            </Link>
            <div >
            <h2>Categorias</h2>
                <div className="link-container">
                    <Link to="/categoria/veganas">
                        <h3>Veganas</h3>
                        {/* <Anchor link="#" name="veganas"/> */}
                    </Link>
                    <Link to="/categoria/vegetarianas"> 
                        {/* <Anchor link="#" name="vegetarianas"/> */}
                        <h3>Vegetarianas</h3>
                    </Link>
                </div>
                {/* <Anchor link="#" name="About"/>
                <Anchor link="#" name="Contact"/> */}
            </div>
            { cartList.lenght === 0 ? " " :
            <Link to="/carrito">
                <CartWidget />
            </Link>
            }
                
            <span>{valorDelContador}</span>
        </nav>
    )
}

export default NavBar


