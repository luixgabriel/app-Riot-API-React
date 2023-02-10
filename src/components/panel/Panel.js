import React from 'react'
import './Panel.css'
import Form from '../form/Form'

const Panel = () => {
  return (
    <div className='panel'>
       <img src={require('../../assets/imgs/jinx.png')} className='img-jinx' alt='jinx'></img>
        <h1>nome do invocador</h1>
        <Form/>
    </div>
  )
}

export default Panel;
