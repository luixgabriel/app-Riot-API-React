import React, { useState } from 'react'
import {baseURL, apiKey} from '../../config/api'
import './Form.css'
import Panel from '../panel/Panel'



const Form = (props) => {
    
    const [summoner, setSummoner] = useState('')
    const [player, SetPlayer] = useState([])
    const [loading, setLoading] = useState(0)
    // const [dataplayer, Setdataplayer] = ('')

    const dataplayer = 'luixgabriel'
  
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
          SetPlayer(data)
          console.log(player[0].tier)
          }

          getPlayer()  
       
    }
    const getSummoner = (e) =>{
        setSummoner(e.target.value)
    }
    
    if(player.length > 0){
      return(
        // <Panel dataplayer={dataplayer}/>
        <h1>{player[0].tier}</h1>
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
          {summoner}

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
