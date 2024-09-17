// Función para manejar el clic en el botón
function presentarPersonaje() {
    // Mostrar el prompt al usuario
    const nombreIngresado = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");

    // Diccionario de nombres completos
    const nombresCompletos = {
        "Mario": "Mario",
        "Luigi": "Luigi",
        "Bowser": "Bowser Morton Koopa",
        "Peach": "Princesa Peach Toadstool",
        "Yoshi": "T. Yoshisaur Munchakoopas",
        "Toad": "Toad",
        "Toadette": "Toadette",
        "Daisy": "Princesa Daisy"
    };

    // Obtener el nombre completo o "desconocido" si no es válido
    const nombreCompleto = nombresCompletos[nombreIngresado] || "(desconocido)";

    // Mostrar la respuesta en la consola
    console.log(nombreCompleto);

    // Mostrar la respuesta en el span
    document.getElementById("personaje").textContent = nombreCompleto;

    // Si el nombre ingresado es válido, buscar el elemento con el ID correspondiente
    if (nombreCompleto !== "(desconocido)") {
        const idElemento = nombreIngresado.toLowerCase();
        const elemento = document.getElementById(idElemento);

        // Si el elemento existe, establecer el atributo title
        if (elemento) {
            elemento.title = "Presentado";
        }
    }

    // Ocultar el botón después de hacer clic
    document.getElementById("boton-presentar").style.display = "none";
}

// Agregar el evento de clic al botón
document.getElementById("boton-presentar").addEventListener("click", presentarPersonaje);