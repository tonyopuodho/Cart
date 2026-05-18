import { createContext } from "react";

export const ShoppingCartContext = createContext(null)

function ShoppingCartProvider({children}){
    return (
        <ShoppingCartContext.Provider value={{}}>{children}</ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider