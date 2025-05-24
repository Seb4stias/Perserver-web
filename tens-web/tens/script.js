document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón por su ID
    const botonGenerar = document.getElementById('generarContenidoBtn');

    // Seleccionar el contenedor donde se inyectará el contenido
    const contenedorPrincipal = document.getElementById('contenidoGenerado');

    // Añadir un "escuchador de eventos" al botón para cuando se haga clic
    botonGenerar.addEventListener('click', function() {
  
        // Crear el párrafo
        const parrafo = document.createElement("p");
        parrafo.innerHTML = "nuestro equipo mujeres stem esta conformado por un grupo selecto de personas interesadas en el club e involucrada con la mejora constante de el";

        // Crear el título h1
        const titulo = document.createElement("h1");
        titulo.innerHTML = "este es nuestro equipo administrativo de mujeres stem";

        // Crear la imagen
        const imagen = document.createElement("img");
        imagen.src = ""; 
        imagen.alt = "foto grupal del equipo";
        
        //lider 
        const tituloLider = document.createElement("h1");
        titulo.innerHTML = "ella es (nombre persona) es nuestra lider, creadora de mujeres stem"
        
        const ParrafoLider = document.createElement("p");
        titulo.innerHTML = "nuestra lider tuvo la idea de crear el grupo mujeres stem para bla bla bla bla bla bla bla bla bla bla bla bla bla "
      
        const fotolider = document.createElement("img");
        imagen.scr = "";
        imagen.alt = "foto de la lider";

        
        contenedorPrincipal.appendChild(titulo);
        contenedorPrincipal.appendChild(parrafo);
        contenedorPrincipal.appendChild(imagen);
        contenedorPrincipal.appendChild(tituloLider);
        contenedorPrincipal.appendChild(ParrafoLider);
        contenedorPrincipal.appendChild(fotolider);

     
    });
});