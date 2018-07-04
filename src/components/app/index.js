import React, { Component } from 'react'
import Scoreboard from '../scoreboard'
import Board from '../board'
import './index.css'

class App extends Component {
  state = {
    scores: [0, 0], // scores[0] = x, scores[1] = o
    turnCounter: 0,
    currentPlayer: 'x',
    boards: ['']
  }

  updateScore = (winner) => {
    let { scores, lastWinner } = this.state
    const bodyClass = document.body.classList

    if (winner === 'x') {
      bodyClass.add('x-won')

      setTimeout(() => {
        bodyClass.remove('x-won')
      }, 1000)

      scores[0] += 1
    } else {
      bodyClass.add('o-won')

      setTimeout(() => {
        bodyClass.remove('o-won')
      }, 1000)

      scores[1] += 1
    }

    this.createNewBoard()

    this.setState({ scores, lastWinner })
  }

  takeTurn = () => {
    let { turnCounter } = this.state
    let currentPlayer

    if (turnCounter % 2 === 0) currentPlayer = 'o'
    else currentPlayer = 'x'

    turnCounter += 1;

    this.setState({ turnCounter, currentPlayer})
  }

  createNewBoard = () => {
    let { boards } = this.state

    boards.push('')

    this.setState({ boards })

    setTimeout(() => {
      window.scroll({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
      })
    }, 1000)
  }

  render() {
    return (
      <div className="app">
        <Scoreboard
          scores={this.state.scores}
          currentPlayer={this.state.currentPlayer}
        />
        {this.state.boards.map((board, key) =>
          <Board
            key={key}
            updateScores={this.updateScore}
            takeTurn={this.takeTurn}
            currentPlayer={this.state.currentPlayer}
            draw={this.createNewBoard}
          />
        )}
      </div>
    )
  }
}

export default App
