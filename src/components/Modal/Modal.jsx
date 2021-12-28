import React from 'react';
import "./Modal.css"
export const Modal = (prop) => {
  return (
    <div className='modal'>
      <p>{prop.msj}</p>
    </div>
  );
}
