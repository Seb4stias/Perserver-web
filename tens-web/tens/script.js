document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target[0].value;
    alert(`Gracias por inscribirte con el correo: ${email}`);
});

function crearelemento(){

            // Crear el párrafo
            var parrafo = document.createElement("p");
            parrafo.innerHTML = "este parrafo esta creado con el pto dom☠️";

            // Crear el título h1
            var titulo = document.createElement("h1");
            titulo.innerHTML = "este es el mejor titulo creado con el puto dom ☠️👌";

            //colocar img
            var imagen = document.createElement("img");
            imagen.src = "imagenes/epdom.png";
            imagen.alt = "aqui presentamos al puto dom en persona ";
            imagen.width = 800;

            // Adjuntar los elementos al body
            document.body.appendChild(titulo);
            document.body.appendChild(parrafo);
            document.body.appendChild(imagen);
        }
     
