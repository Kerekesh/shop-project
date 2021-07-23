/* eslint-disable no-unused-vars */
import React from 'react'
import { keys } from 'lodash'

const Cart = ({ productsInCart }) => {
    return (
        <div>
            {keys(productsInCart).map((id) => (
                <div key={id}>
                    {id} : {productsInCart[id]}
                </div>
            ))}
        </div>
    )
}

export default Cart
