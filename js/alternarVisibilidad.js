function alternarVisibilidad(event) {
    const elemento = event.target;

    if (elemento.style.display === "block") {
        elemento.style.display = "none";
    } else {
        const elementos = document.querySelectorAll("#cajas > div");
        elementos.forEach(el => el.style.display = "none");

        elemento.style.display = "block";
    }
}

const recuadros = document.querySelectorAll("#cajas > div");
recuadros.forEach(recuadro => recuadro.addEventListener("click", alternarVisibilidad));
