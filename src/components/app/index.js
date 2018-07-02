import React, { Component } from 'react'
import Scoreboard from '../scoreboard'
import Board from '../board'
import './index.css'

class App extends Component {
  state = {
    scores: [0, 0], // scores[0] = x, scores[1] = o
  }
  updateScore = (winner) => {
    let { scores } = this.state

    if (winner === 'x')
        scores[0] += 1

    if (winner === 'o')
        scores[1] += 1

    this.setState({ scores })
  }
  render() {
    return (
      <div className="app">
        <Scoreboard scores={this.state.scores} />
        <Board updateScores={this.updateScore} />
      </div>
    )
  }
}

export default App
