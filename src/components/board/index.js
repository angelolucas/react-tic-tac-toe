import React, { Component } from 'react'
import './index.css'

class Board extends Component {
  state = {
    show: false,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true })
    });
  }
  render() {
    return (
      <div className={"board-container " + (this.state.show === true && "show")}>
        <div className="board">
          <div className="lines"><div></div><div></div></div>
          <div className="lines lines--horizontal"><div></div><div></div></div>
        </div>
      </div>
    )
  }
}

export default Board
