import React from 'react'
import { keys } from 'lodash'
import productsArray, { getProductObj } from '../Products/productsArray'


const CartTotal = ({
    productsInCart,
    productsObj = getProductObj(productsArray)
}) => {
    return (
        <div>
            Total: {keys(productsInCart).reduce((total, productId) => (
                total + productsInCart[productId] * productsObj[productId].price), 0)} $
        </div>
    )
}

export default CartTotal