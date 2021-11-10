import React from "react";

export default class ChessPieces extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.drawChessPieces()
    }

    drawChessPieces() {
        const canvasChessPieces = document.getElementById('canvas-chess-pieces')
        let context = canvasChessPieces.getContext('2d')
        context.beginPath();
        context.fillStyle = 'red'
        context.arc(25,25,20,0,2*Math.PI);
        context.fill();
        context.font = '25px KaiTi'
        context.fillStyle = 'white'
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.fillText('兵', canvasChessPieces.offsetWidth/2,canvasChessPieces.offsetHeight/2)
    }

    render() {
        return(
            <canvas id="canvas-chess-pieces" width="50" height="50">

            </canvas>
        )
    }

}