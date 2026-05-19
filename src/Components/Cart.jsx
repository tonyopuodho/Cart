import React, { useContext } from 'react'
import { ShoppingCartContext } from '../context/Context'
import CartTile from './CartTile'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const {cartItems } = useContext(ShoppingCartContext)
  const navigate = useNavigate()
  return (
    <div className='max-w-5xl mx-auto max-md:max-w-xl py-4'>
       <h1 className='text-2xl font-extrabold text-center'>My cart page</h1>
       <div className='grid md:grid-cols-3 gap-12 mt-12'>
        <div className='col-span-2 space-y-4'>
          {
            cartItems?.length ?
            cartItems.map((item) => <CartTile item={item}/>)
            : <h1>No items found</h1>
          }
        </div>
        <div className='bg-gray-100 rounded-sm p-4 h-max w-full'>
                <h1 className='text-xl font-extrabold border-b'>Order summary</h1>
                <ul className='mt-4'>
                    <p className='flex flex-wrap gap-4 text-sm font-bold'>Total
                        <span>{cartItems.reduce((acc,curr) => acc + curr.totalPrice,0).toFixed(2)}</span>
                    </p>
                </ul>
                <div className='flex justify-center gap-2 mt-8'>
                    <button disabled={cartItems.length === 0} className='disabled:opacity-40 py-2 px-6 bg-black text-white cursor-pointer rounded-md text-sm'>Checkout</button>
                     <button className='py-2 px-6 bg-black text-white cursor-pointer rounded-md text-sm' onClick={() => navigate("/")}>Continue shopping</button>
                </div>
          </div>
       </div>
    </div>
  )
}

export default Cart