import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { ShoppingCartContext } from '../context/Context'
import { Link } from 'react-router-dom'

function NavigationBar() {
  const { cartItems } = useContext(ShoppingCartContext)
  return (
    <div className='w-full h-[10vh] fixed top-0 bg-gray-400 shadow-md p-2 flex items-center z-10'>
        <div className='max-w-7xl w-full px-2 md:w-[80%] mx-auto flex justify-between items-center'>
            <h1 className='font-extrabold text-3xl text-white'>Shopping Cart</h1>
            <div className='relative'>
              <Link to={'/cart'}>
               <FaShoppingCart className='text-2xl text-white'/>
              </Link>             
              <div className={`absolute h-8 w-8 bg-white rounded-full  text-black top-[-13px] left-[20px] flex items-center justify-center ${cartItems.length === 0 ? 'hidden' : 'block'}`}>
                {cartItems.length}
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default NavigationBar