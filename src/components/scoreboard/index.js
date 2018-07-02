import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class Scoreboard extends Component {
  render() {
    const { scores, currentPlayer } = this.props

    return (
      <div className="scoreboard">
        <div className={`player player-x ${currentPlayer === 'x' && 'player-turn'}`}>
          x = {scores[0]}
        </div>
        <div className={`player player-o ${currentPlayer === 'o' && 'player-turn'}`}>
          o = {scores[1]}
        </div>
      </div>
    )
  }
}

Scoreboard.propType = {
  scores: PropTypes.array.isRequired,
  currentPlayer: PropTypes.string.isRequired
}

export default Scoreboard
