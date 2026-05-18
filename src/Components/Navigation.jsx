import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

function NavigationBar() {
  return (
    <div className='w-full h-[10vh] fixed top-0 bg-gray-300 shadow-md p-2 flex items-center'>
        <div className='max-w-7xl w-full px-2 md:w-[80%] mx-auto flex justify-between items-center'>
            <h1 className='font-extrabold text-3xl text-white'>Shopping Cart</h1>
            <FaShoppingCart className='text-2xl text-white'/>
        </div>
    </div>
  )
}

export default NavigationBar