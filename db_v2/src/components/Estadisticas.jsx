import './Estadisticas.css'

import Personaje from '../public/Personaje.png'
import { useEffect, useState } from 'react'

const Estadisticas = () => {

  const [info, setInfo] = useState();
  const [coins, setCoins] = useState();
  const [partidas, setPartidas] = useState();
  const [topdistance, settopdistance] = useState();
  const [userName, setUserName] = useState();

    useEffect(() => {
      // Obtener la información del último sticker conseguido por el usuaro
      fetch('https://x7a34rbozg.execute-api.us-east-1.amazonaws.com/getStickersFromAulify', {
        method: "GET",
        headers: {
          "X-Api-Key": "tec_api_KdZRQLUyMEJJHDqztZilqg",
          authorization: `Bearer ${localStorage.getItem('tokenAulify')}`
          }
          })
          .then(data => data.json())
          .then((data) => {
            setInfo(data)
          })
          .catch((error) => {
            console.error('Error al obtener datos:', error);
          })
              
      // Obtener la información del las monedas del usuaro
      fetch('https://x7a34rbozg.execute-api.us-east-1.amazonaws.com/getCoinsAulify', {
        method: "GET",
        headers: {
              "X-Api-Key": "tec_api_KdZRQLUyMEJJHDqztZilqg",
              authorization: `Bearer ${localStorage.getItem('tokenAulify')}`
          }
      })
      .then(data => data.json())
      .then((data) => {
        setCoins(data)
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      })
      
      // Obtener la cantidad de partidas jugadas por el usuario
      fetch('https://x7a34rbozg.execute-api.us-east-1.amazonaws.com/getTotalGames', {
        method: "POST",
        body: JSON.stringify({
          id: localStorage.getItem('playerId')
        }),
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(data => data.json())
      .then((data) => {
        setPartidas(data)
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      })
      
      // Obtener la cantidad de partidas jugadas por el usuario
      fetch('https://x7a34rbozg.execute-api.us-east-1.amazonaws.com/getPlayerTagById', {
        method: "POST",
        body: JSON.stringify({
          id: localStorage.getItem('playerId')
        }),
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(data => data.json())
      .then((data) => {
        setUserName(data)
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      })

      // Obtener la cantidad de partidas jugadas por el usuario
      fetch('https://x7a34rbozg.execute-api.us-east-1.amazonaws.com/getDistanceRecord', {
        method: "POST",
        body: JSON.stringify({
          id: localStorage.getItem('playerId')
        }),
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(data => data.json())
      .then((data) => {
        settopdistance(data)
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      })
      
    }, [])
    
    return (
      <div>
      <div className="card">
        <div className='stats'>
          <img className="avatar" src={Personaje} alt="Personaje" />
          <div className="info">
            <div className='stats-info'>

            <div className="stats-stickers">
              <div className="stickers">
                <strong>{info?.name}</strong> 
                <p>Último Sticker desbloqueado</p>
              </div>
              <img className="" src={info?.image} alt="Icono stickers" />
            </div>

            <div className="stats-middle">
              <div>
                <strong>{coins?.coins}</strong>
                <p>Monedas</p>
              </div>
              <div>
                <strong>{partidas?.totalGames}</strong>
                <p>Partidas</p>
              </div>
            </div>
            </div>
            <div className="stats-bottom">
            <strong className="score">{topdistance?.distanceRecord}</strong><br /><p>Distancia Máxima</p>
            </div>
          </div>
        </div>
        <p className="username">{userName?.gamerTag}</p>
      </div>
    </div>
  )
}

export default Estadisticas