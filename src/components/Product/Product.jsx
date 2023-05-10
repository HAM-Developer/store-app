import React, { useContext, useRef } from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'
import { DataContext } from '../../App'
const Product = (props) => {
    const { title, image, price, id } = props.data
    const { getProductDetail, addProduct, addItemBtn } = useContext(DataContext)
    const heart = useRef(null)
    function addFavorite() {
        heart.current.classList.toggle('addFavorite')
    }
    return (
        <div className='product my-4 text-gray-800 dark:text-gray-200 shadow-[0px_0px_5px_0px] shadow-gray-100 dark:shadow-gray-700 w-56 rounded-3xl relative' >
            <div className="heartIcon" onClick={addFavorite}>
                <HeartIcon ref={heart} className={"absolute top-3 cursor-pointer right-4  w-6 h-6 transition-all duration-200"} />
            </div>
            <img className='w-[100%] h-48 object-cover rounded-t-3xl ' src={image} alt="shirt" />
            <div className="product_info p-4">
                <h3 className='mb-2 font-semibold h-8 overflow-hidden text-lg text-gray-800 dark:text-gray-200 cursor-pointer' onClick={() => getProductDetail(id)}>{title}</h3>
                <div className="flex items-center justify-between dark:text-gray-200">
                    <div className='inline-block'>
                        <p className='text-[12px] text-gray-500 dark:text-gray-200'>Price</p>
                        <p className='font-semibold text-gray-800 dark:text-gray-200 '>$<span>{price}</span></p>
                    </div>
                    {!addItemBtn ? <button className='my-2 px-2 py-1 rounded-lg shadow-[0px_0px_4px_0px] shadow-gray-300   dark:shadow-gray-600 ' disabled>Added</button>
                        :
                        <button className='my-2 px-2 py-1 rounded-lg shadow-[0px_0px_4px_0px] shadow-gray-300   dark:shadow-gray-600 hover:bg-cyan-500 hover:text-white transition-all' onClick={() => addProduct(props.data)}>Add to cart</button>
                    }
                </div>
            </div>

        </div >
    )
}

export default Product