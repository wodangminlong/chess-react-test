import request from './Axios'
import api from './api'

// initPiecesPosition
export function initPiecesPosition() {
    return request({
        url: api.initPiecesPosition,
        method: 'post'
    })
}

// startNewGame
export function startNewGame() {
    return request({
        url: api.startNewGame,
        method: 'post'
    })
}