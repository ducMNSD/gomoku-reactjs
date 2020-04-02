import React from 'react'

function Setting(props) {
  return (
    <div className="w3-card-0">
      <header className="w3-container w3-light-grey">
        <h3>Setting</h3>
      </header>

      <div className="w3-row-padding w3-section">
        <div className="w3-half">
          <label>Size</label>
          <input className="w3-input w3-border" type="text" placeholder="Two"/>
        </div>
        <div className="w3-half">
          <label>Win</label>
          <input className="w3-input w3-border" type="text" placeholder="Three"/>
        </div>
      </div>

      <hr/>

      <button className="w3-button w3-block w3-dark-grey">Reset</button>
      <br/>
      <button className="w3-button w3-block w3-dark-grey">Undo</button>
    </div>
  )
}

export default Setting