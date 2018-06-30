import React, { Component } from 'react'
import Scoreboard from '../scoreboard'
import Board from '../board'
import './index.css'

class App extends Component {
  state = {
    board: ['','','','','','','','','',],
    scores: [0, 0], // scores[0] = x, scores[1] = o
    playerTurn: 'x',
    moveIndex: 0,
    winner: ''
  }
  positionsToWin = [
    ['line1', 0, 1, 2],
    ['line2', 3, 4, 5],
    ['line3', 6, 7, 8],
    ['column1', 0, 3, 6],
    ['column2', 1, 4, 7],
    ['column3', 2, 5, 8],
    ['crisscross1', 0, 4, 8],
    ['crisscross2', 6, 4, 2]
  ]
  move = (position) => {
    let { board, scores, playerTurn, moveIndex, winner} = this.state;
    let checkVictory;

    if (board[position] !== '' || winner !== '' || moveIndex > 8)
      return

    board[position] = this.state.playerTurn;
    moveIndex += 1
    checkVictory = this.checkVictory()

    if (checkVictory === 'x') {
      winner = 'x'
      scores[0] += 1
    } else if (checkVictory === 'o'){
      winner = 'o'
      scores[1] += 1
    } else if (playerTurn === 'x') {
      playerTurn = 'o'
    } else {
      playerTurn = 'x'
    }

    this.setState({ board, scores, playerTurn, moveIndex, winner })
  }
  checkVictory() {
    const { board, playerTurn } = this.state
    let victory

    this.positionsToWin.forEach((p) => {
      if (board[p[1]] === playerTurn && board[p[2]] === playerTurn && board[p[3]] === playerTurn)
        victory = playerTurn
    })

    return victory
  }
  render() {
    return (
      <div className="app">
        <Scoreboard
          scores={this.state.scores} />
        <Board
          board={this.state.board}
          playerTurn={this.state.playerTurn}
          move={this.move} />
      </div>
    )
  }
}

export default App
