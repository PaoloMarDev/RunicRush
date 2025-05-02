
import { Outlet } from 'react-router-dom'

import './Navbar.css'

import logoAulify from '../public/AulifyLogo.png'
import logoAulifyGames from '../public/AulifyGameslogo.png'
import runicRushLogo from '../public/RunicRushLogo.png'

const NavBar = () => {


  
  return (
    <div className='content-navbar'>
        <header className='menuPlace'>
          <a href="https://www.aulify.mx" target="_blank" className='Aulify'>
            <img src={logoAulify} alt="Foto de perfil o logo de Aulify" className='Aulify'/>
          </a>
            <a href="https://www.aulify.mx/videojuegos" className='AulifyGames' target="_blank">
              <img src={logoAulifyGames} alt="Foto de perfil o logo de Aulify" className='AulifyGames'/>  
            </a>
        </header>

        <header className='navbar'>
          <h1>RunicRush</h1>
          <img src={runicRushLogo} alt="Foto de perfil o logo de Aulify" className='RunicRushLogo'/>   
        </header>
    </div>

    
  )
}

export default NavBar
