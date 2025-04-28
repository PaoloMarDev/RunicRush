
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './components/Login.jsx'
import DashBoard from './components/DashBoard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<ProtectedRoute><DashBoard /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
