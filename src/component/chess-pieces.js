import React from "react";

import ReactDOM from "react-dom";

export default class ChessPieces extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = { selected: false, down: false }
    }

    componentDidMount() {
        let n = ReactDOM.findDOMNode(this)
        n.style = 'left: '+this.props.left
    }

    select = (e) => {
        let _this = this
        const chessPiecesSelectedClassName = 'chess-pieces-selected'
        if (e.currentTarget.id.indexOf('null') > -1) {
            let divChessPiecesSelected = document.getElementsByClassName(chessPiecesSelectedClassName)
            if (divChessPiecesSelected.length === 1) {
                let oldNode = _this.selectNode(divChessPiecesSelected[0])
                let oldParentId = oldNode.parentElement.id
                let newNode = e.currentTarget
                newNode.parentElement.appendChild(oldNode)
                newNode.remove()
                _this.createOldNode(oldParentId)
                // 判断当前位置是否可以落子,可以落子时调用move方法
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
                let divChessPiecesSelected = document.getElementsByClassName(chessPiecesSelectedClassName)
                for (let i = 0; i < divChessPiecesSelected.length; i++) {
                    console.info(111)
                    if (divChessPiecesSelected[i].id !== e.currentTarget.id) {
                        let node = _this.selectNode(divChessPiecesSelected[i])
                        node.classList.remove(chessPiecesSelectedClassName)
                        console.info(node)
                    }
                }
            }
        }
    }

    selectNode(node) {
        return ReactDOM.findDOMNode(node)
    }

    createOldNode(oldParentId) {
        console.info(111)
        console.info(oldParentId)
        console.info(111)
        let chessPiecesPathRoundDiv = React.createElement('div', {className: 'div-chess-pieces-path-round'})
        let chessPiecesPathDownDiv = React.createElement('div', {className: 'div-chess-pieces-path-down'}, chessPiecesPathRoundDiv)
        let chessPiecesUnselectDiv = React.createElement('div', {className: 'div-chess-pieces-unselect'})
        let chessPiecesDiv = React.createElement('div', {id: 'chess-piecesnull', className: 'chess-pieces',
            onClick: this.select}, chessPiecesUnselectDiv, chessPiecesPathDownDiv)
        ReactDOM.render(chessPiecesDiv, document.getElementById(oldParentId))
    }

    render() {
        return(
            <div id={'chess-pieces'+this.props.id} className="chess-pieces" onClick={this.select} >
                <div className={this.state.selected ? 'div-chess-pieces-select' : 'div-chess-pieces-unselect'} />
                <div className={this.state.down ? 'div-chess-pieces-path-down' : 'div-chess-pieces-path'}>
                    <div className="div-chess-pieces-path-round" />
                </div>
            </div>
        )
    }

}