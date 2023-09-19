import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import Header from '../../Header'
import ProductCard from '../ProductCard'
import ProductSectionHeader from '../PriductSectionHeader'
import ProductFilteringSection from '../PorductFilteringSection'
import { FilteredGroup } from '../PorductFilteringSection'
import NotFound from '../../NotFound'

import './index.css'

const ProductsSection = () => {

    const [productsList, setProductsList] = useState<any[]>([])
    const [hasFetchedData, setStatusOfFetchedData] = useState(false)
    const [changeFilteredGroup, onChangeSearchText] = useState<FilteredGroup>({
        searchText : "",
        category : "",
        rating : ""
      })
    
    const sortProductsList = (sortOption : any) => {
        console.log(sortOption)
        if (sortOption === "LOW-TO-HIGH"){
            const lowSortedArray = [...productsList].sort((a: any , b : any) => a.price - b.price);
            setProductsList(lowSortedArray)
        } else if ( sortOption === "HIGH-TO-LOW") {
            const highSortedArray = [...productsList].sort((a: any , b : any) => b.price - a.price);
            setProductsList(highSortedArray)
        }
        
    }

    const getProducts = async () => {
        try {
            const url: string = `https://apis.ccbp.in/products?sort_by=PRICE_HIGH&category=${changeFilteredGroup.category}&title_search=${changeFilteredGroup.searchText}&rating=${changeFilteredGroup.rating}`
            const jwtToken = Cookies.get("jwt_token")
            const options = {
                method : 'GET',
                headers : {
                    Authorization : `Bearer ${jwtToken}`
                }
            }
            const fetchData = await fetch(url, options)
            const responseData = await fetchData.json()

            setProductsList(responseData.products)
            setStatusOfFetchedData(true)
            console.log(productsList)
        } catch(error: any) {
            console.log("Data fetching error :",error)
        }
    }

    useEffect( () => {
        getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasFetchedData, changeFilteredGroup])

    // Loader
    if (!hasFetchedData) {
        return (
            <>
                <Header />
                <div className="products-section">
                    <h1>All Products</h1>
                    <div className="loader-spinner"></div>
                </div>
            </>
        )
    }

    if (productsList.length === 0){
        return (
            <>
            <Header />
            <div className="products-section">
                <ProductFilteringSection onChangeSearchText={onChangeSearchText} />
                <div className="products-failure-section">
                    <NotFound />
                </div>
            </div>
        </>
        )
    } else {
        return (
            <>
                <Header />
                <div className="products-section">
                    <ProductFilteringSection onChangeSearchText={onChangeSearchText} />
                    <div className="products-display-section">
                        <ProductSectionHeader productsList={productsList} sortProductsList={sortProductsList}  />
                        <ul className='products-list'>
                            {productsList.map(item => <ProductCard key={item.id} productDetails={item}  />)}
                        </ul>
                    </div>
                </div>
            </>
    
      )
    }

    
}

export default ProductsSection