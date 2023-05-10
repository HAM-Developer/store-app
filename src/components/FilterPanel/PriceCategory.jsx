import React, { useContext } from 'react'
import { DataContext } from '../../App'

const PriceCategory = () => {
    const { priceChange, setPrice, setPriceChange } = useContext(DataContext)

    function showPrice(e) {
        setPriceChange(e.target.value)

    }
    return (
        <div className='price font-semibold text-gray-600 py-8 pl-16 shadow-[0_1px_1px_0px] shadow-gray-200 dark:shadow-gray-600'>
            <h2 className='mb-3 dark:text-gray-100 text-gray-800 text-lg'>Price range</h2>
            <div className="price_range w-[70%]  flex flex-col justify-center ">
                <p className='text-center text-[1.4rem] text-gray-600 dark:text-gray-200' >{priceChange}</p>
                <input type="range" name="" min="100" max="1000" id="" onChange={showPrice} />
                <button className='block my-4 grow py-2 rounded-md text-white bg-cyan-500 hover:bg-cyan-400 transition-all' onClick={setPrice}>Set Price</button>
            </div>
        </div >
    )
}

export default PriceCategory