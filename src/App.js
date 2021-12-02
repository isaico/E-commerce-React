import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { CartContextProvider } from "./context/CartContext/CartContext";
import  CartContextProvider from "./context/CartContext/CartContext"
//CSS
import "./App.css";
import "./components/NavBar.css";
import "./components/Item.css";
//Components
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { ComponenteVacio } from "./components/ComponenteVacio";

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/categoria/:urlCategoria" element={<ItemListContainer />} />
            <Route exact path="/detalle/:urlDetalleItem" element={<ItemDetailContainer />} />
            <Route exact path="/categoria/:urlCategoria/detalle/:urlDetalleItem" element={<ItemDetailContainer />} />
            <Route exact path="/carrito" element={<Cart />} />
            <Route exact path="/cart" element={<ComponenteVacio />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
