import React, { Component } from 'react'
import './index.css'

class Board extends Component {
  state = {
    show: false,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true })
    })
  }
  cell = ['p11', 'p12', 'p13', 'p21', 'p22', 'p23', 'p31', 'p32', 'p33']
  render() {
    return (
      <div className={"board-container " + (this.state.show === true && "show")}>
        <div className="board">
          {this.cell.map((position, key) =>
            <button className={`cell ${position}`} />
          )}
        </div>
      </div>
    )
  }
}

export default Board
