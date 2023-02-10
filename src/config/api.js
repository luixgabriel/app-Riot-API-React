import axios from "axios";

const baseURL = 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/luixgabriel'
export const apiKey = '?api_key=RGAPI-59c1cb3f-50b2-452c-88e0-bb7e7b341df4'


export const api = axios.create({
   baseURL
})




