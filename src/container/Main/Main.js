import Container from '@material-ui/core/Container'
import React from 'react'
import ProductsList from '../../components/Products/ProductsList'

const Main = ({ addProductToCart }) => {
    return (
        <Container>
            <ProductsList addProductToCart={addProductToCart} />
        </Container>
    )
}

export default Main