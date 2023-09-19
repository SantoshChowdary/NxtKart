import React from 'react'
import {useParams} from 'react-router-dom' 

const ProductDetails = () => {
    const match : any = useParams()
    console.log(match.id)
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails