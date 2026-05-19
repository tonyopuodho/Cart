import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null)

function ShoppingCartProvider({children}){
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const [cartItems,setCartItems] = useState([])
    const navigate = useNavigate()
    async function fetchProducts(){
        const apiRequest = await fetch("https://dummyjson.com/products")
        const apiResponse = await apiRequest.json()
        
        if (apiResponse && apiResponse?.products) {
            setProducts(apiResponse?.products)
            setLoading(false)
        }
    }

    function handleAddItemsTocart(getProducts){
        let copyExistingCartItem = [...cartItems]
        const findCartItems = copyExistingCartItem.findIndex((item) => item.id === getProducts.id)

        if (findCartItems === -1) {
            copyExistingCartItem.push({
                ...getProducts,
                quantity: 1,
                totalPrice: getProducts?.price
            })
        } else {
            console.log("Item already added")
        }

        setCartItems(copyExistingCartItem)
        localStorage.setItem("items",JSON.stringify(copyExistingCartItem))
        navigate("/cart")
    }

    function handleRemoveItemsFromCart(getProducts,isFullyRemoved){
        let copyExistingCartItem = [...cartItems]
        const findCartItems = copyExistingCartItem.findIndex((item) => item.id === getProducts.id)

        if (isFullyRemoved) {
            copyExistingCartItem.splice(findCartItems,1)
        } else {
            copyExistingCartItem[findCartItems] = {
                ...copyExistingCartItem[findCartItems],
                quantity: copyExistingCartItem[findCartItems].quantity - 1,
                totalPrice: ((copyExistingCartItem[findCartItems].quantity - 1) * copyExistingCartItem[findCartItems].price)
            }
        }

    }

    useEffect(() => {
        fetchProducts()
        setCartItems(JSON.parse(localStorage.getItem("items")) || [])
    },[])    
    return (
        <ShoppingCartContext.Provider value={{ products,loading,handleAddItemsTocart,cartItems }}>{children}</ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider