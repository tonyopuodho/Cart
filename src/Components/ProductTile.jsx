import React, { useContext } from 'react'
import { ShoppingCartContext } from '../context/Context'

function ProductTile({product}) {
  const { handleAddItemsTocart,cartItems,products} = useContext(ShoppingCartContext)
  return (
    <div className='bg-gray-200 shadow-md rounded-md p-2 flex flex-col'>
        <div className='w-full'>
         <img src={product?.thumbnail} alt="" className='w-full h-full object-cover hover:scale-110 transition-all'/>
        </div>
        <h1 className='text-xl font-extrabold text-gray-400 line-clamp-1'>{product?.title}</h1>
        <h1 className='text-3xl font-extrabold'>Ksh {product?.price}</h1> 
        <button disabled={products ? cartItems.findIndex((items) => items.id === product.id) > -1 : false} onClick={() => handleAddItemsTocart(product)} className='disabled:opacity-40 bg-black text-white py-2 w-full rounded-md cursor-pointer'>Add to cart</button>       
    </div>
  )
}

export default ProductTile