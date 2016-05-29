import React, { Component } from 'react'
import ProductsContainer from './ProductsContainer.jsx'
import CartContainer from './CartContainer.jsx'

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>Shopping Cart Example</h2>
                <hr/>
                <ProductsContainer />
                <hr/>
                <CartContainer />
            </div>
        )
    }
}
