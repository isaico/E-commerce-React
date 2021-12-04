import React from 'react';
// import { useState } from 'react';
// import { ItemQuantity } from './ItemQuantity';

// const options =[1,2,3,4,5,6]

export  const ItemCount = ({onAdd,defaultValue}) => {

    //Hook
    // const [value,setValue]=useState(1)
    
    // const funcionSetValue = (value)=>{
    // setValue(value)
    //   console.log(value)
    // }
  return (
    <div>
       
        {/* <ItemQuantity opciones={options} onSelect={funcionSetValue} defaultValue={value}/> */}
        <button onClick={()=>onAdd(defaultValue)} >Agregar al Carrito</button>
    </div>
  );
}
