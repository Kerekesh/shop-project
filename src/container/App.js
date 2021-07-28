/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './Header/Header'
import Main from './Main/Main'
import { omit } from 'lodash'

const App = () => {
    // eslint-disable-next-line no-unused-vars
    const [productsInCart, setProductsInCart] = useState({
        1: 5,
        2: 1
    })

    const addProductToCart = (id, count) => setProductsInCart({
        ...productsInCart,
        [id]: (productsInCart[id] || 0) + count,
    })
    console.log(productsInCart)

    const removeProductFromCart = (id) => {
        let prevProductsInCart = { ...productsInCart }
        delete prevProductsInCart[id]
        setProductsInCart(prevProductsInCart)
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => removeProductFromCart(1)}>
                Delete Product
            </button>
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart} />
        </>
    )
}

export default App
