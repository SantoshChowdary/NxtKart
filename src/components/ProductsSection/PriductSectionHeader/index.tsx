import React from 'react'
import {BsFilterRight} from 'react-icons/bs'
import { ProductPros } from '../ProductCard'

import './index.css'

interface SortingOptions {
    optionId : string,
    textToDisplay : string
}

type Props = {
    productsList : ProductPros[],
    sortProductsList : any
}

const productSortingOptions: SortingOptions[] = [
    {
        optionId : "HIGH-TO-LOW",
        textToDisplay : "Price(High - Low)" 
    },
    {
        optionId : "LOW-TO-HIGH",
        textToDisplay : "Price(Low - High)"
    }
]

const ProductSectionHeader = (props : Props) => {

    const changeSortBy = (e : any) => {
        props.sortProductsList(e.target.value)
    }

  return (
    <div className="products-header-section">
        <h1>All Products</h1>
        <div className="product-sorting-section">
            <BsFilterRight className="sort-by-icon" />
            <p>Sort by</p>
            <select className="product-select-by" onChange={changeSortBy}>
                {
                    productSortingOptions.map((item : SortingOptions) => 
                    <option key={item.optionId} value={item.optionId} className='sort-option'>{item.textToDisplay}</option>
                    )
                }
            </select>
        </div>
    </div>
  )
}

export default ProductSectionHeader
