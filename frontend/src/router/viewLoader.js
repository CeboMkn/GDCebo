
// Funcion que carga las vistas

export async function render_route(ruta) {

    // div donde se insertan las vistas

    const inser = document.getElementById("inser");

    try {

        // Mensaje de cargando (hay que mejorarlo)
        inser.innerHTML = "<p>Cargando…</p>";

        // Constante con el id del boton a la ruta y la ruta)
        const { render, after_render } = await import(`../pages/${ruta}.js`);

        // Inserta el html de la vista a cargar
        inser.innerHTML = await render();

        // Ejecuta la funcion que tiene las funciones adicionales de cada vista
        await after_render();

    } catch (err) {

        // Si algo sale mal
        console.error(`Error al cargar la vista "${ruta}"`, err);
    }
}