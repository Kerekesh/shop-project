/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './Header/Header'
import Main from './Main/Main'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/products.action'

const App = () => {

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const dispatch = useDispatch()

    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
        </>
    )
}

export default App
