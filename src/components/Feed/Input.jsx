import React, { useRef, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { sortArrayList } from '../../utils/constants'
const Input = () => {
    const [sortActive, setSortActive] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const inputRef = useRef()
    function showInput() {
        setInputValue(inputRef.current.value)
    }
    return (
        <div>
            <div className="searchBar relative ml-12 w-[40vw]">
                <input type="search" ref={inputRef} className='w-[100%] border-none text-gray-400 outline-none bg-gray-100 rounded-[1.5rem] px-16 py-3 text-base' name="search" placeholder='Search...' />
                <BsSearch className='absolute top-[50%] left-8 translate-y-[-50%] fill-gray-400 w-5 h-5' />
                <button type='submit' className='absolute top-[50%] border right-0 rounded-r-[1.5rem] rouded-b-[1.5rem] translate-y-[-50%] fill-gray-400  px-4 py-[13px] bg-cyan-400' onClick={showInput}>
                    <BsSearch className='fill-gray-100 w-5 h-5' />
                </button>
            </div>
            <p className='my-6 ml-12'>Search results for <span className='text-black dark:text-gray-200'>"{inputValue}"</span></p>
            <div className="categories_array flex items-center mt-4 mb-4 text-gray-500 dark:text-gray-200 ml-12">
                <p className='mr-6'>Sort :</p>
                <div className="sortArray">
                    {
                        sortArrayList.map(sortArrayItem =>
                            <button className={`${sortActive === sortArrayItem.sort ? "shadow-[0px_0px_4px_0px] shadow-gray-200   dark:shadow-gray-600 px-3 py-1 rounded-md mx-2 bg-cyan-500 text-white transition-all" : "shadow-[0px_0px_4px_0px] shadow-gray-200   dark:shadow-gray-600 px-3 py-1 rounded-md mx-2 transition-all hover:bg-cyan-500 hover:text-white "}`} key={sortArrayItem.sort} onClick={() => { setSortActive(sortArrayItem.sort) }}>{sortArrayItem.sort}
                            </button>
                        )

                    }
                </div>
            </div>
        </div>
    )
}

export default Input