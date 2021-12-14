import React from 'react'
import { keys } from 'lodash'
import { getProductObj } from '../Products/productsArray'
import CartProductListItem from './CartProductListItem'
import { connect } from 'react-redux'

const CartProductList = ({
    productsArray,
    productsInCart,
    productsObj = getProductObj(productsArray),
    CartItem = CartProductListItem,
}) => {
    if (productsArray.length === 0) {
        return null
    } else {
        return (
            <>
                {keys(productsInCart).map((id) => (
                    <CartItem
                        key={id}
                        product={productsObj[id]}
                        productCount={productsInCart[id]}
                    />
                ))}
            </>
        )
    }
}



const mapStateToProps = (state) => ({
    productsArray: state.products
})

export default connect(mapStateToProps)(CartProductList)