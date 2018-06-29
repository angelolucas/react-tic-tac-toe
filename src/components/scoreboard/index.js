import React, { Component } from 'react'
import './index.css'

class Scoreboard extends Component {
  render() {
    return (
      <div className="scoreboard">
        <div className="player player1">
          x = 0
        </div>
        <div className="player player2">
          o = 0
        </div>
      </div>
    )
  }
}

export default Scoreboard
