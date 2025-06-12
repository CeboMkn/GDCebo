export async function render() {

    // Peticion del html para la vista seleccionada
    return fetch("src/pages/contrasenas/contrasenas.html")
        .then(res => res.text())  // convierte la respuesta en texto
        .catch(err =>
            console.error('No se encuentra la vista "Contraseñas"', err)
        );
}

export function after_render() {

    /* // Guardamos en `m` nuestro modal (overlay completo)
    const m = document.getElementById("modal");

    // Un único listener de click en todo el documento para gestionar abrir y cerrar
    document.addEventListener("click", e =>
        // 1) Si clicamos en el botón de abrir modal…
        e.target.matches("#open_mod_contr")
            //    → eliminamos la clase "hidden" para hacerlo visible
            ? m.classList.remove("hidden")
            // 2) Si no, comprobamos si clicamos en la “X” o en el overlay… 
            : (
                e.target.matches("#close_mod")  //    clic en la “X” de cierre
                || e.target === m               //    clic fuera del contenido (overlay)
            )
            //    → y si alguna de esas dos es true, añadimos "hidden" para ocultarlo
            && m.classList.add("hidden")
    ); */



}
