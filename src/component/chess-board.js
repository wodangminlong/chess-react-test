import React from "react";
import * as Game from "./game";

export default class ChessBoard extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        let positionArray = []
        for (let i = 0; i < 10; i++) {
            let startY = 465 - 50 * i
            for (let j = 0; j < 9; j++) {
                let startX = 415 - 50 * j
                positionArray.push({x: startX, y: startY})
            }
        }
        this.state = {chessPiecesArray: [], positionArray: positionArray}
    }

    componentDidMount() {
        let _this = this
        _this.drawChessBoard()
        _this.drawNewChessPieces()
    }

    getChessBoard() {
        return document.getElementById('canvas-chess-board')
    }

    getContext(canvasChessBoard) {
        return canvasChessBoard.getContext('2d')
    }

    drawChessBoard() {
        let canvasChessBoard = this.getChessBoard()
        // 外边框
        let context = this.getContext(canvasChessBoard)
        context.lineWidth = '1'
        context.strokeStyle = '#CCCCCC'
        context.strokeRect(0,0,480,530)
        // 内边框1
        context.lineWidth = '3'
        context.strokeStyle = '#000000'
        context.strokeRect(35,35,410,460)
        let redTickMarkArray = ['一','二','三','四','五','六','七','八','九']
        let blackTickMarkArray = ['1','2','3','4','5','6','7','8','9']
        // 内边框2
        context.lineWidth = '2'
        context.strokeStyle = '#000000'
        context.strokeRect(40,40,400,450)
        context.font = '30px KaiTi'
        context.fillText(redTickMarkArray[0], 425, 530)
        context.fillText(redTickMarkArray[redTickMarkArray.length-1], 25, 530)
        context.fillText(blackTickMarkArray[0], 30, 30)
        context.fillText(blackTickMarkArray[blackTickMarkArray.length-1], 430, 30)
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
            context.fillText(blackTickMarkArray[i+1], 80 + 50 * i, 30)
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
            context.fillText(redTickMarkArray[i+1], 375 - 50 * i, 530)
        }
        // 添加文字 楚
        context.font = '40px KaiTi'
        context.translate(0, 530)
        context.rotate(-90 * Math.PI/180)
        context.fillText('楚', 245, 130)
        // 添加文字 河
        context.fillText('河', 245, 180)
        // 添加文字 漢
        context.translate(480, 530)
        context.rotate(-180 * Math.PI/180)
        context.fillText('漢', 195, 180)
        // 添加文字 界
        context.fillText('界', 195, 230)
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
        // 添加 ∟
        context.font = '15px KaiTi'
        context.translate(340, 140)
        context.fillText('∟', 0, -2)
        context.fillText('∟', 0, 298)
        context.fillText('∟', -250, -2)
        context.fillText('∟', -250, 298)

        context.fillText('∟', -50, 48)
        context.fillText('∟', -50, 148)
        context.fillText('∟', -50, 248)
        context.fillText('∟', -50, 348)

        context.fillText('∟', -200, 48)
        context.fillText('∟', -200, 148)
        context.fillText('∟', -200, 248)
        context.fillText('∟', -200, 348)


        context.rotate(-90 * Math.PI/180)
        context.fillText('∟', 0, -2)
        context.fillText('∟', -300, -2)
        context.fillText('∟', 0, -252)
        context.fillText('∟', -300, -252)

        context.fillText('∟', -50, -52)
        context.fillText('∟', -150, -52)
        context.fillText('∟', -250, -52)
        context.fillText('∟', -350, -52)

        context.fillText('∟', -50, -202)
        context.fillText('∟', -150, -202)
        context.fillText('∟', -250, -202)
        context.fillText('∟', -350, -202)


        context.rotate(-90 * Math.PI/180)
        context.fillText('∟', 0, -2)
        context.fillText('∟', 0, -302)
        context.fillText('∟', 250, -2)
        context.fillText('∟', 250, -302)

        context.fillText('∟', 50, 48)
        context.fillText('∟', 50, -52)
        context.fillText('∟', 50, -152)
        context.fillText('∟', 50, -252)

        context.fillText('∟', 200, 48)
        context.fillText('∟', 200, -52)
        context.fillText('∟', 200, -152)
        context.fillText('∟', 200, -252)


        context.rotate(-90 * Math.PI/180)
        context.fillText('∟', 0, -2)
        context.fillText('∟', 300, -2)
        context.fillText('∟', 0, 248)
        context.fillText('∟', 300, 248)

        context.fillText('∟', -50, 48)
        context.fillText('∟', 50, 48)
        context.fillText('∟', 150, 48)
        context.fillText('∟', 250, 48)

        context.fillText('∟', -50, 198)
        context.fillText('∟', 50, 198)
        context.fillText('∟', 150, 198)
        context.fillText('∟', 250, 198)
    }

    drawNewChessPieces() {
        let _this = this
        let context = _this.getContext(_this.getChessBoard())
        // 坐标归位
        context.rotate(90 * Math.PI/180)
        context.rotate(90 * Math.PI/180)
        context.rotate(90 * Math.PI/180)
        context.translate(-340, -140)
        context.rotate(180 * Math.PI/180)
        context.translate(-480, -530)
        context.rotate(90 * Math.PI/180)
        context.translate(0, -530)
        Game.initPiecesPosition()
            .then(res => {
                this.setState({chessPiecesArray: res.data})
                const {chessPiecesArray} = _this.state
                const {positionArray} = _this.state
                console.info(chessPiecesArray)
                // eslint-disable-next-line array-callback-return
                chessPiecesArray.map((item,index) => {
                    let image = _this.getImageById(item)
                    image.onload = () => {
                        context.drawImage(image, positionArray[index].x, positionArray[index].y, 50, 50)
                    }
                })
            })
            .catch(error => {
                console.info(error)
            })
    }

    getImageById(id) {
        let image = new Image()
        let path
        image.id = 'chess-pieces' + id
        switch (id) {
            case 1:
            case 9:
                path = require("../image/RR.GIF")
                break
            case 2:
            case 8:
                path = require("../image/RN.GIF")
                break
            case 3:
            case 7:
                path = require("../image/RB.GIF")
                break
            case 4:
            case 6:
                path = require("../image/RA.GIF")
                break
            case 5:
                path = require("../image/RK.GIF")
                break
            case 10:
            case 11:
                path = require("../image/RC.GIF")
                break
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                path = require("../image/RP.GIF")
                break
            case 17:
            case 25:
                path = require("../image/BR.GIF")
                break
            case 18:
            case 24:
                path = require("../image/BN.GIF")
                break
            case 19:
            case 23:
                path = require("../image/BB.GIF")
                break
            case 20:
            case 22:
                path = require("../image/BA.GIF")
                break
            case 21:
                path = require("../image/BK.GIF")
                break
            case 26:
            case 27:
                path = require("../image/BC.GIF")
                break
            case 28:
            case 29:
            case 30:
            case 31:
            case 32:
                path = require("../image/BP.GIF")
                break
            default:
                path = ''
        }
        image.src = path.default
        return image
    }

    render() {
        return(
            <div id="div-chess">
                <canvas id="canvas-chess-board" width="480" height="530">

                </canvas>
                {/*{chessPiecesArray.map((item,index)=>{*/}
                {/*    return <div id={index} className="div-chess-pieces"*/}
                {/*                style={{left: positionArray[index].x + 'px', top: + positionArray[index].y +'px'}}*/}
                {/*                key={index} >*/}

                {/*                <ChessPieces id={item} />*/}

                {/*           </div>*/}
                {/*})}*/}
            </div>
        )
    }
}