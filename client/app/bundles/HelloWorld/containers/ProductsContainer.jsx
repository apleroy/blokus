import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/index.jsx'
import { getVisibleProducts } from '../reducers/products.jsx'
import ProductItem from '../components/ProductItem.jsx'
import ProductsList from '../components/ProductsList.jsx'

class ProductsContainer extends Component {
    render() {
        const { products } = this.props
        return (
            <ProductsList title="Products">
                {products.map(product =>
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToCartClicked={() => this.props.addToCart(product.id)} />
                )}
            </ProductsList>
        )
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    })).isRequired,
    addToCart: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        products: getVisibleProducts(state.products)
    }
}

export default connect(
    mapStateToProps,
    { addToCart }
)(ProductsContainer)
