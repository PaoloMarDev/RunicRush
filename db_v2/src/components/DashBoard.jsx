import NavBar from './NavBar'
import Estadisticas from './Estadisticas'
import Leaderboard from './Leaderboard'

import AulifyElement_1 from '../public/ElementosAulify.png'


import '../App.css'

const DashBoard = () => {
    return (
        <div className='content'>
          <div className='ElementoAulify'>
            <img src={AulifyElement_1} alt="Imagen de fondo"/>
          </div>
          <NavBar />
          
          <section>
            <Estadisticas/>
            <Leaderboard/>
          </section>
        </div>
    )
}

export default DashBoard