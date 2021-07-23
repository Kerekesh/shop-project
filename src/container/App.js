/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './Header/Header'
import Main from './Main/Main'

const App = () => {
    // eslint-disable-next-line no-unused-vars
    const [productsInCart, setProductsInCart] = useState({
        1: 5,
        2: 1,
    })

    const addProductToCart = (count, price) => { }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main addProductToCart={addProductToCart} />
        </>
    )
}

export default App
