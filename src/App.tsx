import React from 'react';
import './App.css';
import ChessBoard from "./component/chess-board";
import ChessPieces from "./component/chess-pieces";

function App() {
  return (
    <div className="App">
        <ChessBoard />
        <ChessPieces />
    </div>
  );
}

export default App;
