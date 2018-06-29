import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class Board extends Component {
  state = {
    show: false,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true })
    })
  }
  render() {
    return (
      <div className={"board-container " + (this.state.show === true && "show")}>
        <div className="board">
          {this.props.board.map((position, key) =>
            <button
              onClick={() => this.props.move(key)}
              className={`cell p${key}`}
              key={key}
            >
              {this.props.board[key] === 'x' &&
                <p>x</p>
              }
              {this.props.board[key] === 'o' &&
                <p>o</p>
              }
            </button>
          )}
        </div>
      </div>
    )
  }
}

Board.propType = {
  board: PropTypes.array.isRequired,
  playerTurn: PropTypes.string.isRequired,
  move: PropTypes.func.isRequired
}

export default Board
