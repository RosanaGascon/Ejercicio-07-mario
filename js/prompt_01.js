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
    if (nombreCompleto !== "(desconocido)") {
        document.getElementById("personaje").textContent = nombreCompleto;
        const idElemento = nombreIngresado.toLowerCase();
        const elemento = document.getElementById(idElemento);
        if (elemento) {
            const elementos = document.querySelectorAll("#cajas > div");
            elementos.forEach(el => {
                el.style.opacity = "1";
                el.style.visibility = "visible";
                el.removeAttribute("title");
            });
            elemento.title = "Presentado";
        }
    } else {
        alert("Nombre inválido. Intenta de nuevo con un nombre válido.");
    }
}

document.getElementById("boton-presentar").addEventListener("click", presentarPersonaje);
