import { Link } from "react-router-dom";
// import  Anchor  from "./Anchor" puede servir para poner links en el futuro
import { Brand } from "./Brand"
import { ActivateCartContext } from "../../context/CartContext/CartContext"
import { CartWidget } from "./CartWidget"
import "./NavBar.css"



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
                    <div > 
                        <CartWidget/>
                        <span className="navBar__cart-number">{valorDelContador}</span>
                    </div>
                </Link>
                : 
                <Link to="/carrito">
                    <div className="cart-opacity"> 
                        <CartWidget/>
                        <span className="navBar__cart-number">{valorDelContador}</span>
                    </div>
                </Link>
                }
                    
            </div>
        </nav>
    )
}

export default NavBar


