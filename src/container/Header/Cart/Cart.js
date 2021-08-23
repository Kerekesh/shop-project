/* eslint-disable no-unused-vars */
import React from 'react'
import CartTotal from '../../../components/Cart/CartTotal'
import CartProductList from '../../../components/Cart/CartProductList'
import { connect } from 'react-redux'

const Cart = ({ productsInCart }) => {
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart,
})

export default connect(mapStateToProps)(Cart)
