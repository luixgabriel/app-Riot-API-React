import React, { useState } from 'react'
import {baseURL, apiKey} from '../../config/api'
// eslint-disable-next-line no-unused-vars
import {iron, bronze, silver, gold, platinum, diamond, master,  grandmaster, challenger} from '../../config/imgsTIER';
import getTier from '../../config/tier';
import getColors from '../../config/getColors';
import './Form.css';

const Form = () => {

    const [summoner, setSummoner] = useState('')
    const [player, SetPlayer] = useState([])
    const [loading, setLoading] = useState(0)
    const [playerExists, setPlayerExists] = useState(true)
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(1)
        const getRiotID = async () => {
          try {
            const response = await fetch(`${baseURL}lol/summoner/v4/summoners/by-name/${summoner}${apiKey}`)
            const data = await (response.json())
            console.log(data)
            const id = data.id
            return id
            
          } catch (error) {
           
            console.log(error)
            return
          }
        }

        const getPlayer = async () =>{
        
          const riotID = await getRiotID()
          if(!riotID){
            setPlayerExists(false)
          }
          console.log(riotID)
          const response = await fetch(`${baseURL}tft/league/v1/entries/by-summoner/${riotID}${apiKey}`)
          const data = await (response.json())
          if(data.length === 0){
            setPlayerExists(false)
          }
          SetPlayer(data)
          }
          
          await getPlayer()  
        
    }

    const getSummoner = (e) =>{
        setSummoner(e.target.value);
    }

    const reloadPage = () =>{
      window.location.reload()
    }

    if(!playerExists){
      return(
       <div className='panel-error'>
          <h2>invocador nao encontrado ou sem historico de partidas rankeadas</h2>
          <button onClick={reloadPage}>tentar novamente</button>
       </div>
          
      )
    }

    if(player.length > 0){
      const getT = getTier(player[0].tier)
      const getV = getColors(player[0].tier)
      
      return(
        <div className='stats' style={{background: getV}}>
            <img src={getT} className='tier' alt='tier'></img>
            <div className='info'>
              <p>pdls: {player[0].leaguePoints}</p>
              <p>wins: {player[0].wins}</p>
              <p>losses: {player[0].losses}</p>
            </div>
        </div>
        
      )
    }
  return (
    <>
      <h1>nome do invocador</h1>
      <div className='form__group field'>
          
          <form action="/player" onSubmit={handleSubmit}>
            <input type="input" className="form__field" value={summoner} placeholder="Name" name="name" id='name' onChange={getSummoner} required />
            <label htmlFor='name' className="form__label">digite seu nome</label>
            <div className="button">
              <button>pesquisar</button>
            </div>
          </form>
          {loading === 1 && player.length < 1 && (
            <div className='loading'>
              <div className="clock-loader"></div>
            </div> 
            
           )}
    </div>
    </>
   
  )
}

export default Form
