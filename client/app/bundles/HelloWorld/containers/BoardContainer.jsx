import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
//import { addToCart } from '../actions/index.jsx'
import { getBoard } from '../reducers/board.jsx'
import Board from '../components/Board.jsx'


class BoardContainer extends Component {
    render() {
        const { board } = this.props
        return (
            <Board/>
                //{products.map(product =>
                //    <ProductItem
                //        key={product.id}
                //        product={product}
                //        onAddToCartClicked={() => this.props.addToCart(product.id)} />
                //)}
            //</Board>

        )
    }
}

//BoardContainer.propTypes = {
//    products: PropTypes.arrayOf(PropTypes.shape({
//        id: PropTypes.number.isRequired,
//        title: PropTypes.string.isRequired,
//        price: PropTypes.string.isRequired,
//        inventory: PropTypes.number.isRequired
//    })).isRequired,
//    addToCart: PropTypes.func.isRequired
//}

function mapStateToProps(state) {
    return {
        board: getBoard(state.board)
    }
}

export default connect(
    mapStateToProps
)(BoardContainer)
