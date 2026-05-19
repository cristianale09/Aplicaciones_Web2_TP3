# Trabajo Práctico 3

Aplicación web desarrollada con **Node.js**, **Express**, **HTML**, **CSS** y **JavaScript**. 
El proyecto incluye un frontend estático y un backend básico con rutas para usuarios y productos utilizando archivos JSON como almacenamiento de datos.

---

# Tecnologías utilizadas

- Node.js
- Express.js
- HTML5
- CSS3
- JavaScript
- JSON como base de datos simple

---

📁 Estructura del proyecto

```bash
trabajo_practico3
├── data
│ ├── products.json
│ └── users.json
├── node_modules
├── public
│ ├── assets
│ │ ├── Icons
│ │ ├── IMG
│ │ └── Logo
│ ├── pages
│ │ ├── home
│ │ │ ├── index.html
│ │ │ └── index.js
│ │ ├── login
│ │ │ ├── login.html
│ │ │ └── auth.js
│ │ └── pages
│ │ ├── contacto.html
│ │ ├── productos-gabinetes.html
│ │ ├── productos-memoria.html
│ │ ├── productos-motherboard.html
│ │ ├── productos-placa_video.html
│ │ ├── productos-teclado_mouse.html
│ │ ├── productos.html
│ │ ├── quienes.html
│ │ ├── script-contact.js
│ │ └── script.js
│ ├── utils
│ │ └── sessionStorage.controller.js
│ └── styles
│ ├── styles-login.css
│ └── styles.css
├── routes
│ ├── user.routes.js
│ └── product.routes.js
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
---

⚙️ Instalación

Clonar repositorio:
```

git clone https://github.com/cristianale09/Aplicaciones_Web2_TP3.git

```

Entrar al proyecto

```

cd trabajo_practico3

```

Instalar dependencias
```

npm install

```

---

▶️ Ejecutar el proyecto
Iniciar el servidor con:

```

node index.js

```

Servidor en:

```

http://localhost:3000

```

---


🔗 Rutas principales
Productos
•	/products 
•	/products/:id 
Usuarios
•	/users 
•	/login 
Las rutas pueden variar según la implementación en Express.

---

👨‍💻 Autor
Cristian Ale



