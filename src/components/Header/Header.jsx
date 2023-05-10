import React, { useContext, useEffect, useState } from 'react'
import "../../App.css"
import { BsBag } from "react-icons/bs";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai"
import { DataContext } from '../../App';
import Cart from '../Cart/Cart';
const Header = () => {
    const { lightTheme, darkTheme, theme, itemCount, cartArray } = useContext(DataContext)
    const [showItem, setShowItem] = useState(true)
    return (
        <header className='shadow-sm px-24 h-12 flex justify-between items-center dark:shadow-sm dark:shadow-gray-600 dark:text-gray-100 '>
            <h1 className='flex-none w-12' >Estore</h1>
            <div className="flex items-center w-30">
                <div className="mx-2 cart_items relative cursor-pointer">
                    <BsBag className='' onClick={() => {
                        showItem ? setShowItem(false) : setShowItem(true)

                    }} />
                    <p className='text-[10px] bg-red-700  px-1 absolute -top-2 -right-1 text-white rounded-xl' >{itemCount}</p>
                    {showItem ? '' :
                        <div className="absolute top-12 -left-24 p-2 w-[18rem] h-auto bg-gray-300 shadow-sm z-50">
                            {cartArray.map(item => {
                                return <Cart key={item.id} data={item} />
                            }
                            )}
                        </div>
                    }
                </div>

                <div className="darkMode mx-2">
                    {theme ?
                        <BsFillMoonStarsFill className=" mx-1 cursor-pointer w-4 h-4 " onClick={darkTheme} /> :
                        <BsFillSunFill className='mx-1 w-4 h-4 cursor-pointer dark:fill-cyan-400' onClick={lightTheme} />
                    }
                </div>
                <AiOutlineUser className='mx-2 cursor-pointer w-6 h-6' />
            </div>
        </header >
    )
}

export default Header