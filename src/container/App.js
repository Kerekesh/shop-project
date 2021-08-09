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
    const removeProductFromCart = (id) => {
        setProductsInCart(omit(productsInCart, id))
    }
    const changeProductQuantity = (id, count) => {
        setProductsInCart({
            ...productsInCart,
            [id]: count,
        })
    }

    const [likeButtonsState, setLikeButtonsState] = useState({
        1: true,
        2: true
    })

    const changeLike = (id) => {
        setLikeButtonsState((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

    const likesLength = Object.keys(likeButtonsState).filter(item => likeButtonsState[item] === true).length

    return (
        <>
            <CssBaseline />
            <Header
                productsInCart={productsInCart}
                likesLength={likesLength}
            />
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
                likeButtonsState={likeButtonsState}
                changeLike={changeLike}
            />

        </>
    )
}

export default App
