import  Anchor  from "./Anchor"
import { Brand } from "./Brand"
import "./NavBar.css"
import "./Brand.css"
import { CartWidget } from "./CartWidget"

const NavBar = () => {
    return (
        
        <nav className="navBar">
            <Brand name="TiendaPiola" />
            <div >
                <Anchor link="#" name="Home"/>
                <Anchor link="#" name="Shop"/>
                <Anchor link="#" name="About"/>
                <Anchor link="#" name="Contact"/>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar


