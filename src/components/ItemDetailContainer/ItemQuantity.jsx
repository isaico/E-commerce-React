import React from 'react'

export const ItemQuantity = ({functionSetValue,opciones,defaultValue=1}) => {
    return (
        <select 
        type="select"
        onChange={(evt)=>functionSetValue(evt.target)}
        >
            {
                opciones.map((opcion)=>
                    
                    <option key={opcion}value={opcion}>{opcion}</option>
                )
                
            }
        </select>
    )
}
