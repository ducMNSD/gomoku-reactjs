import React from 'react'

function Stats({data}) {
  return (
    <div className="w3-card-0">
      {
        data.length > 0 &&
        <>
          <header className="w3-container w3-light-grey">
            <h4>統計</h4>
          </header>
          <ul className="w3-ul ">
            {
              data.map((o, i) => 
              <li key={i}>#{i+1}. <b>{o? "O" : "X"}</b>の勝ちです</li>
              )
            }
          </ul>
        </>
      }
    </div>
  )
}

export default Stats