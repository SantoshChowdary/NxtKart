import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import Cookies from 'js-cookie'
import {useDispatch} from 'react-redux'
import { addItemToCart } from '../../../store/Slices/cartSlice'

import Header from '../../Header'
import './index.css'

// interface Product {
//   availability: any,
//   brand: any,
//   description: any,
//   id: any,
//   image_url: any,
//   price: any,
//   rating: any,
//   title: any,
//   total_reviews: any,
// }

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState<any>([])
  const [hasFetchedData, setStatusOfFetchedData] = useState(false)

    const match : any = useParams()
    const dispatch = useDispatch()

    const getProductDetails = async () => {
      const url =  `https://apis.ccbp.in/products/${match.id}`
      const jwtToken = Cookies.get('jwt_token')
      const options = {
        method : "GET",
        headers : {
          Authorization : `Bearer ${jwtToken}`
        }
      }
      const response = await fetch(url, options)
      const data = await response.json()
      setProductDetails(data)
      setStatusOfFetchedData(true)
      console.log(productDetails)
    }

    useEffect(() => {
        getProductDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //redux
    const addItemToCard = (productDetails : any) => {
      // dispatching an add action
      dispatch(addItemToCart(productDetails))
    }

    if (!hasFetchedData) {
      return (
          <>
              <Header />
              <div className="products-section">
                  <div className="loader-spinner"></div>
              </div>
          </>
      )
    }

    return (
      <>
        <Header />
      <div className="product-details-success-view"> 
        <div className="product-details-container">
          <img src={productDetails.image_url} alt="product" className="product-image" />
          <div className="product">
            <h1 className="product-name">{productDetails.title}</h1>
            <p className="price-details">Rs {productDetails.price}/-</p>
            <div className="rating-and-reviews-count">
              <div className="rating-container">
                <p className="rating">{productDetails.rating}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  alt="star"
                  className="star"
                />
              </div>
              <p className="reviews-count">{productDetails.total_reviews} Reviews</p>
            </div>
            <p className="product-description">{productDetails.description}</p>
            <div className="label-value-container">
              <p className="label">Available:</p>
              <p className="value">{productDetails.availability}</p>
            </div>
            <div className="label-value-container">
              <p className="label">Brand:</p>
              <p className="value">{productDetails.brand}</p>
            </div>
            <hr className="horizontal-line" />
            <div className="quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
              >
                <BsDashSquare className="quantity-controller-icon" />
              </button>
              <p className="quantity">1</p>
              <button
                type="button"
                className="quantity-controller-button"
              >
                <BsPlusSquare className="quantity-controller-icon" />
              </button>
            </div>
            <button
              type="button"
              className="button add-to-cart-btn"
              onClick={() => addItemToCard(productDetails)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      </>
    )
}

export default ProductDetails