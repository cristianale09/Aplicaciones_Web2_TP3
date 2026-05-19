import { addSession } from "../../utils/sessionStorage.controller.js"

const formLogin = document.getElementById('formLogin')
const API_URL = 'http://localhost:3000'

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

// Manejador del evento submit del formulario de login
formLogin.addEventListener('submit', async function(e) {
    e.preventDefault()

    const username = document.getElementById('user').value.trim()
    const password = document.getElementById('pass').value

    if (!username || !password) {
        alert('Campos faltantes')
        return
    }

    try {
        const response = await auth({ username, password })
        addSession(response.user)  // ← guardás solo el usuario, no el objeto completo
        alert(`¡Bienvenido, ${response.user.name}!`)  // ← accedés a response.user.name
        window.location.href = '../home/index.html'
    } catch (error) {
        alert('Usuario o contraseña incorrectos')
        document.getElementById('pass').value = ''
    }
})