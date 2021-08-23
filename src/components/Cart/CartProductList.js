import React from 'react'
import { keys } from 'lodash'
import productsArray, { getProductObj } from '../Products/productsArray'
import CartProductListItem from './CartProductListItem'

const CartProductList = ({
    productsInCart,
    productsObj = getProductObj(productsArray),
    CartItem = CartProductListItem,
}) => {
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

export default CartProductList