import React, { useContext } from 'react'
import NavigationBar from './Navigation'
import { ShoppingCartContext } from '../context/Context'
import ProductTile from './ProductTile'

function Products() {
    const {loading, products } = useContext(ShoppingCartContext)

  return (
    <div>
        <NavigationBar/>
        <div className='bg-white py-16'>
            <div className='max-w-7xl w-full md:w-[80%] mx-auto px-2 '>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-10'>
                  {loading ? <h1>Products loading please wait</h1> : products.map((product) => <ProductTile product={product}/>) }
                </div>

            </div>
        </div>
    </div>
  )
}

export default Products