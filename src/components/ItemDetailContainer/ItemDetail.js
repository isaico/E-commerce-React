import {useState} from 'react'
import { ActivateCartContext } from '../../context/CartContext/CartContext'

export const ItemDetail = ({item}) => {
    //Hook
    const [count,setCount]=useState(1)
    
    //uso del Context
    const {
        
        cartList,
        addProduct,
      
    }=ActivateCartContext()

    //funciones 
    function onAdd(cant){
        setCount(cant)
        addProduct({producto:item, cantidad: count})
        
    }
    console.log(cartList)
    return (
        <div>
            <h2>{item.title}</h2>
            <img src={item.pictureUrl} alt="#"/>
            <p>{item.description}</p>
            <button onClick={()=>onAdd(count)} >Agregar al Carrito</button>
        </div>
    )
}


