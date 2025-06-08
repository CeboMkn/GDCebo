// Funcion que carga las vistas

export async function render_route(ruta) {
    const inser = document.getElementById("inser");
    try {
        // Página de cargando
        inser.innerHTML = "<p>Cargando…</p>";
        // Constante con el id del boton a la ruta y la ruta (encodeURIComponent es para la letra "ñ")
        const { render, after_render } = await import(`../pages/${ruta}.js`);
        // Inserta el html principal de la vista a cargar
        inser.innerHTML = await render();
        // Ejecuta la funcion que tiene las funciones de la vista que queremos cargar
        await after_render();
    } catch (err) {
        // Si algo sale mal
        console.error(`Error al cargar la vista "${ruta}"`, err);
    }
}