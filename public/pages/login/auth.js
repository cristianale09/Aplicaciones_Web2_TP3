import { addSession } from "../../utils/sessionStorage.controller.js"
import { alert, handleAlert, handleCloseAlert} from "../../components/alert.js"

const formLogin = document.getElementById('formLogin')
const alertContainer = document.getElementById('alert_container')
const btnCloseAlert = document.getElementById('btnCloseAlert')
const API_URL = 'http://localhost:3000'

alertContainer.innerHTML = alert()

/*
    input= lo que ingresa el usuario por medio de los txt
    output= la info del json en base al usuario ingresado
*/

// Función para autenticar al usuario
const auth = async ({ username, password }) => {
    const res = await fetch(`${API_URL}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })

    if (!res.ok) throw new Error('Credenciales inválidas')
    return res.json()
}

btnCloseAlert.addEventListener('click', () =>{
    handleCloseAlert()
})

// Manejador del evento submit del formulario de login
formLogin.addEventListener('submit', async (e) => {
    e.preventDefault()

    const username = document.getElementById('user').value.trim()
    const password = document.getElementById('pass').value.trim()

    if (!username || !password) {
        alert('Campos faltantes')
        return
    }
    try {
        const { user } = await auth({ username, password })
        addSession(user)
        handleAlert(`Bienvenido ${user.name}`)
        window.location.href = '../home/index.html'
    } catch (error) {
        console.error(error)        
        handleAlert('Usuario o contraseña incorrectos')
        document.getElementById('pass').value = ''
    }
})