import React from 'react'
import './Panel.css'
import Form from '../form/Form'

const Panel = () => {

  return (
    <div className='panel'>
       <img src={require('../../assets/imgs/jinx.png')} className='img-jinx' alt='jinx'></img>
        <Form />
    </div>
  )
}

export default Panel;
