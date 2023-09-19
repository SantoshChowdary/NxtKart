import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

export interface ProductPros {
  productDetails : {
    brand : string,
    id : number,
    image_url : string,
    price : number,
    rating : string,
    title : string
  }
}

const ProductCard = (props : ProductPros) => {
  const {productDetails} = props
  // console.log(productDetails)
  return (
    <Link to={`products/${productDetails.id}`} className='link-item'>
      <li className="product-item">
        <img src={productDetails.image_url} alt="product" className="thumbnail" />
        <h3 className="title">{productDetails.title}</h3>
        <p className="brand">by {productDetails.brand}</p>
        <div className="product-details">
          <p className="price">Rs {productDetails.price}/-</p>
          <div className="rating-container">
            <p className="rating">{productDetails.rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </li>
    </Link>
  )
}

export default ProductCard