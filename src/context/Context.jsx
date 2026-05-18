import { createContext, useState } from "react";

export const ShoppingCartContext = createContext(null)

function ShoppingCartProvider({children}){
    const [products,setProducts] = useState([])
    async function fetchProducts(){
        const apiRequest = await fetch("https://dummyjson.com/products")
        const apiResponse = await apiRequest.json()
        console.log(apiResponse)
    }
    return (
        <ShoppingCartContext.Provider value={{}}>{children}</ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider