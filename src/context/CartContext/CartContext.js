
import { createContext,useState,useContext } from "react";

//crea el contexto global del carrito
const CartContext = createContext([])

//funcion para usar el contexto 
export const ActivateCartContext =()=> useContext(CartContext)

 function CartContextProvider({children}){
    //Hook de Context
    const [cartList, setCartList]=useState([])
    const [cartEmpty,setCartEmpty]=useState(true)

    //funciones del carrito  === === ===

    const addProduct = (prod)=>{

        //si el carrito tiene elementos
        if(cartList.length>0){
            console.log("tengo mas de 1 item")

            cartList.forEach(element => {
                
                // si esta duplicado No lo permite ingresar
                if(element.producto.id.includes(prod.producto.id) ){
                    
                    setCartList([...cartList])
                    setCartEmpty(false)
                }else{
                    
                    setCartList([...cartList,prod])
                    setCartEmpty(false)
                }
            });
        }else{
            
            setCartList([...cartList,prod])
            setCartEmpty(false)
        }
    }
    //elimina individualmente los productos del cart
    const removeProduct = (prodId)=>{
        const filteredCart = cartList.filter( element => element.producto.id !== prodId)
        setCartList(filteredCart)
        if(filteredCart.length===0){

            setCartEmpty(true)
        }
        
    }  
    //elimina todos los productos
    const removeAllProducts = ()=>{
        setCartList([])
        setCartEmpty(true)
    }
    
    // === === ===
    return(
        <CartContext.Provider value={{
            cartList,
            addProduct,
            removeAllProducts,
            removeProduct,
            cartEmpty
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider
