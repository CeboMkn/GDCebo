export async function render() {

    // Peticion del html para la vista seleccionada
    return fetch("src/pages/herramientas/herramientas.html")
        .then(res => res.text())
        .catch(err =>
            console.error('No se encuentra la vista "Herramientas"', err)
        )


}


export async function after_render() {


}
