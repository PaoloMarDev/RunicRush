
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Estadisticas from './components/Estadisticas'
import Leaderboard from './components/Leaderboard'

import './App.css'

import AulifyElement_1 from './public/ElementosAulify.png'

function App() {

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

export default App
