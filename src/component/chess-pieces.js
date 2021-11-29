import React from "react";

import ReactDOM from "react-dom";

export default class ChessPieces extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = { selected: false, down: false }
    }

    componentDidMount() {
        this.move(this)
    }

    select = (e) => {
        let _this = this
        const chessPiecesSelectedClassName = 'chess-pieces-selected'
        if (e.currentTarget.id.indexOf('null') > -1) {
            console.info('null')
            let divChessPiecesSelected = document.getElementsByClassName(chessPiecesSelectedClassName)
            if (divChessPiecesSelected.length === 1) {
                console.info('ready to move')
                // 判断当前位置是否可以落子,可以落子时调用move方法

                _this.move(divChessPiecesSelected[0])
            }
        } else {
            console.info(e.target.id)
            if (e.currentTarget.className.indexOf(chessPiecesSelectedClassName) > -1) {
                // 取消选中
                e.currentTarget.classList.remove(chessPiecesSelectedClassName)
                _this.setState({
                    selected: false
                })
            } else {
                // 选中
                e.currentTarget.classList.add(chessPiecesSelectedClassName)
                _this.setState({
                    selected: true
                })
            }
        }
        let divChessPiecesArray = document.getElementsByClassName('div-chess-pieces')
        console.info(divChessPiecesArray)
    }

    move(node) {
        let n = ReactDOM.findDOMNode(node)
        n.style = 'left: '+this.props.left+'px;top: '+this.props.top+'px;'
    }

    render() {
        return(
            <div id={'chess-pieces'+this.props.id} className="div-chess-pieces" onClick={this.select} >
                <div className={this.state.selected ? 'div-chess-pieces-select' : 'div-chess-pieces-unselect'} />
                <div className={this.state.down ? 'div-chess-pieces-path-down' : 'div-chess-pieces-path'}>
                    <div className="div-chess-pieces-path-round" />
                </div>
            </div>
        )
    }

}