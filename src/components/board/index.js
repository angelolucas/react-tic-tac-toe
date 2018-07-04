import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PositionsToWin from './PositionsToWin.js'
import './index.css'

class Board extends Component {
  state = {
    board: ['','','','','','','','','',],
    winner: '',
    lineStyleSVG: ''
  }

  // Square is a number from 0 to 8
  move = (square) => {
    let { board, winner, lineStyleSVG } = this.state
    let { currentPlayer, updateScores, takeTurn, draw } = this.props
    let getWinner

    // Verifications to cancel move
    if (winner || board[square]) return

    board[square] = currentPlayer // Apply 'x' or 'o' on the board

    getWinner = this.getWinner(board, currentPlayer)

    if (getWinner.winner) {
      // Someone wins
      winner = getWinner.winner
      lineStyleSVG = getWinner.lineStyleSVG
      updateScores(currentPlayer)
    } else if (board.indexOf('') === -1) {
      // Draw
      takeTurn()
      draw()
    } else {
      // Continue the game
      takeTurn()
    }

    this.setState({ board, winner, lineStyleSVG })
  }

  getWinner(board, currentPlayer) {
    let winner, lineStyleSVG, key

    for(key in PositionsToWin) {
      if (board[PositionsToWin[key].positions[0]] === currentPlayer &&
          board[PositionsToWin[key].positions[1]] === currentPlayer &&
          board[PositionsToWin[key].positions[2]] === currentPlayer) {
            winner = currentPlayer
            lineStyleSVG = PositionsToWin[key].svg
      }
    }

    return { winner: winner, lineStyleSVG: lineStyleSVG }
  }

  render() {
    return (
      <div className="board-container">
        <div className="board">
          {this.state.board.map((square, key) =>
            <button
              onClick={() => this.move(key)}
              className={`board__square p${key}`}
              key={key}
            >
              {// Draws X
                this.state.board[key] === 'x' &&
                <svg viewBox="0 0 100 100">
                  <rect x="-11.4" y="40.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -20.6017 49.7368)" width="122.2" height="18"/>
                  <rect x="40.7" y="-11.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -20.6609 49.7225)" width="18" height="122.2"/>
                </svg>
              }
              {// Draws O
                this.state.board[key] === 'o' &&
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"/>
                </svg>
              }
            </button>
          )}

          <svg className="board__drawing" viewBox="0 0 300 300">
            {/* Draws Board */}
            <rect x="10" y="191" width="280" height="18"/>
            <rect x="10" y="91" width="280" height="18"/>
            <rect x="91" y="10" width="18" height="280"/>
            <rect x="191" y="10" width="18" height="280"/>

            {/* Draws the winner's line */}
            { this.state.lineStyleSVG }
          </svg>
        </div>
      </div>
    )
  }
}

Board.propType = {
  updateScores: PropTypes.array.isRequired,
  takeTurn: PropTypes.func.isRequired,
  currentPlayer: PropTypes.string.isRequired,
  draw: PropTypes.func.isRequired
}

export default Board
