/* eslint-disable no-unused-vars */
import React from 'react'
import { keys } from 'lodash'
import productsArray from '../../../components/Products/productsArray'

const productsObj = productsArray.reduce((object, product) => ({
    ...object,
    [product.id]: product
}), {})

const Cart = ({ productsInCart }) => {
    return (
        <div>
            {keys(productsInCart).map((id) => (
                <div key={id}>
                    {productsObj[id].name} : {productsInCart[id]}
                </div>
            ))}
            <div>
                Total: {keys(productsInCart).reduce((total, productId) => (
                    total + productsInCart[productId] * productsObj[productId].price), 0)} $
            </div>
        </div>
    )
}

export default Cart
