import React from "react";

import ReactDOM from "react-dom";

export default class ChessPieces extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let node = ReactDOM.findDOMNode(this)
        node.style = 'left: '+this.props.left+'px;top: '+this.props.top+'px;'
    }

    select(e) {
        if (e.target.id.indexOf('null') > -1) {
            console.info('null')
        } else {
            console.info(e.target.id)
        }
        let divChessPiecesArray = document.getElementsByClassName('div-chess-pieces')
        console.info(divChessPiecesArray)
    }

    render() {
        return(
            <div id={'chess-pieces'+this.props.id} className="div-chess-pieces" onClick={this.select} />
        )
    }

}