import React from 'react'
import { keys } from 'lodash'
import { getProductObj } from '../Products/productsArray'
import { connect } from 'react-redux'


const CartTotal = ({
    productsArray,
    productsInCart,
    productsObj = getProductObj(productsArray)
}) => {
    if (productsArray.length === 0) {
        return null
    } else {
        return (
            <div>
                Total: {keys(productsInCart).reduce((total, productId) => (
                    total + productsInCart[productId] * productsObj[productId].price), 0)} $
                {console.log(productsInCart)}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    productsArray: state.products
})

export default connect(mapStateToProps)(CartTotal)