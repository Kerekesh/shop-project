import Container from '@material-ui/core/Container'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductsList from '../../components/Products/ProductsList'
import Testimonials from '../../components/Testimonials/Testimonials'
import CartPage from '../../pages/CartPage/CartPage'
import CheckoutPage from '../../pages/CheckoutPage/CheckoutPage'
import PaymentPage from '../../pages/Payment/PaymentPage'
import ShippingPage from '../../pages/Shipping/ShippingPage'

const Main = () => {
    return (
        <Container>
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => {
                        return (
                            <>
                                <ProductsList />
                                <Testimonials />
                            </>
                        )
                    }}
                />
                <Route
                    path="/cart"
                    component={CartPage}
                />
                <Route
                    path="/payment"
                    component={PaymentPage} />
                <Route
                    path="/shipping"
                    component={ShippingPage} />
                <Route
                    path="/checkout"
                    component={CheckoutPage} />
            </Switch>
        </Container>
    )
}

export default Main