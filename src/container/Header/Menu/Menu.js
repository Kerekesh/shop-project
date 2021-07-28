import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'


const Menu = () => {
    return (
        <>
            <Button color="inherit">
                <Link to="/">Home</Link>
            </Button>
            <Button color="inherit">
                <Link to="/">Products</Link>
            </Button>
            <Button color="inherit">
                <Link to="/payment">Payment</Link>
            </Button>
            <Button color="inherit">
                <Link to="/shipping">Shipping</Link>
            </Button>
            <Button color="inherit">
                <Link to="/cart">Cart</Link>
            </Button>
        </>
    )
}

export default Menu