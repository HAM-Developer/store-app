import React from 'react'
import FilterCategory from './FilterCategory'
import PriceCategory from './PriceCategory'
const FilterPanel = () => {

    return (
        <aside className=' min-w-[22vw] h-fit pt-2 shadow-[1px_0px_1px_0px] shadow-gray-200   dark:shadow-gray-600 text-gray-800 m-0 dark:text-gray-100'>
            <h1 className='shadow-[0_1px_1px_0px] shadow-gray-200 dark:shadow-gray-600 py-4 pl-16 font-semibold text-lg' >Filter</h1>
            <FilterCategory />
            <PriceCategory />
        </aside>
    )
}

export default FilterPanel