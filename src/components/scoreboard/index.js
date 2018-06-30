import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class Scoreboard extends Component {
  render() {
    const { scores, playerTurn } = this.props

    return (
      <div className="scoreboard">
        <div className={"player player-x" + (playerTurn === 'x' ? " player-turn" : '')}>
          x = {scores[0]}
        </div>
        <div className={"player player-o" + (playerTurn === 'o' ? " player-turn" : '')}>
          o = {scores[1]}
        </div>
      </div>
    )
  }
}

Scoreboard.propType = {
  scores: PropTypes.array.isRequired,
  playerTurn: PropTypes.string.isRequired
}

export default Scoreboard
