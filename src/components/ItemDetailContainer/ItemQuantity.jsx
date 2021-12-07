import React from 'react'

export const ItemQuantity = ({onSelect,opciones}) => {
    console.log(opciones)
    // console.log(funcionSetValue(opciones[0]))

    return opciones.map((op)=> (
        <>
            <input 
                onChange={()=>{
                    onSelect(op.value)}
                }
                type="radio"
                name="cantidades"
                id={op.value}
            />
            
            <label for={op.value}>{op.text}</label>
        </>
    ))
}
