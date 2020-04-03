import React, { useRef } from 'react'

function WinnerModal(props) {
  const winnerModal = useRef()

  const handleClose = () => {
    winnerModal.current.style = "none"
  }

  return (
    <div ref={winnerModal} className="w3-modal" style={{display:  props.winner!=null? "block": "none"}}>
      <div className="w3-modal-content">
        <div className="w3-container">
          <span onClick={handleClose} className="w3-button w3-display-topright">&times;</span>
          <p>Winner is {props.winner? "O" : "X"}</p>
        </div>
      </div>
    </div>
  )
}

export default WinnerModal