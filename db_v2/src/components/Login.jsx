import { useRef } from "react"
import { useNavigate } from "react-router-dom"

import './Login.css'

import logoGame from '../public/RunicRushLogo.png'
import AulifyLogo from '../public/AulifyLogo.png'

const Login = () => {
    const formulario = useRef(null)
    const navigate = useNavigate()

    const login = async (evt) => {
        evt.preventDefault()
        const form = new FormData(formulario.current)
        const email = form.get('email')
        const password = form.get('password')
        const namertag = form.get('namertag')

        // Primer fetch: solo email y password
        const loginFormData = new FormData()
        loginFormData.append('email', email)
        loginFormData.append('password', password)

        const response = await fetch('https://x7a34rbozg.execute-api.us-east-1.amazonaws.com/aulifyLogin', {
            method: "POST",
            body: loginFormData,
            headers: {
                "X-Api-Key": "tec_api_KdZRQLUyMEJJHDqztZilqg",
            }
        })

        const data = await response.json()

        if (data.token) {
	     localStorage.setItem('tokenAulify', data.token)
            // Segundo fetch: solo email y namertag, sin headers
            const registerFormData = new FormData()
            registerFormData.append('email', email)
            registerFormData.append('namertag', namertag)

            const confirmarResponse = await fetch('https://x7a34rbozg.execute-api.us-east-1.amazonaws.com/registerPlayer', {
                method: "POST",
                body: registerFormData,
            })

            const confirmarData = await confirmarResponse.json()

            if (confirmarData.token && confirmarData.playerId) {
                localStorage.setItem('token', confirmarData.token)
                localStorage.setItem('playerId', confirmarData.playerId)
                navigate('/')
            } else {
                alert('Error al registrar jugador')
            }
        } else {
            alert('Usuario o contraseña incorrectos')
        }
    }

    return (
        <div className="canvas">
            <div className="background"></div>
            <div className="form">
                <form onSubmit={login} ref={formulario}>
                    <div className="imagen">
                        <img src={logoGame} alt="RunicRush" />
                    </div>
                    <div className="login-container">
                        <h2>LOGIN</h2>
                        <div className="login-form">
                            <input type="email" name="email" placeholder="Correo" required />
                            <input type="namertag" name="namertag" placeholder="Namertag" required />
                            <input type="password" name="password" placeholder="Contraseña" required />
                            <button type="submit">LOGIN</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login