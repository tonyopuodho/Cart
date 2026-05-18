import { createContext, useState } from "react";

export const ShoppingCartContext = createContext(null)

function ShoppingCartProvider({children}){
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    async function fetchProducts(){
        const apiRequest = await fetch("https://dummyjson.com/products")
        const apiResponse = await apiRequest.json()
        
        if (apiResponse && apiResponse?.products) {
            setProducts(apiResponse?.products)
            setLoading(false)
        }
    }

    
    return (
        <ShoppingCartContext.Provider value={{ products,loading }}>{children}</ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider