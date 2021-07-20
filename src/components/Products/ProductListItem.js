import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import "./ProductListItem.css"



const ProductListItem = ({ name, description, type, color, price, image }) => {

    const [count, setCount] = useState(1)
    const [quantity, calculateQuantity] = useState(0)
    const [sum, calculatePrice] = useState(0)

    const AddToCart = ({ quantity, sum }) => {
        calculateQuantity(quantity + count)
        calculatePrice(sum + price)
    }


    return (
        <Card>
            <CardContent>
                <div className="product-img">
                    <img src={image} />
                </div>
                <h4>{name}</h4>
                <p>{description}</p>
                <div>Type: {type}</div>
                <div>Color: {color}</div>
                <div className="product-price">{price} $</div>
                <div className="product-quantity">
                    <Button
                        variant="outlined"
                        onClick={() => setCount(count - 1)}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField variant="outlined" size="small" value={count}></TextField>
                    <Button
                        variant="outlined"
                        onClick={() => setCount(count + 1)}
                        disabled={count >= 10}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="btn-wrap">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => AddToCart()}
                >Add to cart</Button>
            </CardActions>
            <p>{quantity}</p>
            <p>{sum}</p>
        </Card >
    )
}

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
}
ProductListItem.defaultProps = {
    description: "No description"
}

export { ProductListItem, AddToCart }
