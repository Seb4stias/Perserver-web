document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const validUsername = 'soulwalle';
    const validPassword = 'Gkpip231303@;';

    // Lógica para el cambio de tema
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            const icon = themeToggle.querySelector('i');
            if (icon) {
                if (body.classList.contains('dark-mode')) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            }

            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });

        // Carga la preferencia del tema al cargar la página
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        } else {
            body.classList.remove('dark-mode');
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    } else {
        console.warn("El botón con ID 'theme-toggle' no se encontró en el DOM.");
    }

    // Lógica para el formulario de login
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const enteredUsername = usernameInput.value;
            const enteredPassword = passwordInput.value;

            if (enteredUsername === validUsername && enteredPassword === validPassword) {
                errorMessage.textContent = '';
                alert('¡Inicio de sesión exitoso!');
                
            } else {
                errorMessage.textContent = 'Usuario o contraseña incorrectos.';
            }
        });
    } else {
        console.warn("El formulario con ID 'loginForm' no se encontró en el DOM.");
    }
});