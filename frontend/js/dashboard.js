import { renderContraseñas, renderMiembros, renderNotas } from "./peticiones_vistas.js";

function siderar_des() {

    /*                    Despliegue                      */

    const menuBtnEntero = document.getElementById("menu-button-wrapper");
    const menuBtn = document.getElementById("menu-button");
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");

    // Mostrar/ocultar al hacer clic en el botón
    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("activo");
        content.classList.toggle("blur-activo");
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
            content.classList.remove("blur-activo");
        }
    });
}

/*                      Navegación                     */

function render_vista() {

    const inser = document.getElementById("inser")

    const config_vistas = [
        { id: 'nav-miembros', render: renderMiembros },
        { id: 'nav-contraseñas', render: renderContraseñas },
        { id: 'nav-notas', render: renderNotas }
    ]

    config_vistas.forEach(vista => {
        const btn = document.getElementById(vista.id);
        if (btn) {
            btn.addEventListener("click", async () => {
                const html = await vista.render();
                inser.innerHTML = html;
            });
        }
    })

}

siderar_des()
render_vista()