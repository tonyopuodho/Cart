import React, { useContext } from 'react'
import NavigationBar from './Navigation'
import { ShoppingCartContext } from '../context/Context'

function Products() {
    const {loading, products } = useContext(ShoppingCartContext)
    if (loading) return <h1>Products loading please wait</h1>
    console.log(products) 
  return (
    <div>
        <NavigationBar/>
    </div>
  )
}

export default Products