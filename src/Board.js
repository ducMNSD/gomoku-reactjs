import React, { useState, useEffect } from 'react'
import './Board.css'
import { board, won } from './util'
import Square from './Square'

function Board(props) {
  const [currentBoard, setCurrentBoard] = useState(board(19))
  const [currentTurn, setCurrentTurn] = useState(false)

  function clickSquare(i, j) {
    if (currentBoard[i][j] != null)
      return
    currentBoard[i][j] = currentTurn
    setCurrentBoard([...currentBoard])
    setCurrentTurn(!currentTurn)

    console.log(won(currentBoard, 5, [i,j]));
    
  }

  useEffect(() => {
    
  }, [])

  return (
    <div className="w3-justify">
      <div className="board-container">
        <div className="board">
          {
            currentBoard.map((x,i) => (
              <div 
                key={i} 
                className="board-row"
              >
                {
                  x.map((sx,j) => (
                    <Square
                      key={j}
                      mark={sx}
                      onClick={(e) => clickSquare(i, j)}
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