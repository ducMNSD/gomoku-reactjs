import React from 'react'
import './Square.css'

function Square({onClick, disabled, mark}) {
  return (
    <button className="btn btn-board" onClick={onClick} disabled={disabled}>
      <span className={mark === false? "x" : mark === true? "o" : ""}></span>
    </button>
  )
}

export default Square