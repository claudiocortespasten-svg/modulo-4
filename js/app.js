class GestorUsuarios {
    constructor() {
        this.usuarios = [];
        this.cargarDatos ();
    }
    
    cargarDatos() {
        console.log("Cargando datos con XMLHttpRequest...");
        const xhr= new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', false);

        xhr.send();

        if (xhr.status === 200) {
            this.usuarios = JSON.parse(xhr.responseText);
            console.log("Datos cargados:", this.usuarios);
        } else {
            console.error("Error al cargar:", xhr.status);
            alert("No se pudo cargar la data");
        }
    }

    listarNombres(){
        console.clear();
        console.log("---Nombres de todos los usuarios---");
        this.usuarios.map(u => console.log(u.name));
    }

    buscarInfoBasica() {
        const nombre = prompt("Ingrese el nombre del usuario:");
        const usuario = this.usuarios.find(u => u.name.toLowerCase() === nombre.toLowerCase());

        console.clear();
        if(usuario) {
            console.log(`---Info básica de ${usuario.name}---`);
            console.log(`Username: ${usuario.username}`);
            console.log(`Correo: ${usuario.email}`);
        } else {
            console.log("Usuario no encontrado");
        }
    }

    buscarDireccion() {
        const nombre = prompt("Ingrese el nombre del usuario:");
        const usuario = this.usuarios.find(u => u.name.toLowerCase() === nombre.toLowerCase());

        console.clear();
        if(usuario) {
            console.log(`---Dirección de ${usuario.name}---`);
            console.log(usuario.address);
        } else {
            console.log("Usuario no encontrado");
        }
    }

    buscarInfoAvanzada() {
        const nombre = prompt("Ingrese el nombre del usuario:");
        const usuario = this.usuarios.find(u => u.name.toLowerCase() === nombre.toLowerCase());

        console.clear();
        if(usuario) {
            console.log(`---Info avanzada de ${usuario.name}---`);
            console.log(`Telefono: ${usuario.phone}`);
            console.log(`Sitio Web: ${usuario.website}`);
            console.log(`Compañia:`, usuario.company);
        } else {
            console.log("Usuario no encontrado");
        }
    }

    listarCompanias(){
        console.clear();
        console.log("---Compañias---");
        this.usuarios.map(u => {
            console.log(`Empresa: ${u.company.name} | Frase: "${u.company.catchPhrase}"`);
        });
    }

    listarNombresOrdenados(){
        console.clear();
        console.log("---Nombres ordenados---");
        const nombresOrdenados = [...this.usuarios] 
            .map(u=> u.name)
            .sort((a, b) => a.localeCompare(b));

        nombresOrdenados.forEach(n => console.log(n));
    }
}

const gestor = new GestorUsuarios();

