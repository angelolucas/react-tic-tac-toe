import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class Board extends Component {
  state = {
    board: ['','','','','','','','','',],
    winner: '',
    lineStyle: '',
    show: false,
  }

  // For initial effect on the board
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true })
    })
  }

  /**
   * Constant array with all possible plays to win.
   * This array is called in the `this.getWinner()` for each new move.
   * If some player marks the three positions of one of the items of array, wins.
   * Tic Tac Toe exemplifying positions:
   *
   *  0 │ 1 │ 2
   *  ──┘───└──
   *  3 │ 4 │ 5
   *  ──┐───┌──
   *  6 │ 7 │ 8
   */
  positionsToWin = [
    ['horizontal1', 0, 1, 2],
    ['horizontal2', 3, 4, 5],
    ['horizontal3', 6, 7, 8],
    ['vertical1', 0, 3, 6],
    ['vertical2', 1, 4, 7],
    ['vertical3', 2, 5, 8],
    ['diagonal1', 0, 4, 8],
    ['diagonal2', 6, 4, 2]
  ]

  // Square is a number from 0 to 8
  move = (square) => {
    let { board, winner, lineStyle } = this.state
    let { currentPlayer, updateScores, takeTurn } = this.props
    let getWinner

    // Verifications to cancel move
    if (winner || board[square] || board.indexOf('') === -1) return

    board[square] = currentPlayer // Apply 'x' or 'o' on the board

    getWinner = this.getWinner(board, currentPlayer)

    if (getWinner.winner) {
      winner = getWinner.winner
      lineStyle = getWinner.lineStyle
      updateScores(currentPlayer)
    } else {
      takeTurn()
    }

    this.setState({ board, winner, lineStyle })
  }

  getWinner(board, currentPlayer) {
    let winner, lineStyle

    this.positionsToWin.forEach((p) => {
      if (board[p[1]] === currentPlayer && board[p[2]] === currentPlayer && board[p[3]] === currentPlayer) {
        winner = currentPlayer
        lineStyle = p[0]
      }
    })

    return { winner: winner, lineStyle: lineStyle }
  }

  render() {
    return (
      <div className={`board-container ${this.state.show === true && `show`}`}>
        <div className={`board ${this.state.lineStyle}`}>
          {this.state.board.map((square, key) =>
            <button
              onClick={() => this.move(key)}
              className={`square p${key}`}
              key={key}
            >
              {this.state.board[key] === 'x' &&
                <p>X</p>
              }
              {this.state.board[key] === 'o' &&
                <p>O</p>
              }
            </button>
          )}
        </div>
      </div>
    )
  }
}

Board.propType = {
  updateScores: PropTypes.array.isRequired,
  takeTurn: PropTypes.func.isRequired,
  currentPlayer: PropTypes.string.isRequired
}

export default Board
