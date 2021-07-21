import React from 'react'

const Cart = ({ count, totalPrice }) => {
    return (
        <div>
            <div>{count}</div>
            <div>{totalPrice} $</div>
        </div>

    )
}

export default Cart