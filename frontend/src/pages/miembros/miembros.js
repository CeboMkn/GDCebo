export async function render() {
    try {
        const res = await fetch("src/pages/miembros/miembros.html");   // ← misma carpeta
        return await res.text();
    } catch (err) {
        console.error('No se encuentra la vista "miembros"', err);
    }
}



export async function after_render() {


}