import React, { useEffect, useState } from 'react'

const Rank = ({ usuario, position }) => {
  
  // Crear el estado de oficinal {} es llaves ya que se inicializa con un objeto vacio
 const [info, setInfo] = useState({})

 //useEffect
     //Recuperar los datos de la oficina
 useEffect(() => {
     fetch(`https://x7a34rbozg.execute-api.us-east-1.amazonaws.com/getLeaderboard/${usuario.userId}`, {
         method: 'GET',
         headers: {
            authorization: `Bearer ${localStorage.getItem('tokenAulify')}`
        }
     })
     .then(data => data.json())
     .then((data) => {
        setInfo(data[0])
     })
     
 }, [usuario.userId])

    return (
    <tr>
        <td>{position}</td>
        <td>{info.gamerTag}</td>
        <td>{info.distance}</td>
        <td>{info.games}</td>
    </tr>
  )
}

export default Rank