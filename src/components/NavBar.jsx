//import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "../styles/NavBar.css"


export const NavBar = () => {
  return (
    <header className='nav'>
        <div>
          <Link to="/"><div className='logo'></div></Link>  
        </div>
        <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/Menu">Menu</NavLink></li>
            <li><NavLink to="/Reserva">Reserva</NavLink></li>
            <li><NavLink to="/Encuentranos">Encuentranos</NavLink></li>   
        </ul>
    </header>
  )
}

//?  <li as={ NavLink } to="/">Inicio</li>