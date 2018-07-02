import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class Scoreboard extends Component {
  render() {
    const { scores } = this.props

    return (
      <div className="scoreboard">
        <div className="player player-x">
          x = {scores[0]}
        </div>
        <div className="player player-o">
          o = {scores[1]}
        </div>
      </div>
    )
  }
}

Scoreboard.propType = {
  scores: PropTypes.array.isRequired
}

export default Scoreboard
