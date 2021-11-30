import { Link } from "react-router-dom";
import  Anchor  from "./Anchor"
import { Brand } from "./Brand"
import "./NavBar.css"

import { CartWidget } from "./CartWidget"

const NavBar = () => {
    return (
        
        <nav className="navBar">
            <Link to="/">
                <Brand name="Vegg-Burger" />
            </Link>
            <div >
                <Link to="/categoria/veganas">
                    
                    <Anchor link="#" name="veganas"/>
                </Link>
                <Link to="/categoria/vegetarianas"> 
                    <Anchor link="#" name="vegetarianas"/>
                </Link>
                {/* <Anchor link="#" name="About"/>
                <Anchor link="#" name="Contact"/> */}
            </div>
            <Link to="/carrito">
                <CartWidget />
            </Link>
        </nav>
    )
}

export default NavBar


