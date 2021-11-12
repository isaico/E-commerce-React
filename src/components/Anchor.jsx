// import React from 'react'
import "./Anchor.css"

const Anchor = (props) => {
    return (
        <a className= "nav__links"  href={props.link} >
           {props.name}
        </a>
    )
}
export default Anchor

