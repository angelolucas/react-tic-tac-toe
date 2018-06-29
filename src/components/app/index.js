import React, { Component } from 'react'
import Scoreboard from '../scoreboard'
import Board from '../board'
import './index.css'

class App extends Component {
  state = {
    moveIndex: 0,
    scores: [0, 0],
    board: ['','','','','','','','','',],
    playerTurn: 'x',
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
  move = (move) => {
    let { board, playerTurn, moveIndex, winner} = this.state;

    if (board[move] !== '' || winner !== '' || moveIndex > 8)
      return

    board[move] = this.state.playerTurn;
    moveIndex += 1

    if (playerTurn === 'x')
      playerTurn = 'o'
    else
      playerTurn = 'x'

    if (moveIndex > 4)
      this.checkVictory();

    this.setState({ board, playerTurn, moveIndex})
  }
  checkVictory() {
    let { board, playerTurn, moveIndex, winner, scores} = this.state

    this.positionsToWin.forEach((p) => {
      if (
        board[p[1]] === playerTurn &&
        board[p[2]] === playerTurn &&
        board[p[3]] === playerTurn) {
          if (playerTurn === 'x') {
            scores[0] += 1;
          } else {
            scores[1] += 1;
          }

          this.setState({
            scores,
            winner: playerTurn,
          })
        }
    })
    if (moveIndex === 8 && winner === '') {
      this.setState({ winner: 'draw'})
    }
  }
  render() {
    return (
      <div className="app">
        <Scoreboard scores={this.state.scores}/>
        <Board board={this.state.board} playerTurn={this.state.playerTurn} move={this.move} />
      </div>
    )
  }
}

export default App
