link GitHub: https://github.com/claudiocortespasten-svg/modulo-4.git
Autor: Claudio Cortés Pastén

# Evaluación Final Módulo 4 - Gestor de Usuarios

## 1. Objetivo de la Aplicación
Aplicación web que consume la API pública de JSONPlaceholder para gestionar y consultar datos de 10 usuarios de prueba. 

El objetivo es demostrar el uso de XMLHttpRequest síncrono, Programación Orientada a Objetos con class, y manipulación de arreglos de objetos JSON usando .map(), .find() y .sort().

## 2. Funcionalidades
La aplicación cuenta con 6 botones que muestran los resultados por consola F12:

1.  *Listar nombres*: Muestra el nombre de los 10 usuarios.
2.  *Info básica por nombre*: Pide un nombre y muestra username y email.
3.  *Dirección por nombre*: Pide un nombre y muestra el objeto address completo.
4.  *Info avanzada por nombre*: Pide un nombre y muestra phone, website y company.
5.  *Listar compañías + catchphrase*: Lista todas las empresas y su frase.
6.  *Nombres ordenados A-Z*: Muestra todos los nombres ordenados alfabéticamente con localeCompare().

## 3. Tecnologías Utilizadas
- *HTML5*: Estructura de la página.
- *Bootstrap 5.3*: Estilos y botones.
- *JavaScript Vanilla ES6*: Lógica con class GestorUsuarios.
- *XMLHttpRequest*: Para cargar los datos de forma síncrona al iniciar.
- *API*: https://jsonplaceholder.typicode.com/users

## 4. Cómo Ejecutar
1.  Clonar o descargar el repositorio.
2.  Abrir el archivo index.html directamente en el navegador.
3.  Presionar F12 para abrir la consola de desarrollador.
4.  Hacer clic en los botones y seguir las instrucciones del prompt.

## 5. Estructura de Carpetas
- `index.html`: Interfaz con Bootstrap y los 6 botones.
- `js/app.js`: Clase `GestorUsuarios` con la lógica y la API.
- `README.md`: Documentación del proyecto.
evaluacion-modulo4/
├── http://index.html
├── js/
│   └── http://app.js
└── http://README.md




