import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    menuButton: {
        marginRight: 5,
    },
    title: {
        flexGrow: 1,
    },
}))

const Header = () => {

    const classes = useStyles()

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Fake shop
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header