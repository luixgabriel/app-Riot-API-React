import React, { useState } from 'react'
import {baseURL, apiKey} from '../../config/api'
// eslint-disable-next-line no-unused-vars
import {iron, bronze, silver, gold, platinum, diamond, master,  grandmaster, challenger} from '../../config/imgsTIER';
import getTier from '../../config/getTier';
import getColors from '../../config/getColors';
import './Form.css';



const Form = () => {

    const [summoner, setSummoner] = useState('')
    const [player, SetPlayer] = useState([])
    const [loading, setLoading] = useState(0)
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(1)
        const getRiotID = async () => {
          try {
            const response = await fetch(`${baseURL}lol/summoner/v4/summoners/by-name/${summoner}${apiKey}`)
            const data = await (response.json())
            const id = data.id
            return id
            
          } catch (error) {
            console.log(error)
            return
          }
        }

        const getPlayer = async () =>{
          const riotID = await getRiotID()
          const response = await fetch(`${baseURL}tft/league/v1/entries/by-summoner/${riotID}${apiKey}`)
          const data = await (response.json())
          console.log(data)
          SetPlayer(data)
          }
          
          await getPlayer()  
        
        
       
    }

    
    const getSummoner = (e) =>{
        setSummoner(e.target.value)
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
