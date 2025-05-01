import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"

import './Leaderboard.css'

import Rank from './Rank'

const Leaderboard = () => {

  const [ playerInfo, setplayerInfo] = useState([])

     // UseEffect Traer los usuario de nuestra base
     useEffect(() => {
         fetch('https://x7a34rbozg.execute-api.us-east-1.amazonaws.com/getLeaderboard', {
             method: "GET",
             headers: {
                authorization: `Bearer ${localStorage.getItem('tokenAulify')}`
            }
         })
         .then(data => data.json())
         .then((data) => {
          setplayerInfo(data)
         })
         .catch((error) => {
          console.error('Error al obtener datos:', error);
        })
     }, [])

  
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
              </tr>
          </thead>
          <tbody>
              {playerInfo.slice(0,6).map( (usuario, index) => <Rank key={usuario.userId} usuario = { usuario } position={index + 1} />)} 
          </tbody>
        </table>
  </div>
  )
}

export default Leaderboard
