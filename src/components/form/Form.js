import React, { useEffect, useState } from 'react'
import './Form.css'

const Form = () => {
    const [riotID, setRiotID] = useState('')
    const [summoner, setSummoner] = useState('')

    const getSummoner = (e) =>{
        e.preventDefault()
        setSummoner(e.target.value)
    }
    
    useEffect(()=>{

    }, [])

  return (
    <div className='form__group field'>
          <form action="/player">
            <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
            <label for="name" value={summoner} className="form__label" onChange={getSummoner}>digite seu nome</label>
            <div className="button">
              <button>pesquisar</button>
            </div>
          </form>
    </div>
  )
}

export default Form
