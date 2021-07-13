import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import ProductListItem from './ProductListItem'

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
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone XS"
                        description="This is iPhone XS"
                        type="phone"
                        color="red"
                        price={500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone 12"
                        description="This is iPhone 12"
                        type="phone"
                        color="gold"
                        price={1500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone 12"
                        description="This is iPhone 12"
                        type="phone"
                        color="gold"
                        price={1500}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
