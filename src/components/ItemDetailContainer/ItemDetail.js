import {useState} from 'react'
import { ActivateCartContext } from '../../context/CartContext/CartContext'
import { ItemCount } from './ItemCount'
import { Link } from 'react-router-dom'

export const ItemDetail = ({item}) => {
    // //Hook
    const [count,setCount]=useState(0)
    
    //uso del Context
    const {
        
        cartList,
        addProduct,
      
    }=ActivateCartContext()

    //funciones 
    function onAdd(cant){
        setCount(cant)
        addProduct({producto:item, cantidad: cant})  
    }
    console.log(cartList)
    console.log(count)
    return (
        <div>
            <h2>{item.title}</h2>
            <img src={item.pictureUrl} alt="#"/>
            <p>{item.description}</p>
            {
                count === 0 ? 
                <ItemCount onAdd={onAdd} defaultValue={1}/>
                : 
                <Link to="/cart">
                
                    <button  >
                        Terminar Compra
                    </button> 
                </Link>
                // <Link to="/carrito">
                
                //     <button  >
                //         Terminar Compra
                //     </button> 
                // </Link>

            }
                  
            
        </div>
    )
}


