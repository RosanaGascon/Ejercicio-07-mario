function alternarVisibilidad(event) {
    const elemento = event.currentTarget;
    const elementos = document.querySelectorAll("#cajas > div");
    const nombresCompletos = {
        "mario": "Mario",
        "luigi": "Luigi",
        "bowser": "Bowser Morton Koopa",
        "peach": "Princesa Peach Toadstool",
        "yoshi": "T. Yoshisaur Munchakoopas",
        "toad": "Toad",
        "toadette": "Toadette",
        "daisy": "Princesa Daisy"
    };

    if (elemento.getAttribute('title') === "Presentado") {
        elemento.removeAttribute("title");
        document.getElementById("personaje").textContent = "";
    } else {
        elementos.forEach(el => {
            el.removeAttribute("title");
        });
        elemento.setAttribute('title', "Presentado");
        const idElemento = elemento.id;
        document.getElementById("personaje").textContent = nombresCompletos[idElemento] || "(desconocido)";
    }
}

const recuadros = document.querySelectorAll("#cajas > div");
recuadros.forEach(recuadro => recuadro.addEventListener("click", alternarVisibilidad));
