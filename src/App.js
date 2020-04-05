import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './Board'
import Control, { OPTION } from './Control'
import { board, won } from './util'
import WinnerModal from './WinnerModal'
import Stats from './Stats'

function App() {
  const [option, setOption] = useState(OPTION)
  const [current, setCurrent] = useState({
    board: board(option.size),
    turn: false,
    criteria: option.criteria
  })
  const [history, setHistory] = useState([current])
  const [winner, setWinner] = useState(null)
  const [stats, setStats] = useState([])

  useEffect(() => {
    let newBoard = board(option.size), newCriteria = option.criteria
    let newCurrent = {
      board: newBoard,
      turn: false,
      criteria: newCriteria
    }
    setCurrent(newCurrent)
    setHistory([newCurrent])
    setWinner(null)
  }, [option])

  const handleReset = (newOption) => {
    if (newOption!=null) setOption(newOption)
    else setOption({...option})
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
        onReset={handleReset}
        winner={winner}
      />
    </div>
  );
}

export default App;
