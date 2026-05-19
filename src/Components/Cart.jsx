import React from 'react'

function Cart() {
  return (
    <div className='max-w-5xl mx-auto max-md:max-w-xl py-4'>
       <h1 className='text-2xl font-extrabold text-center'>My cart page</h1>
       <div className='grid md:grid-cols-3 gap-12 mt-12'>
        <div className='col-span-2 space-y-4'></div>
       </div>
    </div>
  )
}

export default Cart