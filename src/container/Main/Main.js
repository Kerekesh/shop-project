import Container from '@material-ui/core/Container'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductsList from '../../components/Products/ProductsList'
import CartPage from '../../pages/CartPage/CartPage'

const Main = ({ addProductToCart }) => {
    return (
        <Container>
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => {
                        <ProductsList addProductToCart={addProductToCart} />
                    }} />

                <Route path="/cart" component={CartPage} />
            </Switch>
        </Container>
    )
}

export default Main