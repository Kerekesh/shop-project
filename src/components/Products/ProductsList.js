/* eslint-disable react/jsx-key */
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import productsArray from './productsArray'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'

const GridsArray = productsArray.map((grid) => (
    <Grid item xs={12} sm={6} md={4}>
        <Card>
            <CardContent>
                <h4>{grid.name}</h4>
                <p>{grid.description}</p>
                <div>{grid.type}</div>
                <div>{grid.color}</div>
                <div>{grid.price}</div>
            </CardContent>
            <CardActions>
                <Button>Add to cart</Button>
            </CardActions>
        </Card>
    </Grid>
))
const useStyles = makeStyles({
    title: {
        margin: '30px 0',
    },
})
const ProductsList = () => {
    const classes = useStyles()

    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                align="center"
                className={classes.title}
            >
                Products List
            </Typography>

            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={3}
            >
                {GridsArray}
            </Grid>
        </>
    )
}

export default ProductsList
