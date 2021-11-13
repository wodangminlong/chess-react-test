import React from "react";
import * as Game from "./game";
import ReactDOM from "react-dom";

export default class ChessPieces extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.info(this.props.type)
        const node = ReactDOM.findDOMNode(this)
        console.info(node)
        Game.startNewGame()
            .then(res => {
                console.info(res)
            })
            .catch(error => {
                console.info(error)
            })
    }

    render() {
        return(
            <div className="div-chess-pieces" />
        )
    }

}