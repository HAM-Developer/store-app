import React from 'react'

const Cart = (props) => {
    const { title, image, price } = props.data
    return (
        <div className='flex my-4'>
            <img src={image} className='w-14 mr-2 inline-block' alt="" />
            <h2 className='text-gray-700' >{title}</h2>
            <p className='text-cyan-400'>${price}</p>
        </div>
    )
}

export default Cart