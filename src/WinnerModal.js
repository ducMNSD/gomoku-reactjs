import React, { useRef } from 'react'

function WinnerModal({onReset, winner}) {
  const winnerModal = useRef()

  const handleClose = () => {
    winnerModal.current.style = "none"
  }

  return (
    <div ref={winnerModal} className="w3-modal" style={{display:  winner!=null? "block": "none"}}>
      <div className="w3-modal-content w3-card-4" style={{maxWidth: '400px'}}>
        <div className="w3-container">
          <span onClick={handleClose} className="w3-button w3-display-topright">&times;</span>
          <h3><b>{winner? "O" : "X"}</b>の勝ちです！</h3>
        </div>
          <button onClick={() => onReset(null)} className="w3-button w3-block w3-orange">リセット</button>
      </div>
    </div>
  )
}

export default WinnerModal