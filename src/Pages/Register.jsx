import React, { Fragment } from 'react'
import mundo from '../assets/mundo.svg'
import logo from '../assets/logoavion.svg'
import '../styles/Register.css'
import { Link } from 'react-router-dom'


export default function Register() {
  return (
    <Fragment>
        <div className="container_principal">
            <img className="avion" src={logo} alt="logo avion" />
            <div className="container_world">
                <img src={mundo} alt="img mundo" />
            </div>
            <h2>Register</h2>
            <div className='container_Register'>
                <input type="text" placeholder='username' />
                <input type="text" placeholder='Correo Electronico'/>
                <input type="text" placeholder='password'/>

            </div>

            <div className='container_button_R'>
                <button
                className='btn_R'>Registrate</button>
            </div>

            <div className='registrado'>
                <p>¿Ya estas registrado? <Link to='/' className='logueate'>Logueate</Link></p>
            </div>
        </div>
    </Fragment>
  )
}
