import React from 'react'

import { useSelector } from 'react-redux'

import CartItem from '../CartItem'
import EmptyCartView from '../EmptyCartView'
import Header from '../../Header'

interface CartProductState {
  cart : any
}

const MainCartView = () => {

  const cartProducts = useSelector((state : CartProductState) => state.cart.cartList)
  console.log(cartProducts)

  return (
    <div>
        <Header />
        {
          (cartProducts.length===0) ? <EmptyCartView /> : (
            <ul>
              {cartProducts.map((cartItem : any) => <CartItem key={cartItem.id} cartItemDetails={cartItem} />)}
            </ul>
          )
        }
        
    </div>
  )
}

export default MainCartView