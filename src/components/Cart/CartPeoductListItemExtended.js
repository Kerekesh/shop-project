import React from 'react'
import { Button, Card, CardContent, Grid, makeStyles } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import Quantity from '../Quantity/Quantity'

const useStyles = makeStyles({
    media: {
        width: 100,
        height: 'auto',
        marginRight: 20,
    },
    cardWrap: {
        display: 'flex',
        padding: 15
    },
})

const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity
}) => {
    const classes = useStyles()

    return (
        <>
            <Grid item xs={12} sm={6} key={product.id}>
                <Card className={classes.cardWrap}>
                    <div>
                        <img src={product.image}
                            className={classes.media} />
                    </div>
                    <CardContent>
                        <div>{product.name}</div>
                        <p>
                            Price for one items: {product.price}
                        </p>
                        <p>Count: {productCount}</p>
                        <Quantity
                            minCount={0}
                            onDecrementClick={() =>
                                productCount === 1
                                    ? removeProductFromCart(product.id)
                                    : changeProductQuantity(product.id, productCount - 1)
                            }
                            onIncrementClick={() => changeProductQuantity(product.id, productCount + 1)}
                            count={productCount}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => removeProductFromCart(product.id)}>
                            <DeleteIcon />
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default CartProductListItemExtended