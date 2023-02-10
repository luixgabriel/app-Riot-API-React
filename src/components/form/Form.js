import React, { useState } from 'react'
import {api, apiKey} from '../../config/api'
import './Form.css'
import ClockLoader from '../clock-loader/ClockLoader'


const Form = () => {
    const [summoner, setSummoner] = useState('')
    const [player, setPlayer] = useState('vascoooo')
    const [loading, setLoading] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(1)
        const getRiotID = async () => {
          try {
            const response = await api.get(`${summoner}${apiKey}`);
            const id = response.data.id
            alert('oi')
            return id
          } catch (error) {
            console.log(error)
            return
          }
        }

        const getPlayer = async () =>{
          const riotID = await getRiotID()
          console.log(riotID)
          }

          getPlayer()
       
    }

    const getSummoner = (e) =>{
        setSummoner(e.target.value)
    }
    
  return (
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
  )
}

export default Form
