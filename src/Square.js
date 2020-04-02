import React from 'react'
import './Square.css'

function Square(props) {
  return (
    <button className="btn btn-board" onClick={props.onClick}>
      <span className={props.mark === false? "x" : props.mark === true? "o" : ""}></span>
    </button>
  )
}

export default Square