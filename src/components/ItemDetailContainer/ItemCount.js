import React from 'react';
import { useState } from 'react';
import { ItemQuantity } from './ItemQuantity';

const options =[
  {
    value:1,
    text: "1 pack"
  },
  {
    value:2,
    text: "2  packs"
  }
  ,
  {
    value:3,
    text: "3 packs"
  }
  ,
  {
    value:4,
    text: "4 packs"
  }
]

export  const ItemCount = ({onAdd,item}) => {
    //Hook
    const [value,setValue]=useState(1)
    
    const funcionSetValue = (valor)=>{
      setValue(valor)
    }
    //funcion para renderizar seccion segun el valor de value
    const renderValue = ()=>{
      return (
      <div>
        <img className="itemDetail-img" src={`${item.pictureUrl}`} alt="#" />
        <h4 className="itemDetail-price">{`$${item.price*value}`}</h4>
      </div>
    )}

  return (
    <>
      { 
        renderValue()
      }
      <h3 className='itemDetail-left-title'>Cantidades a pedir:</h3>
      <div className='itemDetail-counter'>
        <ItemQuantity  opciones={options} onSelect={funcionSetValue}  />
      </div>
        <h4 className='itemDetail-button button-addToCart' onClick={()=>onAdd(value)} >Agregar al Carrito</h4>
        
    </>
  );
}
