/* eslint-disable no-unused-vars */
import React from 'react'
import { keys } from 'lodash'
import productsArray, { getProductObj } from '../../../components/Products/productsArray'
import CartTotal from '../../../components/Cart/CartTotal'

const productsObj = productsArray.reduce((object, product) => ({
    ...object,
    [product.id]: product
}), {})

const Cart = ({
    productsInCart,
    productsObj = getProductObj(productsArray) }) => {
    return (
        <div>
            {keys(productsInCart).map((id) => (
                <div key={id}>
                    {productsObj[id].name} : {productsInCart[id]}
                </div>
            ))}
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default Cart
