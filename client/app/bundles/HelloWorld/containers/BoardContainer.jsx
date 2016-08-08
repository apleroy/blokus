import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import moves  from '../reducers/moves.jsx'
import MoveItem from '../components/MoveItem.jsx'
import MovesList from '../components/MovesList.jsx'
import Board from '../components/Board.jsx'
import Square from '../components/Square.jsx'
import createMove from '../actions/index.jsx'

class BoardContainer extends Component {

    //componentDidMount() {
    //    let {
    //        dispatch = this.props
    //    }
    //}
    render() {

        const { moves, dispatch } = this.props
        console.log("in board container: " + moves);
        console.log("in board container: " + moves.squares);
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
                //<Board  />
                <Board squares={moves.squares} moves={moves.moves} dispatch={dispatch}>

                </Board>
//moves.squares.map(square =>
            //
            //    <Square
            //        key={square.id}
            //        square={square}
            //        x={square.x}
            //        y={square.y}
            //        onSquareClicked={() => this.props.createMove(square.x + "_" + square.y)}
            //    />
            //)
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

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
//        onClick: (move) => {
//            dispatch(createMove(move))
//        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardContainer)
