import request from './Axios'
import api from './api'

// startNewGame
export function startNewGame(data) {
    return request({
        url: api.startNewGame,
        method: 'post',
        data
    })
}