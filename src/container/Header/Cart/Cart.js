/* eslint-disable no-unused-vars */
import React from 'react'
import CartTotal from '../../../components/Cart/CartTotal'
import CartProductList from '../../../components/Cart/CartProductList'

const Cart = ({ productsInCart }) => {
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default Cart
