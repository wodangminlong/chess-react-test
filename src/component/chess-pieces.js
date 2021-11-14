import React from "react";

import ReactDOM from "react-dom";

export default class ChessPieces extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.info(this.props.id)
        let node = ReactDOM.findDOMNode(this)
        console.info(node)
        node.style = 'left: '+this.props.left+'px;top: '+this.props.top+'px;'
    }

    render() {
        return(
            <div id={'chess-pieces'+this.props.id} className="div-chess-pieces" />
        )
    }

}