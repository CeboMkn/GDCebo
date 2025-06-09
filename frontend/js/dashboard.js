import { init_router } from "../src/router/router.js";

/*                         Sidebar                        */

function siderar_des() {

    /*             Constantes del sidebar                  */

    const menuBtnEntero = document.getElementById("menu-button-wrapper");
    const menuBtn = document.getElementById("menu-button");
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");

    // Mostrar/ocultar al hacer clic en el botón

    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("activo");

        // Efecto blur al abrir el sidebar (si se quiere activar descomentar blur mas abajo y el css blur)
        /* content.classList.toggle("blur-activo"); */

    });

    // Cerrar al hacer clic fuera del sidebar, menuBtn y menuBtnEntero

    document.addEventListener("click", (e) => {
        const clickFuera =
            !sidebar.contains(e.target) &&
            !menuBtn.contains(e.target) &&
            !menuBtnEntero.contains(e.target);

        const sidebarVisible = sidebar.classList.contains("activo");

        if (clickFuera && sidebarVisible) {
            sidebar.classList.remove("activo");
            /* content.classList.remove("blur-activo"); */
        }
    });
}


/*                   Navegación/Rutas                   */


// Funciones que se llaman cuando el DOM esta cargado

document.addEventListener("DOMContentLoaded", () => {

    // ruta inicial
    init_router();
    // funciones del sidebar
    siderar_des();
});
