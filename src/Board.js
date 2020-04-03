import React, { useState, useEffect } from 'react'
import './Board.css'
import { board, won } from './util'
import Square from './Square'

function Board(props) {
  const currentBoard = props.current.board
  const currentTurn = props.current.turn
  const criteria = props.current.criteria

  function clickSquare(i, j) {
    const prev = JSON.parse(JSON.stringify(props.current));
    if (currentBoard[i][j] != null)
      return
    currentBoard[i][j] = currentTurn
    let winner = null

    if (won(currentBoard, criteria, [i,j]))
      winner = currentTurn
    
    props.onChange(prev, currentBoard, winner)
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