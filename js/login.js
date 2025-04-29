// /js/login.js

// Importar los módulos de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Configuración de Firebase (reemplaza con tu configuración)
const firebaseConfig = {
  apiKey: "AIzaSyChxVnCIfaS9qkD3oIgwDhu-qGMPdkdzLw",
  authDomain: "databasepi-ecfbe.firebaseapp.com",
  projectId: "databasepi-ecfbe",
  storageBucket: "databasepi-ecfbe.firebasestorage.app",
  messagingSenderId: "1079868632379",
  appId: "1:1079868632379:web:4f70a5be3b7ca026e01b1e",
  measurementId: "G-EM061DTEM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializar Firebase
const auth = getAuth(app);

// Manejar el evento de inicio de sesión
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario recargue la página

    // Obtener los valores del formulario
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Intentar iniciar sesión con Firebase
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Si las credenciales son correctas, redirigir al dashboard
            window.location.href = "dashboard.html"; // Asegúrate de tener esta página
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            // Mostrar un mensaje de error si las credenciales son incorrectas
            alert("Error: " + errorMessage);
        });
});
