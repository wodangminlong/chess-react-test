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
        console.info('click')
        console.info(e.target.id)
    }

    render() {
        return(
            <div id={'chess-pieces'+this.props.id} className="div-chess-pieces" onClick={this.select} />
        )
    }

}