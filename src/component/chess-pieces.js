import React from "react";

import ReactDOM from "react-dom";

export default class ChessPieces extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.info(this.props.id)
        const node = ReactDOM.findDOMNode(this)
        console.info(node)
    }

    render() {
        return(
            <div id={this.props.id} className="div-chess-pieces" />
        )
    }

}