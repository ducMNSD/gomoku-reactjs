import React, { useState } from 'react'

const OPTION = {
  size: 19,
  criteria: 5
}

function Control({turn, onReset, onUndo}) {
  const [option, setOption] = useState(OPTION)

  const handleOnchangeCriteria = (e) => {
    const criteria = parseInt(e.target.value)
    setOption({criteria: criteria, size: option.size})
  }

  const handleOnchangeSize = (e) => {
    const size = parseInt(e.target.value)
    setOption({criteria: option.criteria, size: size})
  }

  const handleReset = () => {
    onReset(option)
  }

  const handleUndo = () => {
    onUndo()
  }

  return (
    <div className="w3-card-0" style={{paddingTop: '3px'}}>
      <header className="w3-container w3-light-grey">
        <h3>プレーヤーターン: <b>{turn? "O" : "X"}</b></h3>
      </header>

      <div className="w3-row-padding w3-section">
        <div className="w3-half">
          <label>サイズ</label>
          <input 
            className="w3-input w3-border" 
            type="number" 
            value={option.size}
            onChange={handleOnchangeSize}
          />
        </div>
        <div className="w3-half">
          <label>勝ち条件</label>
          <input 
            className="w3-input w3-border" 
            type="number" 
            value={option.criteria}
            onChange={handleOnchangeCriteria}
          />
        </div>
      </div>

      <hr/>

      <button 
        className="w3-button w3-block w3-dark-grey"
        onClick={handleReset}
      >
        リセット
      </button>
      <br/>
      <button 
        className="w3-button w3-block w3-dark-grey"
        onClick={handleUndo}
      >
        先に戻す
      </button>
    </div>
  )
}

export default Control
export { OPTION }