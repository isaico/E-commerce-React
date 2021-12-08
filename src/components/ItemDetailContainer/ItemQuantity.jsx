import React from 'react'

export const ItemQuantity = ({onSelect,opciones}) => {
    // console.log(opciones)
    // console.log(funcionSetValue(opciones[0]))

    return opciones.map((op)=> (
        <>
            <input 
                onChange={()=>{
                    onSelect(op.value)}
                }
                defaultChecked={op.value===1    }
                type="radio"
                name="cantidades"
                id={op.value}
                key={op.value+1}
            />
            
            <label for={op.value}>{op.text}</label>
        </>
    ))
}
