import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Button.css'

const Button = () => {
  return (
    <div className='goback'>
        <Link to="/"><button className='go-back-btn'> Back to home </button></Link>
    </div>
  )
}

export default Button