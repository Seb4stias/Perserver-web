document.addEventListener('DOMContentLoaded', () => {
    const todosLosDatos = [];
    const navbar = document.getElementById('navbar');
    const botonUnirse = document.getElementById('botonUnirse');
    const formularioContenedor = document.getElementById('formularioContenedor');
    const seccionFormulario = document.getElementById('comoUnirse');
    
    // Create datosIngresadosContenedor once in JS and append it to the form section
    const datosIngresadosContenedor = document.createElement('div');
    datosIngresadosContenedor.id = 'datosIngresadosContenedor';
    datosIngresadosContenedor.style.display = 'none'; // Initially hidden
    seccionFormulario.appendChild(datosIngresadosContenedor);

    // Crear navbar mejorado
    function crearNavbar() {
        navbar.innerHTML = `
            <div class="navbar-content">
                <h1>Mujeres STEM</h1>
                <div class="nav-links">
                    <a href="#inicio">Inicio</a>
                    <div class="nav-separator"></div>
                    <a href="#programas">Programas</a>
                    <div class="nav-separator"></div>
                    <a href="#comunidad">Comunidad</a>
                    <div class="nav-separator"></div>
                    <a href="#recursos">Recursos</a>
                    <div class="nav-separator"></div>
                    <a href="#contacto">Contacto</a>
                </div>
            </div>
        `;
    }

    // Crear formulario mejorado
    function crearFormularioRegistro() {
        formularioContenedor.innerHTML = `
            <div class="form-group">
                <label for="nombre">Nombre completo *</label>
                <input type="text" id="nombre" placeholder="Ingresa tu nombre completo" required>
            </div>
            
            <div class="form-group">
                <label for="numero">Número de teléfono</label>
                <input type="text" id="numero" placeholder="Ej: +56 9 1234 5678">
            </div>
            
            <div class="form-group">
                <label for="edad">Edad</label>
                <input type="number" id="edad" placeholder="Ingresa tu edad" min="16" max="99">
            </div>
            
            <div class="form-group">
                <label for="email">Correo electrónico *</label>
                <input type="email" id="email" placeholder="tu.email@gmail.com" required>
            </div>
            
            <div class="form-group">
                <label>Género</label>
                <div class="radio-group">
                    <div class="radio-option">
                        <input type="radio" name="sexo" value="femenino" id="sexoFemenino">
                        <label for="sexoFemenino" class="radio-label">Femenino</label>
                    </div>
                    <div class="radio-option">
                        <input type="radio" name="sexo" value="masculino" id="sexoMasculino">
                        <label for="sexoMasculino" class="radio-label">Masculino</label>
                    </div>
                    <div class="radio-option">
                        <input type="radio" name="sexo" value="otro" id="sexoOtro">
                        <label for="sexoOtro" class="radio-label">Otro</label>
                    </div>
                </div>
            </div>
            
            <div class="form-group">
                <label for="carrera">Área de interés</label>
                <select id="carrera">
                    <option value="">Selecciona un área</option>
                    <option value="tens">Técnico en Enfermería</option>
                    <option value="programacion">Programación</option>
                    <option value="electricista">Electricidad</option>
                    <option value="robotica">Robótica</option>
                    <option value="matematicas">Matemáticas</option>
                    <option value="ingenieria">Ingeniería</option>
                    <option value="ciencias">Ciencias</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="comentario">Cuéntanos sobre ti</label>
                <textarea id="comentario" placeholder="¿Qué te interesa de STEM? ¿Qué esperas de nuestra comunidad?" rows="4"></textarea>
            </div>
            
            <button type="button" class="enviar-btn" id="enviarFormulario">
                Enviar registro
            </button>
        `;

        // Agregar evento al botón de enviar
        document.getElementById('enviarFormulario').addEventListener('click', manejarEnvioFormulario);
    }

    // Manejar envío del formulario
    function manejarEnvioFormulario() {
        const nombre = document.getElementById('nombre').value.trim();
        const numero = document.getElementById('numero').value.trim();
        const edad = document.getElementById('edad').value;
        const email = document.getElementById('email').value.trim();
        const sexoSeleccionado = document.querySelector('input[name="sexo"]:checked');
        const sexo = sexoSeleccionado ? sexoSeleccionado.value : 'No especificado';
        const carrera = document.getElementById('carrera').value;
        const comentario = document.getElementById('comentario').value.trim();

        // Validaciones
        if (!nombre || !email) {
            alert('¡Ups! Por favor, ingresa tu nombre y email.');
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            alert('¡Atención! Por favor, ingresa un correo electrónico válido.');
            return;
        }

        // Guardar datos
        const nuevosDatos = {
            nombre: nombre,
            numero: numero || 'No proporcionado',
            edad: edad || 'No especificada',
            email: email,
            sexo: sexo,
            carrera: carrera || 'No especificada',
            comentario: comentario || 'Sin comentarios'
        };

        todosLosDatos.push(nuevosDatos);
        renderizarDatos();

        alert('¡Formulario enviado exitosamente! Gracias por unirte a nuestra comunidad.');

        // Ocultar formulario
        formularioContenedor.innerHTML = ''; // Clear form content
        seccionFormulario.style.display = 'none';
        botonUnirse.style.display = 'block'; // Show the "Déjanos un comentario" button again
    }

    // Renderizar datos en tabla
    function renderizarDatos() {
        if (todosLosDatos.length === 0) {
            datosIngresadosContenedor.style.display = 'none';
            return;
        }

        datosIngresadosContenedor.innerHTML = '<h2>Miembros registrados</h2>';
        const displayTable = document.createElement('table');
        displayTable.classList.add('datos-ingresados-table');

        const headerRow = displayTable.insertRow();
        const headers = ['Nombre', 'Teléfono', 'Edad', 'Email', 'Género', 'Área', 'Comentario'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        todosLosDatos.forEach(dataItem => {
            const row = displayTable.insertRow();
            row.insertCell().textContent = dataItem.nombre;
            row.insertCell().textContent = dataItem.numero;
            row.insertCell().textContent = dataItem.edad;
            row.insertCell().textContent = dataItem.email;
            row.insertCell().textContent = dataItem.sexo;
            row.insertCell().textContent = dataItem.carrera;
            row.insertCell().textContent = dataItem.comentario;
        });

        datosIngresadosContenedor.appendChild(displayTable);
        datosIngresadosContenedor.style.display = 'block'; // Show the table container
    }

    // Evento del botón principal
    botonUnirse.addEventListener('click', (event) => {
        event.preventDefault();
        crearFormularioRegistro();
        botonUnirse.style.display = 'none'; // Hide the "Déjanos un comentario" button
        seccionFormulario.style.display = 'block'; // Show the form section
        seccionFormulario.scrollIntoView({ behavior: 'smooth' });
    });

    // Inicializar la navbar
    crearNavbar();
});