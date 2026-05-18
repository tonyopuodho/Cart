import React from 'react'

function ProductTile({products}) {
  return (
    <div className='bg-gray-300 shadow-md rounded-md p-2 flex flex-col'>
        <div className='w-full'>
         <img src={products?.thumbnail} alt="" className='w-full h-full object-cover hover:scale-110 transition-all'/>
        </div>
        <h1 className='text-2xl font-extrabold text-gray-400'>{products?.title}</h1>
        <h1 className='text-3xl font-extrabold'>{products?.price}</h1>        
    </div>
  )
}

export default ProductTile