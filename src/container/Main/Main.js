import Container from '@material-ui/core/Container'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductsList from '../../components/Products/ProductsList'
import Testimonials from '../../components/Testimonials/Testimonials'
import CartPage from '../../pages/CartPage/CartPage'
import PaymentPage from '../../pages/Payment/PaymentPage'
import ShippingPage from '../../pages/Shipping/ShippingPage'

const Main = ({ addProductToCart, productsInCart, removeProductFromCart, changeProductQuantity }) => {
    return (
        <Container>
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => {
                        return (
                            <>
                                <ProductsList addProductToCart={addProductToCart} />
                                <Testimonials />
                            </>
                        )
                    }}
                />
                <Route
                    path="/cart"
                    render={() => {
                        return (
                            <CartPage addProductToCart={addProductToCart}
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                                changeProductQuantity={changeProductQuantity} />
                        )
                    }}
                />
                <Route
                    path="/payment"
                    component={PaymentPage} />
                <Route
                    path="/shipping"
                    component={ShippingPage} />
            </Switch>
        </Container>
    )
}

export default Main