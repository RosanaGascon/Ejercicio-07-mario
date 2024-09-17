function presentarPersonaje() {
    const nombreIngresado = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
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

    const nombreCompleto = nombresCompletos[nombreIngresado] || "(desconocido)";
    console.log(nombreCompleto);

    // Solo actualizamos el nombre en el HTML si es válido
    if (nombreCompleto !== "(desconocido)") {
        document.getElementById("personaje").textContent = nombreCompleto;
        const idElemento = nombreIngresado.toLowerCase();
        const elemento = document.getElementById(idElemento);

        if (elemento) {
            const elementos = document.querySelectorAll("#cajas > div");

            // Ocultar todos los personajes
            elementos.forEach(el => {
                el.style.opacity = "0"; // Invisibiliza
                el.style.visibility = "hidden"; // Oculta
                el.removeAttribute("title"); // Quita el título para reiniciar
            });

            // Mostrar el personaje seleccionado
            setTimeout(() => {
                elemento.title = "Presentado";
                elemento.style.opacity = "1"; // Mostrar con transición
                elemento.style.visibility = "visible"; // Hacer visible
            }, 500); // Ajuste de tiempo para reiniciar transición
        }
    } else {
        // Si el nombre es inválido, no se oculta el personaje actual, mantenemos el último mostrado
        alert("Nombre inválido. Intenta de nuevo con un nombre válido.");
    }
}

// El botón sigue funcionando siempre
document.getElementById("boton-presentar").addEventListener("click", presentarPersonaje);
