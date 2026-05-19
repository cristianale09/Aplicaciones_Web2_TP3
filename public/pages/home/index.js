import { getSession } from "../utils/sessionStorage.controller.js"
import productRouter from '../pages/script-products.js'
import productRouter from './routes/product.routes.js'

app.use('/products', productRouter)

app.use('./products', productRouter)

const txtSaludo = document.getElementById('txtsaludo')

const user = getSession('user')

txtSaludo.textContent = `Hola ${user.name} ${user.lastName}`

import { getSession } from "../utils/sessionStorage.controller.js"

//Verificamos si hay sesión para mostrar el nombre del usuario en el botón de login y cambiar su funcionalidad a logout
const authLink = document.getElementById('authLink')
const authButton = document.getElementById('authButton')

const user = getSession()

if (user) {
    // Hay sesión: cambiás el botón a "Cerrar Sesión"
    authButton.textContent = `${user.name} | Cerrar Sesión`
    authLink.href = '#'
    authLink.addEventListener('click', (e) => {
        e.preventDefault()
        sessionStorage.removeItem('user')
        window.location.reload()
    })
} else {
    // No hay sesión: botón normal de login
    authButton.textContent = 'Iniciar Sesión'
    authLink.href = 'login.html'
}