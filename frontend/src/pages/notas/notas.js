export async function render() {

    // Peticion del html para la vista seleccionada
    try {
        const res = await fetch("src/pages/notas/notas.html");
        return await res.text();
    } catch (err) {
        console.error('No se encuentra la vista "Notas"', err);
    }


}


export async function after_render() {


}