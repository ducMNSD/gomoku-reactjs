import React from 'react';
import './App.css';
import Board from './Board'
import Setting from './Setting';

function App() {
  return (
    <div className="App">
      <div className="w3-row-padding w3-content" style={{maxWidth: "1024px"}}>
        <div className="w3-row-padding">
          <h2>Gomoku</h2>
        </div>
        <div className="w3-twothird">
          <Board/>
        </div>
        <div className="w3-third">
          <Setting/>
        </div>
      </div>
    </div>
  );
}

export default App;
