import React from 'react'
import { Grid } from '@material-ui/core'
import CartTotal from '../../components/Cart/CartTotal'
import CartProductList from '../../components/Cart/CartProductList'
import CartProductListItemExtended from '../../components/Cart/CartPeoductListItemExtended'

const CartPage = ({ productsInCart }) => {
    return (
        <>
            <h1> Cart Page</h1>
            <Grid container spacing={3}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}

export default CartPage