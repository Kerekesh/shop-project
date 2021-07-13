import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'

const ProductListItem = ({ name, description, type, color, price }) => {
    return (
        <Card>
            <CardContent>
                <h4>{name}</h4>
                <p>{description}</p>
                <div>Type: {type}</div>
                <div>Color: {color}</div>
                <div>{price} $</div>
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
    color: PropTypes.isRequired,
    price: PropTypes.number,
}

export default ProductListItem
