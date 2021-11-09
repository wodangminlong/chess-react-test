import React from "react";

export default class ChessBoard extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.draw()
    }

    draw() {
        const c = document.getElementById('canvas-chess-board')
        // 外边框
        let context = c.getContext('2d')
        context.lineWidth = '1'
        context.strokeStyle = '#CCCCCC'
        context.strokeRect(0,0,480,530)
        // 内边框1
        context.lineWidth = '3'
        context.strokeStyle = '#000000'
        context.strokeRect(35,35,410,460)
        // 内边框2
        context.lineWidth = '2'
        context.strokeStyle = '#000000'
        context.strokeRect(40,40,400,450)
        // 横线
        for (let i = 0; i < 8; i++) {
            context.lineWidth = '0.1'
            context.strokeStyle = '#000000'
            context.beginPath()
            const y = 90 + 50 * i
            context.moveTo(40,y)
            context.lineTo(440,y)
            context.stroke()
        }
        // 竖线1
        for (let i = 0; i < 7; i++) {
            context.lineWidth = '0.1'
            context.strokeStyle = '#000000'
            context.beginPath()
            const x = 90 + 50 * i
            context.moveTo(x, 40)
            context.lineTo(x, 240)
            context.stroke()
        }
        // 竖线2
        for (let i = 0; i < 7; i++) {
            context.lineWidth = '0.1'
            context.strokeStyle = '#000000'
            context.beginPath()
            const x = 90 + 50 * i
            context.moveTo(x, 290)
            context.lineTo(x, 490)
            context.stroke()
        }
        // 添加文字 楚
        context.font = '40px 宋体'
        context.translate(0, 530)
        context.rotate(-90 * Math.PI/180)
        const gradient = context.createLinearGradient(0,0, c.offsetWidth, 0)
        gradient.addColorStop(1, 'red')
        context.strokeStyle = gradient
        context.strokeText('楚', 245, 130)
        // 添加文字 河
        context.strokeText('河', 245, 180)
        // 添加文字 漢
        context.translate(480, 530)
        context.rotate(-180 * Math.PI/180)
        context.strokeText('漢', 195, 180)
        // 添加文字 界
        context.strokeText('界', 195, 230)
        // 九宫士线1
        context.lineWidth = '0.1'
        context.strokeStyle = '#000000'
        context.beginPath()
        context.moveTo(440, 340)
        context.lineTo(340, 240)
        context.stroke()
        // 九宫士线2
        context.lineWidth = '0.1'
        context.strokeStyle = '#000000'
        context.beginPath()
        context.moveTo(440, 240)
        context.lineTo(340, 340)
        context.stroke()
        // 九宫士线3
        context.lineWidth = '0.1'
        context.strokeStyle = '#000000'
        context.beginPath()
        context.moveTo(-10, 240)
        context.lineTo(90, 340)
        context.stroke()
        // 九宫士线4
        context.lineWidth = '0.1'
        context.strokeStyle = '#000000'
        context.beginPath()
        context.moveTo(-10, 340)
        context.lineTo(90, 240)
        context.stroke()
    }

    render() {
        return(
            <canvas id="canvas-chess-board" width="480" height="530">

            </canvas>
        )
    }
}