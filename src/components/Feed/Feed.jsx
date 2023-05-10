import React, { useContext, useEffect, useState } from 'react'
import Product from '../Product/Product'
import Input from './Input'
import axios from 'axios';
import { DataContext } from '../../App'
const Feed = () => {
    const { feedProduct } = useContext(DataContext)

    return (
        <div className='pt-12  text-gray-400'>
            <Input />
            {feedProduct &&
                <div className="relative productFeed flex justify-evenly flex-wrap mt-8">
                    {
                        feedProduct.map(dataset => {
                            return <Product data={dataset} key={dataset.id} />
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Feed