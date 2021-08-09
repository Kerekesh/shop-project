import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    link: {
        color: 'white',
        textDecoration: 'none',
        textTransform: 'uppercase',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    favorite: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        '&:hover': {
            textDecoration: 'none',
        },
    }
})

const Menu = ({
    likesLength
}) => {
    const classes = useStyles()
    return (
        <>
            <Button color="inherit">
                <Link to="/" className={classes.link}>Home</Link>
            </Button>
            <Button color="inherit">
                <Link to="/" className={classes.link}>Products</Link>
            </Button>
            <Button color="inherit">
                <Link to="/payment" className={classes.link}>Payment</Link>
            </Button>
            <Button color="inherit">
                <Link to="/shipping" className={classes.link}>Shipping</Link>
            </Button>
            <div className={classes.favorite}>Favorites({likesLength})</div>
            <Button color="inherit">
                <Link to="/cart" className={classes.link}>Cart</Link>
            </Button>
        </>
    )
}

export default Menu