import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class Scoreboard extends Component {
  currentPlayer(player) {
    return

  }
  render() {
    const { scores, currentPlayer } = this.props

    return (
      <div className="scoreboard-container">
        <div className="scoreboard">

          {/* X score */}
          <div className={
            `scoreboard__player
            scoreboard__player-x
            ${currentPlayer === 'x' && 'scoreboard__player--turn'}`
          }>
            <div className="scoreboard__info">
              <svg viewBox="0 0 100 100">
                <rect x="-11.4" y="40.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -20.6017 49.7368)" width="122.2" height="18"/>
                <rect x="40.7" y="-11.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -20.6609 49.7225)" width="18" height="122.2"/>
              </svg>
              <p className="scoreboard__score">{scores[0]}</p>
            </div>
          </div>

          {/* O score */}
          <div className={
            `scoreboard__player
            scoreboard__player-o
            ${currentPlayer === 'o' && 'scoreboard__player--turn'}`
          }>
            <div className="scoreboard__info">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"/>
              </svg>
              <p className="scoreboard__score">{scores[1]}</p>
            </div>
          </div>
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
