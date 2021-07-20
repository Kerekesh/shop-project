import React from 'react'


import AddToCart from "../../../components/Products/ProductListItem"

const Cart = () => {

    return (
        <AddToCart props>
            <div>
                <div>{props.quantity}</div>
                <div>{sum} $</div>
            </div>

        </AddToCart>

    )
}

export default Cart