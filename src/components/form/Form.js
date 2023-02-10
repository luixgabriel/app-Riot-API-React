import React, { useEffect, useState } from 'react'

import {api, apiKey} from '../../config/api'
import './Form.css'


const Form = () => {
    const [riotID, setRiotID] = useState('')
    const [summoner, setSummoner] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const getSummoner = (e) =>{
        setSummoner(e.target.value)
    }
    
    useEffect(()=>{
        const getRiotID = async ()=> {
            const response = await api.get(apiKey);
            console.log(response)
        }
        getRiotID() 
    }, [])

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
