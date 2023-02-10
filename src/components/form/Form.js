import React, { useState } from 'react'

import {api, apiKey} from '../../config/api'
import './Form.css'


const Form = () => {
    const [summoner, setSummoner] = useState('')
    const [player, setPlayer] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
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
    </div>
  )
}

export default Form
