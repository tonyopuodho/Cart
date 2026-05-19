import React, { Fragment, useContext } from 'react'
import { ShoppingCartContext } from '../context/Context'

function CartTile({item}) {
    const { handleAddItemsTocart,cartItems, handleRemoveItemsFromCart } = useContext(ShoppingCartContext)
  return (
    <Fragment>
        <div className='grid grid-cols-3 items-start gap-5'>
            <div className='col-span-2 flex items-start gap-4'>
            <div className='w-20 h-20 bg-gray-500 p-2 rounded-md'>
                <img src={item?.thumbnail} alt="" className='w-full h-full object-cover' />
            </div>
            <div>
                <h1 className='text-base font-bold text-gray-900'>{item?.title}</h1>
                <button onClick={() => handleRemoveItemsFromCart(item,true)} className='py-2 px-6 bg-black text-white cursor-pointer rounded-md text-sm'>Remove</button>
            </div>
        </div>
         <div className='ml-auto'>
            <h3 className='text-gray-500 text-xl font-bold'>
                ${item?.totalPrice}
            </h3>
            <p className='font-extrabold text-gray-800'>Quantity: {item?.quantity}</p>
            <div className='mt-2 flex gap-2'>
                <button
                onClick={() => handleRemoveItemsFromCart(item,false)}
                disabled = {item.quantity === 1}
                className='disabled:opacity-40 border px-4 cursor-pointer'>-</button>
                <button onClick={() => handleAddItemsTocart(item)} className='border px-4 cursor-pointer'>+</button>
            </div>
        </div>
        </div>
        <hr className='w-full'/>
    </Fragment>
  )
}

export default CartTile