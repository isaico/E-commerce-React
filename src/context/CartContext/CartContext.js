import { createContext, useState, useContext } from "react";

//crea el contexto global del carrito
const CartContext = createContext([]);

//funcion para usar el contexto
export const ActivateCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  //Hook de Context
  const [cartList, setCartList] = useState([]);
  const [cartEmpty, setCartEmpty] = useState(true);
 

  //funciones del carrito  === === ===
  //contador del carrito con su retorno
  const contarElementosDelCart = () => {
    let cantidadesProducto = 0;
    cartList.forEach((e) => {
      cantidadesProducto += e.cantidad;
    });
    return cantidadesProducto;
  };
  //añade productos al carrito
  const addProduct = (prod) => {
    //si el carrito tiene elementos
    if (cartList.length > 0) {
      cartList.forEach((element) => {
        // si esta duplicado No lo permite ingresar
        if (element.producto.id.includes(prod.producto.id)) {
          setCartList([...cartList]);
          setCartEmpty(false);
        } else {
          setCartList([...cartList, prod]);
          setCartEmpty(false);
        }
      });
    } else {
      setCartList([...cartList, prod]);
      setCartEmpty(false);
    }
  };
  //elimina individualmente los productos del cart
  const removeProduct = (prodId) => {
    const filteredCart = cartList.filter(
      (element) => element.producto.id !== prodId
    );
    setCartList(filteredCart);
    if (filteredCart.length === 0) {
      setCartEmpty(true);
    }
  };
  //elimina todos los productos
  const removeAllProducts = () => {
    setCartList([]);
    setCartEmpty(true);
  };
  const totalPrice=()=>{
    let total = 0
    cartList.forEach( item =>{
      total+=item.producto.price*item.cantidad
    })
    return total
  }
  // === === ===
  return (
    <CartContext.Provider
      value={{
        cartList,
        addProduct,
        removeAllProducts,
        removeProduct,
        contarElementosDelCart,
        cartEmpty,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
