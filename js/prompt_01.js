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
    document.getElementById("personaje").textContent = nombreCompleto;

    if (nombreCompleto !== "(desconocido)") {
        const idElemento = nombreIngresado.toLowerCase();
        const elemento = document.getElementById(idElemento);

        if (elemento) {
            const elementos = document.querySelectorAll("#cajas > div");
            
            // Ocultar todos los personajes con un pequeño retraso para aplicar transiciones
            elementos.forEach(el => {
                el.style.opacity = "0"; // Cambia a invisible
                el.style.visibility = "hidden"; // Cambia a hidden
                el.removeAttribute("title"); // Remover el título para reiniciar la animación
            });
            
            // Mostrar el personaje seleccionado después de un pequeño retraso
            setTimeout(() => {
                elemento.title = "Presentado";
                elemento.style.opacity = "1"; // Mostrar con transición
                elemento.style.visibility = "visible"; // Hacer visible
            }, 500); // Ajusta el tiempo para coincidir con la transición
        }
    }
}

document.getElementById("boton-presentar").addEventListener("click", presentarPersonaje);
