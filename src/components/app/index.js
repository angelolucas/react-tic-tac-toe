import React, { Component } from 'react'
import Scoreboard from '../scoreboard'
import Board from '../board'
import './index.css'

class App extends Component {
  state = {
    scores: [0, 0], // scores[0] = x, scores[1] = o
    turnCounter: 0,
    currentPlayer: 'x',
  }

  updateScore = (winner) => {
    let { scores } = this.state

    if (winner === 'x') scores[0] += 1

    if (winner === 'o') scores[1] += 1

    this.setState({ scores })
  }

  takeTurn = () => {
    let { turnCounter } = this.state
    let currentPlayer

    if (turnCounter % 2 === 0) currentPlayer = 'o'
    else currentPlayer = 'x'

    turnCounter += 1;

    this.setState({ turnCounter, currentPlayer})
  }

  render() {
    return (
      <div className="app">
        <Scoreboard
          scores={this.state.scores}
          currentPlayer={this.state.currentPlayer} />
        <Board
          updateScores={this.updateScore}
          takeTurn={this.takeTurn}
          currentPlayer={this.state.currentPlayer} />
      </div>
    )
  }
}

export default App
