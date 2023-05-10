import React, { useContext, useRef } from 'react'
import { IoMdClose } from "react-icons/io"
import ProductDetail from './ProductDetail'
import { DataContext } from '../../App'
const ItemDetail = ({ reviews, desc, size }) => {
    const { hideItemPreview, showPreview } = useContext(DataContext)
    const { productDetail } = useContext(DataContext)
    const previewRef = useRef(null)

    return (
        <aside style={{ display: showPreview }} className='itemDetail  sticky top-0 right-0 px-12 w-[30vw] h-fit text-gray-400 shadow-[-1px_0px_1px_0px] shadow-gray-200 dark:shadow-gray-600' >
            <IoMdClose className='absolute top-5 right-5 w-6 h-6 cursor-pointer' onClick={hideItemPreview} />
            <div className='itemPreview'>
                <img ref={previewRef} className='w-[90%] h-64 object-cover mt-14 mx-auto' src={productDetail && productDetail.image} alt='productImage' />
            </div >
            <ProductDetail reviews={reviews} size={size} />
        </aside>
    )
}

export default ItemDetail