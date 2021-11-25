import React from 'react'

export const ItemDetail = ({item}) => {
    return (
        <div>
            <h2>{item.title}</h2>
            <img src={item.pictureUrl} alt="#"/>
            <p>{item.description}</p>
        </div>
    )
}


