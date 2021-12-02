import React from 'react';
import { useState } from 'react';

export  const ItemCount = ({onAdd,defaultValue}) => {

    //Hook
    // const [count,setCount]=useState(1)
    // setCount(defaultValue)
    
  return (
    <div>
        <button onClick={()=>onAdd(defaultValue)} >Agregar al Carrito</button>
    </div>
  );
}
