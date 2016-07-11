import React, { Component, PropTypes } from 'react'

export default class Move extends Component {
    render() {
        const { user_id, piece_id, squares } = this.props
        return <div> UserId: {user_id}, PieceId: {piece_id}, Squares: {squares} </div>
    }
}

//Product.propTypes = {
//    id: PropTypes.number,
//    quantity: PropTypes.number,
//    title: PropTypes.string
//}
