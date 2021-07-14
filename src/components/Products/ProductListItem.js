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
                        onClick={() => count == 0 ? setCount(count) : setCount(count - 1)}
                    >
                        -
                    </Button>
                    <TextField variant="outlined" size="small" value={count}></TextField>
                    <Button
                        variant="outlined"
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions>
                <Button>Add to cart</Button>
            </CardActions>
        </Card>
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

export default ProductListItem
