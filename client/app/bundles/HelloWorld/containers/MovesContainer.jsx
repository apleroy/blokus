import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getVisibleMoves } from '../reducers/moves.jsx'
import MoveItem from '../components/MoveItem.jsx'
import MovesList from '../components/MovesList.jsx'

class MovesContainer extends Component {
    render() {
        const { moves } = this.props
        return (
            <MovesList title="Moves">
                {moves.map(move =>
                    <MoveItem
                        key={move.id}
                        move={move}
                        />
                )}
            </MovesList>

        )
    }
}

//ProductsContainer.propTypes = {
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
        moves: getVisibleMoves(state.moves)
    }
}

export default connect(
    mapStateToProps
)(MovesContainer)
