import { Link } from "react-router-dom";
// import  Anchor  from "./Anchor" puede servir para poner links en el futuro
import { Brand } from "./Brand"
import "./NavBar.css"
import { ActivateCartContext } from "../context/CartContext/CartContext";
import { CartWidget } from "./CartWidget"



const NavBar = () => {

    //uso del Context del carrito
    const { contarElementosDelCart } = ActivateCartContext()
    
    
    let valorDelContador =contarElementosDelCart()
    
    return (
        
        <nav className="navBar">
            <Link to="/">
                <Brand/>
            </Link>
            <div >
           <Link to="/" className="navBar__link" id="navBar-categoria"> <h2>Categorias</h2></Link>
                <div className="navBar__link-container">
                    <Link to="/categoria/veganas" className="navBar__link">
                        <h3>Veganas</h3>
                        
                    </Link>
                    <Link to="/categoria/vegetarianas" className="navBar__link"> 
                        {/* <Anchor link="#" name="vegetarianas"/> */}
                        <h3>Vegetarianas</h3>
                    </Link>
                </div>
                {/* <Anchor link="#" name="About"/>
                <Anchor link="#" name="Contact"/> */}
            </div>
            <div  className="navBar__cart-container">
                { valorDelContador ?  
                <Link to="/carrito">
                    <CartWidget/>
                </Link>
                : " "
                }
                    
                <span className="navBar__cart-number">{valorDelContador}</span>
            </div>
        </nav>
    )
}

export default NavBar


