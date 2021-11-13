import request from './Axios'
import api from './api'

// startNewGame
export function startNewGame() {
    return request({
        url: api.startNewGame,
        method: 'post'
    })
}