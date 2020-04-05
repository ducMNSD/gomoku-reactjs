import React, { useState } from 'react';
import './App.css';
import Board from './Board'
import Control, { OPTION } from './Control'
import { board, won } from './util'
import WinnerModal from './WinnerModal'
import Stats from './Stats'

function App() {
  const [current, setCurrent] = useState({
    board: board(OPTION.size),
    turn: false,
    criteria: OPTION.criteria
  })
  const [history, setHistory] = useState([current])
  const [winner, setWinner] = useState(null)
  const [stats, setStats] = useState([])

  const handleReset = (newOption) => {
    let newBoard = board(newOption.size), newCriteria = newOption.criteria

    setCurrent({
      board: newBoard,
      turn: false,
      criteria: newCriteria
    })
    setHistory([current])
    setWinner(null)
  }

  const handleUndo = () => {
    setCurrent(history.length > 1 ? history.pop() : current)
    setHistory(history)
    setWinner(null)
  }

  const handleBoardOnchange = (i, j) => {
    const prev = JSON.parse(JSON.stringify(current))
    if (current.board[i][j] != null)
      return
    current.board[i][j] = current.turn

    if (won(current.board, current.criteria, [i,j])) {
      setWinner(current.turn)
      setStats([...stats, current.turn])
    }

    setCurrent({
      board: current.board,
      turn: !current.turn,
      criteria: current.criteria
    })
    setHistory([...history, prev])
  }

  return (
    <div className="App">
      <div className="w3-row-padding w3-content" style={{maxWidth: "1024px"}}>
        <div className="w3-row-padding">
          <h2>五目並べ </h2>
        </div>
        <div className="w3-twothird">
          <Board
            current={current}
            onChange={handleBoardOnchange}
            winner={winner}
          />
        </div>
        <div className="w3-third">
          <Control
            turn={current.turn}
            onReset={handleReset}
            onUndo={handleUndo}
          />
          <hr/>
          <Stats
            data={stats}
          />
        </div>
      </div>
      
      <WinnerModal
        winner={winner}
      />
    </div>
  );
}

export default App;
