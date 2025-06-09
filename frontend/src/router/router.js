import { render_route } from "../router/viewLoader.js";
import { rutas } from "../router/routes.js";

export function init_router() {
    // init se llama desde el archivo principal que es dashboard.js y asigna los listener a los demas botones tambien
    try {
        rutas.forEach(({ id, ruta }) => {
            const btn = document.getElementById(id);
            // Si el botón no existe, avisa y pasa al siguiente
            if (!btn) {
                console.error(`Botón con id "${id}" no encontrado en el DOM`);
                return;                         // sigue con el resto de rutas
            }
            // Listener que renderiza la vista correspondiente segun id y ruta alojados es routes.js
            btn.addEventListener("click", () => render_route(ruta));
        });
        // Vista por defecto
        render_route("miembros/miembros", "nav-miembros");
    } catch (err) {
        console.error("Error inicializando router:", err);
    }
}