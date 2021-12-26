import React from 'react';
import { useState } from 'react';
import { ItemQuantity } from './ItemQuantity';

const options =[
  {
    value:1,
    text: "1  unidad"
  },
  {
    value:2,
    text: "2 unidades"
  }
]

export  const ItemCount = ({onAdd}) => {
    const [value,setValue]=useState(1)
    const funcionSetValue = (valor)=>{
      setValue(valor)
    }
  return (
    <div>
        <ItemQuantity  opciones={options} onSelect={funcionSetValue}  />
        <button onClick={()=>onAdd(value)} >Agregar al Carrito</button>
    </div>
  );
}
