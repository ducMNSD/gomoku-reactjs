import React from 'react'
import './Board.css'
import Square from './Square'

function Board({current, onChange, winner}) {
  return (
    <div className="w3-justify">
      <div className="board-container">
        <div className="board">
          {
            current.board.map((x,i) => (
              <div 
                key={i} 
                className="board-row"
              >
                {
                  x.map((sx,j) => (
                    <Square
                      key={j}
                      mark={sx}
                      onClick={(e) => onChange(i, j)}
                      disabled={winner!=null? true: false}
                    />
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Board