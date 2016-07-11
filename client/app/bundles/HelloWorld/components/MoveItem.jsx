import React, { Component, PropTypes } from 'react'
import Move from './Move.jsx'

class MoveItem extends Component {
    render() {
        const { move } = this.props

        return (
            <div
                style={{ marginBottom: 20 }}>
                <Move
                    user_id={move.user_id}
                    piece_id={move.piece_id}

                    squares={move.squares}
                />

            </div>
        )
    }
}

export default MoveItem
//
//ProductItem.propTypes = {
//    product: PropTypes.shape({
//        title: PropTypes.string.isRequired,
//        price: PropTypes.number.isRequired,
//        inventory: PropTypes.number.isRequired
//    }).isRequired,
//    onAddToCartClicked: PropTypes.func.isRequired
//}
