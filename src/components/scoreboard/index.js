import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class Scoreboard extends Component {
  render() {
    return (
      <div className="scoreboard">
        <div className="player player1">
          x = {this.props.scores[0]}
        </div>
        <div className="player player2">
          o = {this.props.scores[1]}
        </div>
      </div>
    )
  }
}

Scoreboard.propType = {
  scores: PropTypes.array.isRequired
}

export default Scoreboard
