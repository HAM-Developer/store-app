import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../App'
import axios from 'axios';
// import { categoryItemList } from "../../utils/constants"
// import { FiChevronDown } from "react-icons/fi"
const FilterCategory = () => {
    const { categoryFilter } = useContext(DataContext)
    //Dynamic Filter Category Animation
    // function showCategories() {
    //     const categoriesContainer = document.querySelector(".categories_check")
    //     const categoryListItems = document.querySelectorAll('.category_item').length
    //     const categoryItemHeight = document.querySelector('.category_item').offsetHeight
    //     const categoryChevron = document.querySelector('.chevron_down')
    //     let categoriesContainerHeight = `${categoryListItems * categoryItemHeight}px`
    //     if (categoriesContainer.style.height === categoriesContainerHeight) {
    //         categoriesContainer.style.height = `${categoryItemHeight * 5}px`
    //     } else {
    //         categoriesContainer.style.height = categoriesContainerHeight
    //     }
    //     categoryChevron.classList.toggle('chevron_rotate')
    // }
    const [categoryList, setCategoryList] = useState([])

    const getApiData = () => {
        axios.get('https://fakestoreapi.com/products/categories').then(json => setCategoryList(json.data))
    }
    useEffect(() => {
        getApiData()
    }, [])
    return <div className="item_categories font-semibold py-8 pl-16 shadow-[0_1px_1px_0px] shadow-gray-200 dark:shadow-gray-600">
        <h2 className='mb-3 text-lg '>Categories</h2>
        <div className="categories_check transition-all duration-300 h-[10rem] overflow-hidden  dark:text-gray-100 text-gray-600 flex flex-col justify-between">
            {categoryList && categoryList.map(list =>
                <div className="category_item py-1" key={list}>
                    <input className='cursor-pointer accent-cyan-500' type="checkbox" name={list} value={list} id={list} onClick={categoryFilter} /><label htmlFor={list.item} className=' dark:text-gray-300 capitalize cursor-pointer pl-2 dark:hover:text-gray-100 hover:text-gray-900 '>{list} </label> </div>
            )}
        </div>
        {/* {categoryItemList.length <= 5 ? "" :
            <p className='cursor-pointer ml-6 mt-2 transition-all' onClick={showCategories}>Others <FiChevronDown className='chevron_down inline transition-all duration-300' /></p>
        } */}
    </div>
}
export default FilterCategory