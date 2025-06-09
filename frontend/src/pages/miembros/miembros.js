export async function render() {

    // Peticion del html para la vista seleccionada
    try {
        const res = await fetch("src/pages/miembros/miembros.html");  
        return await res.text();
    } catch (err) {
        console.error('No se encuentra la vista "miembros"', err);
    }
}



export async function after_render() {


}