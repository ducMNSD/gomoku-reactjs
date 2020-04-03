import React, { useEffect, useState } from 'react';
import './App.css';
import Board from './Board'
import Control, { OPTION } from './Control'
import { board } from './util'
import WinnerModal from './WinnerModal';

function App() {

  const [state, setState] = useState({
    current: {
      board: board(OPTION.size),
      turn: false,
      criteria: OPTION.criteria
    },
    history: [{
      board: board(OPTION.size),
      turn: false,
      criteria: OPTION.criteria
    }],
    winner: null
  })

  const handleReset = (newOption) => {
    let newBoard = board(newOption.size)
    setState({
      current: {
        board: newBoard,
        turn: false,
        criteria: newOption.criteria
      },
      history: [{
        board: newBoard,
        turn: false,
        criteria: newOption.criteria
      }],
      winner: null
    })
  }

  const handleUndo = () => {
    console.log(state.history);
    
    setState({
      current: state.history.length > 1 ? state.history.pop() : state.current,
      history: state.history,
      winner: null
    })
  }

  const handleBoardOnchange = (prev ,newBoard, winner) => {
    setState({
      history: [...state.history, prev],
      current: {
        board: newBoard,
        turn: !state.current.turn,
        criteria: state.current.criteria
      },
      winner: winner
    })
  }

  return (
    <div className="App">
      <div className="w3-row-padding w3-content" style={{maxWidth: "1024px"}}>
        <div className="w3-row-padding">
          <h2>Gomoku</h2>
        </div>
        <div className="w3-twothird">
          <Board
            current={state.current}
            onChange={handleBoardOnchange}
          />
        </div>
        <div className="w3-third">
          <Control
            turn={state.current.turn}
            onReset={handleReset}
            onUndo={handleUndo}
          />
        </div>
      </div>
      
      <WinnerModal
        winner={state.winner}
      />
    </div>
  );
}

export default App;
