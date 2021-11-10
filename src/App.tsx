import React from 'react';
import './App.css';
import ChessBoard from "./component/chess-board";
import ChessPieces from "./component/chess-pieces";

function App() {
  return (
    <div className="App">
        <div className="div-chess">
            <ChessBoard />
            <ChessPieces />
        </div>
    </div>
  );
}

export default App;
