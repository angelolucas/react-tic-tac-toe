import React, { Component } from 'react'
import Scoreboard from '../scoreboard'
import Board from '../board'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Scoreboard/>
        <Board/>
      </div>
    )
  }
}

export default App
