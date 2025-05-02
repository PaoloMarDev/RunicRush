import NavBar from './NavBar'
import Estadisticas from './Estadisticas'
import Leaderboard from './Leaderboard'

import AulifyElement_1 from '../public/ElementosAulify.png'


import '../App.css'

const DashBoard = () => {
    return (
        <div className='content'>
          <img className='ElementoAulify' src={AulifyElement_1} alt="Imagen de fondo"/>
          <NavBar />
          
          <section>
            <Estadisticas/>
            <Leaderboard/>
          </section>
        </div>
    )
}

export default DashBoard