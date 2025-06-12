export async function render() {

    // Peticion del html para la vista seleccionada
    return fetch("src/pages/configuracion/config.html")
        .then(res => res.text())
        .catch(err =>
            console.error('No se encuentra la vista "Configuración"', err)
        )


}


export async function after_render() {


}