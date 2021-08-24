import React, { Component } from 'react'
import axios from 'axios'

class CheckoutPage extends Component {
    state = {
        name: "",
        address: "",
        isOrderSend: false,
    }

    orderName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    orderAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    sendForm = (e) => {
        e.preventDefault();
        axios.post("https://my-json-server.typicode.com/kznkv-skillup/server/orders",
            {
                name: this.setState.name,
                address: this.setState.address,
            }
        )
            .then((res) => res.data)
            .then(({ name, address }) =>
                this.setState({
                    name,
                    address,
                    isOrderSend: true,
                })
            )
    }

    renderForm = () => {
        return (
            <div className="form-order">
                <h2>Checkout Form</h2>
                <form onSubmit={this.sendForm}>
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={this.state.name}
                            onChange={this.orderName}
                        />
                    </div>
                    <br />
                    <div>
                        <input
                            type="text"
                            placeholder="Your Address"
                            value={this.state.address}
                            onChange={this.orderAddress}
                        />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }

    renderMessage = () => {
        return (
            <div>
                Dear {this.state.name}, thanks for your order!
                <div>Delivery address: {this.state.address}</div>
            </div>
        )
    }

    render() {
        return (
            <>
                <h1>Checkout Page</h1>
                {console.log(this.state)}
                {this.state.isOrderSend !== true
                    ? this.renderForm()
                    : this.renderMessage()}
            </>
        )
    }
}

export default CheckoutPage