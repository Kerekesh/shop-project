import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import ProductListItem from './ProductListItem'
import productsArray from './productsArray'

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
                spacing={3}
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

                {productsArray.map(({
                    id, name, description, type, color, price, image
                }) => (

                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <ProductListItem
                            image={image}
                            name={name}
                            description={description}
                            type={type}
                            color={color}
                            price={price}
                        />
                    </Grid>
                ))}

            </Grid>
        </>
    )
}

export default ProductsList