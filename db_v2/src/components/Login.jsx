import { useRef } from "react"
import { useNavigate } from "react-router-dom"

import './Login.css'

import logoGame from '../public/RunicRushLogo.png'

const Login = () => {
  const formulario = useRef(null)
    const navigate = useNavigate()
    
    const login = async (evt) =>{
        evt.preventDefault()
        const form = new FormData(formulario.current)
        const response = await fetch('https://lcerd7hmmg.execute-api.us-east-1.amazonaws.com/login', {
            method: "POST",
            body: form 
            })
        const data = await response.json()
       
        //falsy, truthy
        if(data.token){
            localStorage.setItem('token', data.token)
            //muevete al componente de home
            navigate('/')
        }else{
            alert('Usuario o contraseña incorrectos')
        }
    }
    
    return(
    <div className="canvas">
        <div className="background">
        </div>
        <div className="form">
            <form onSubmit={login} ref={formulario}>
                <div className="imagen">
                    <img src={logoGame} alt="RunicRush" />
                </div>
                <div className="login-container">
                <h2>LOGIN</h2>
                <div className="login-form">
                    <input type="email" name="email" placeholder="Correo" required />
                    <input type="password" name="password" placeholder="Contrasena" required />
                    <button type="submit">LOGIN</button>
                </div>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Login
