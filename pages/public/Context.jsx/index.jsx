import { createContext, useState } from "react";

export const CartContext= createContext()

export const CartProvider = ({children})=>{
  const list = [
    { id: 1, name: "shoes", price: 21 },
    { id: 2, name: "t-shirt", price: 33 },
    { id: 3, name: "hat", price: 90 },
  ];
  const [listProducts,setListProducts]=useState(list)

  return(
    <CartContext.Provider value={{listProducts}}>{children}</CartContext.Provider>
  )
}