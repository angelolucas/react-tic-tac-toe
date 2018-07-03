import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class Board extends Component {
  state = {
    board: ['','','','','','','','','',],
    winner: '',
    lineStyle: ''
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
    let { currentPlayer, updateScores, takeTurn, draw } = this.props
    let getWinner

    // Verifications to cancel move
    if (winner || board[square]) return

    board[square] = currentPlayer // Apply 'x' or 'o' on the board

    getWinner = this.getWinner(board, currentPlayer)

    if (getWinner.winner) {
      // Someone wins
      winner = getWinner.winner
      lineStyle = getWinner.lineStyle
      updateScores(currentPlayer)
    } else if (board.indexOf('') === -1) {
      // Draw
      takeTurn()
      draw()
    } else {
      // Continue the game
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
            {(() => {
              switch (this.state.lineStyle) {
                case 'diagonal1': return <rect className="board__diagonal-line" x="-48" y="145.5" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 149.3965 362.382)" width="396" height="10"/>; break
                case 'diagonal2': return <rect className="board__diagonal-line" x="-48" y="145" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -62.132 150)" width="396" height="10"/>; break
                case 'horizontal1': return <rect className="board__horizontal-line" x="10" y="45" width="280" height="10" />; break
                case 'horizontal2': return <rect className="board__horizontal-line" x="10" y="145" width="280" height="10"/>; break
                case 'horizontal3': return <rect className="board__horizontal-line" x="10" y="245" width="280" height="10"/>; break
                case 'vertical1': return <rect className="board__vertical-line" x="45" y="10" width="10" height="280"/>; break
                case 'vertical2': return <rect className="board__vertical-line" x="145" y="10" width="10" height="280"/>; break
                case 'vertical3': return <rect className="board__vertical-line" x="245" y="10" width="10" height="280"/>; break
            }})()}
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
