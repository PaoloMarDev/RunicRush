
import './Leaderboard.css'

const Leaderboard = () => {

  
  return (
    <div className="leaderboard">
        <div className='Title'>
          <h2>Leaderboard</h2>
        </div>
        <table>
          <thead>
              <tr>
              <th>#</th>
              <th>Jugador</th>
              <th>Distancia</th>
              <th>Partidas</th>
              <th>Monedas</th>
              <th>Racha de Días</th>
              </tr>
          </thead>
          <tbody>
              <tr>
              <td>🥇</td><td>Player 1</td><td>3587m</td><td>54</td><td>120</td><td>120</td>
              </tr>
              <tr>
              <td>🥈</td><td>Player 2</td><td>2984m</td><td>83</td><td>101</td><td>120</td>
              </tr>
              <tr>
              <td>🥉</td><td>Player 3</td><td>1800m</td><td>10</td><td>80</td><td>120</td>
              </tr>
              <tr>
              <td>4</td><td>Player 4</td><td>800m</td><td>25</td><td>20</td><td>120</td>
              </tr>
              <tr>
              <td>5</td><td>Player 5</td><td>800m</td><td>25</td><td>20</td><td>120</td>
              </tr>
          </tbody>
        </table>
  </div>
  )
}

export default Leaderboard