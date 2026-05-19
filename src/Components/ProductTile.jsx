import React from 'react'

function ProductTile({products}) {
  return (
    <div className='bg-gray-200 shadow-md rounded-md p-2 flex flex-col'>
        <div className='w-full'>
         <img src={products?.thumbnail} alt="" className='w-full h-full object-cover hover:scale-110 transition-all'/>
        </div>
        <h1 className='text-xl font-extrabold text-gray-400 line-clamp-1'>{products?.title}</h1>
        <h1 className='text-3xl font-extrabold'>Ksh {products?.price}</h1> 
        <button className='bg-black text-white py-2 w-full rounded-md cursor-pointer'>Add to cart</button>       
    </div>
  )
}

export default ProductTile