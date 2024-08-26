import React from 'react'
import '../styles/Login.css'
import mundo from '../assets/mundo.svg'
import logo from '../assets/logoavion.svg'
import { Link } from 'react-router-dom'

function LoginV() {
  return (
    <div>
       <div className="container_principal">
            <img className="avion" src={logo} alt="logo avion" />
            <div className="container_world">
                <img src={mundo} alt="img mundo" />
            </div>
            <div className='container-login' >
              <h3>Log In</h3>
              <input type="text" placeholder='Digite el usuario: ' />
              <input type="password" placeholder='Digite la contraseña: ' />

              <button className='btn-log'>LOG IN</button>
              <Link to='/' className='cuenta'>No tienes cuenta? Registrate</Link>
            </div>
        </div>
    </div>
  )
}
export default LoginV