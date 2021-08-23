import React from 'react'
import { Grid } from '@material-ui/core'
import CartTotal from '../../components/Cart/CartTotal'
import CartProductList from '../../components/Cart/CartProductList'
import CartProductListItemExtended from '../../components/Cart/CartProductListItemExtended'
import { connect } from 'react-redux'

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductQuantity
}) => {
    return (
        <>
            <h1> Cart Page</h1>
            <Grid container spacing={3}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuantity={changeProductQuantity}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart,
})

export default connect(mapStateToProps)(CartPage)