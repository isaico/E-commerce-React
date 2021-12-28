import React from 'react'

export const ItemQuantity = ({onSelect,opciones}) => {
  

    return opciones.map((op)=> (
        <div key={`input-${op.value}`}>
            <input 
                onChange={()=>{
                    onSelect(op.value)}
                }
                defaultChecked={op.value===1 }
                type="radio"
                name="cantidades"
                id={`radio-${op.value}`}
                key={op.value+1}
            />
            <label htmlFor={op.value}>{op.text}</label>
        </div>
    ))
}
