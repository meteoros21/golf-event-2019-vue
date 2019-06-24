class GameHandler {
    constructor() {
        this.gameId = '2019kor-china'
        this.apiUrl = 'http://localhost:8080'
        this.getGameInfoUrl = this.apiUrl + '/api/getData?gameId=' + this.gameId
    }

    getData () {
        let option = {
            method: 'get'
        }

        return fetch(this.getGameInfoUrl, option)
            .then(response => {
                if (response.status !== 200) {
                    throw response
                }
                return response.json()
            })
            .then(function(data) {
                data['status'] = 200
                return data
            })
            .catch(function(response) {
                return {error: 'error', status: response.status}
            })
    }
}

export default new GameHandler()