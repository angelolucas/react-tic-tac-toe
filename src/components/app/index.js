import React, { Component } from 'react'
import Scoreboard from '../scoreboard'
import Board from '../board'
import './index.css'

class App extends Component {
  state = {
    scoreboard: {
      x: 0,
      o: 0
    },
    board: ['','','','','','','','','',],
    playerTurn: 'x'
  }
  move = (move) => {
    const board = this.state.board;

    if (board[move] === '')
      board[move] = this.state.playerTurn;

    if (this.state.playerTurn === 'x')
      this.setState({ playerTurn: 'o' })
    else
      this.setState({ playerTurn: 'x' })

    this.setState({ board })
  }
  render() {
    return (
      <div className="app">
        <Scoreboard />
        <Board board={this.state.board} playerTurn={this.state.playerTurn} move={this.move} />
      </div>
    )
  }
}

export default App
