import './Estadisticas.css'

import Personaje from '../public/Personaje.png'

const Estadisticas = () => {



  return (
    <div>
      <div className="card">
        <div className='stats'>
          <img className="avatar" src={Personaje} alt="Personaje" />
          <div className="info">
            <div className='stats-info'>

            <div className="stats-stickers">
              <div className="stickers">
                <strong>11/20</strong>
                <p>Stickers desbloqueados</p>
              </div>
              <img className="icon" src="stickers.png" alt="Icono stickers" />
            </div>

            <div className="stats-middle">
              <div>
                <strong>1,350</strong>
                <p>Monedas</p>
              </div>
              <div>
                <strong>98</strong>
                <p>Partidas</p>
              </div>
            </div>
            </div>
            <div className="stats-bottom">
            <strong className="score">7,100</strong><br /><p>Distancia Máxima</p>
            </div>
          </div>
        </div>
        <p className="username">PlayerRR1</p>
      </div>
    </div>
  )
}

export default Estadisticas