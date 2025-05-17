import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(null)
export const CartProvider = (props)=>{
    const [item,setItem] =useState([])
    return(
        <CartContext.Provider value={{item,setItem}}>
            {props.children}
        </CartContext.Provider>
    )
}