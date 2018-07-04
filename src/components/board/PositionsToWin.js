import React from 'react'

/**
 * Constant array with all possible plays to win.
 * This array is called in the `this.getWinner()` in board component for each new move.
 * If some player marks the three positions of one of the items of array, wins.
 *
 *  0 │ 1 │ 2
 *  ──┘───└──
 *  3 │ 4 │ 5
 *  ──┐───┌──
 *  6 │ 7 │ 8
 */
const positionsToWin = {
  horizontal1: {
    positions: [0, 1, 2],
    svg: <rect className="board__horizontal-line" x="10" y="45" width="280" height="10" />
  },
  horizontal2: {
    positions: [3, 4, 5],
    svg: <rect className="board__horizontal-line" x="10" y="145" width="280" height="10"/>
  },
  horizontal3: {
    positions: [6, 7, 8],
    svg: <rect className="board__horizontal-line" x="10" y="245" width="280" height="10"/>
  },
  vertical1: {
    positions: [0, 3, 6],
    svg: <rect className="board__vertical-line" x="45" y="10" width="10" height="280"/>
  },
  vertical2: {
    positions: [1, 4, 7],
    svg: <rect className="board__vertical-line" x="145" y="10" width="10" height="280"/>
  },
  vertical3: {
    positions: [2, 5, 8],
    svg: <rect className="board__vertical-line" x="245" y="10" width="10" height="280"/>
  },
  diagonal1: {
    positions: [0, 4, 8],
    svg: <rect className="board__diagonal-line" x="-48" y="145.5" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 149.3965 362.382)" width="396" height="10"/>
  },
  diagonal2: {
    positions: [6, 4, 2],
    svg: <rect className="board__diagonal-line" x="-48" y="145" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -62.132 150)" width="396" height="10"/>
  }
}

export default positionsToWin
