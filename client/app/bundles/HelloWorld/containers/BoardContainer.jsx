import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import moves  from '../reducers/moves.jsx'
import MoveItem from '../components/MoveItem.jsx'
import MovesList from '../components/MovesList.jsx'
import Board from '../components/Board.jsx'
import createMove from '../actions/index.jsx'

class BoardContainer extends Component {

    //componentDidMount() {
    //    let {
    //        dispatch = this.props
    //    }
    //}
    render() {

        const { moves } = this.props
        console.log(moves);
        return (

                //<MovesList title="Moves">
                //    {moves.map(move =>
                //        <MoveItem
                //            key={move.id}
                //            move={move}
                //            />
                //    )}
                //
                //</MovesList>
                <Board squares={moves.squares} moves={moves.moves} />

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
    //console.log(JSON.stringify(state))
    return {
        moves: state.moves
    }
}

//const mapDispatchToProps = (dispatch) => {
//    return {
//        onClick: (move) => {
//            dispatch(createMove(move))
//        }
//    }
//}


export default connect(
    mapStateToProps
    //mapDispatchToProps
)(BoardContainer)
