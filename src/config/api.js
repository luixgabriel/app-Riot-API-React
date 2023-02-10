import axios from "axios";

const baseURL = 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'
const headers = {
    baseURL,
    'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Riot-Token': 'luis'
}

const api = axios.create({
   baseURL,
   headers
})

export default api