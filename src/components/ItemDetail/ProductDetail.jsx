import { HeartIcon } from '@heroicons/react/24/outline'
import React, { useRef, useContext } from 'react'
import { DataContext } from '../../App'
const ProductDetail = () => {
    const { productDetail } = useContext(DataContext)
    const heart = useRef(null)
    function addFavorite() {
        heart.current.classList.toggle('addFavorite')
    }
    const productReviewRef = useRef(null)
    const productConRef = useRef(null)
    const productDescRef = useRef(null)
    const descBtnRef = useRef("More")
    function showDescription() {
        let descConHeight = window.getComputedStyle(productConRef.current).height
        if (descConHeight === "64px") {
            productConRef.current.style.height = window.getComputedStyle(productDescRef.current).height
            descBtnRef.current.childNodes[1].innerHTML = "Less"
        } else {
            productConRef.current.style.height = "64px"
            descBtnRef.current.childNodes[1].innerHTML = "More"
        }
    }
    return (
        <div>
            <div className="productItem_info">
                <h1 className='text-black dark:text-gray-300 text-2xl font-semibold mt-4 mb-2'>{productDetail && productDetail.title}</h1>
                <div className="product_desc h-[64px]  relative transition-all duration-200 overflow-hidden" ref={productConRef}>
                    <p className='  text-[14px] ' ref={productDescRef}  >{productDetail && productDetail.description}
                        <span className='absolute bottom-0 right-0  bg-white  text-cyan-800 font-semibold cursor-pointer dark:bg-[#182747] dark:text-gray-300 transition-all duration-75' onClick={showDescription} ref={descBtnRef}>
                            ...Read <span>More</span></span>
                    </p>
                </div>
            </div>
            <div className="productItem_detailList mt-4 ">
                <div className="detail_container">
                    <p className="font-semibold w-[50%] text-center py-2 cursor-pointer border-b-2 border-cyan-500 ">Detail</p>

                </div>
                <div className="productDetail_wrap w-[278px]  overflow-hidden ">
                    <div className="productDetail_con relative w-[556px] h-32 flex items-center transition-all duration-300" ref={productReviewRef}>
                        <div className="productItem_detail w-[300px] fle flex-col  px-8 ">
                            <div className="productItem_wrapper block my-4">
                                <span className='py-1 px-6 mx-2 border'>Rating</span>
                                <span className='py-1 px-6 mx-2 border'>{productDetail && productDetail.rating.rate}</span>
                            </div>
                            <div className="productItem_wrapper block my-4">
                                <span className='py-1 px-6 mx-2 border'>Count</span>
                                <span className='py-1 px-6 mx-2 border'>{productDetail && productDetail.rating.count}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productItem_status my-10 px-4 flex justify-between items-center">
                <HeartIcon className='w-8 h-8' ref={heart} onClick={addFavorite} />
                <button className='py-2 px-4 bg-cyan-500 text-white rounded-xl'  >Price - Add to Cart</button>
            </div>
        </div >
    )
}

export default ProductDetail