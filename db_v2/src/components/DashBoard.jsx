import NavBar from './NavBar'
import Estadisticas from './Estadisticas'
import Leaderboard from './Leaderboard'

import AulifyElement_1 from '../public/ElementosAulify.png'

const DashBoard = () => {
    return (
        <div>
          <div className='ElementoAulify'>
            <img src={AulifyElement_1} />
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