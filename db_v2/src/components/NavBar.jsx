
import { Outlet } from 'react-router-dom'

import './Navbar.css'

import logoAulify from '../public/AulifyLogo.png'
import logoAulifyGames from '../public/AulifyGameslogo.png'
import runicRushLogo from '../public/RunicRushLogo.png'

const NavBar = () => {


  
  return (
    <div className='content'>
        <header className='menuPlace'>
            <img src={logoAulify} alt="Foto de perfil o logo de Aulify" className='Aulify'/>
            <img src={logoAulifyGames} alt="Foto de perfil o logo de Aulify" className='AulifyGames'/>  
        </header>

        <header className='navbar'>
          <h1>RunicRush</h1>
          <img src={runicRushLogo} alt="Foto de perfil o logo de Aulify" className='RunicRushLogo'/>   
        </header>
    </div>

    
  )
}

export default NavBar
