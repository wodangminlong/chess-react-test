import React from 'react';
import './App.css';
import ChessBoard from "./component/chess-board";

function App() {
  return (
    <div className="App">
        <ChessBoard />
        <button>开始</button>
    </div>
  );
}

export default App;
