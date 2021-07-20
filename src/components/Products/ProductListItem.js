import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import "./ProductListItem.css"

class ProductListItem extends Component {
    state = {
        productCount: 1,
        productColor: "green",
    }

    onIncrementClick() {
        this.setState(prevState => ({
            productCount: prevState.productCount + 1,
        }))
    }

    onDecrementClick = () => {
        this.setState(prevState => ({
            productCount: prevState.productCount - 1,
        }))
    }

    changeColor = () => {
        this.setState({
            productColor: this.state.productColor == "green" ? "red" : "green",
        })
    }
    render() {
        const { name, description, type, color, price, image } = this.props

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
                            onClick={() => this.onDecrementClick()}
                        >
                            -
                        </Button>
                        <TextField
                            variant="outlined"
                            size="small"
                            value={this.state.productCount}
                        ></TextField>
                        <Button
                            variant="outlined"
                            onClick={() => this.onIncrementClick()}
                        >
                            +
                        </Button>
                    </div>
                </CardContent>
                <CardActions className="btn-wrap">
                    <Button variant="contained" color="primary">Add to cart</Button>
                </CardActions>

                <p>Color: {this.state.productColor}</p>
                <button onClick={() => this.changeColor()}>Change color</button>
            </Card>
        )
    }
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