import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './Header/Header'
import Main from './Main/Main'

const App = () => {

    // eslint-disable-next-line no-unused-vars
    const [cartData, setCartData] = useState({
        count: 0,
        totalPrice: 0,
    })

    const addProductToCart = (count, price) => {
        setCartData({
            count: cartData.count + count,
            totalPrice: cartData.totalPrice + count * price,
        })
    }

    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <button onClick={() => addProductToCart(5, 500)}>AddToCart</button>
            <Main />
        </>
    )
}

export default App