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

    const [likeButtonsState, setLikeButtonsState] = useState({
        1: true,
        2: true,
        3: false
    })
    const addProductToCart = (id, count) => setProductsInCart({
        ...productsInCart,
        [id]: (productsInCart[id] || 0) + count,
    })

    const removeProductFromCart = (id) => {
        setProductsInCart(omit(productsInCart, id))
    }

    const changeProductQuantity = (id, count) => {
        setProductsInCart({
            ...productsInCart,
            [id]: count,
        })
    }

    const toggleLikeButtonsState = (id) => {
        setLikeButtonsState({
            ...likeButtonsState,
            [id]: true
        })

    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
                likeButtonsState={likeButtonsState}
                toggleLikeButtonsState={toggleLikeButtonsState}
            />

        </>
    )
}

export default App
