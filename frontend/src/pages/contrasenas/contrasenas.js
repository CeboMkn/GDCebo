export async function render() {

    // Peticion del html para la vista seleccionada
    try {
        const res = await fetch("src/pages/contrasenas/contrasenas.html");
        return await res.text();
    } catch (err) {
        console.error('No se encuentra la vista "Contraseñas"', err);
    }
}

export function after_render() {

    // Captura del modal
    const modalOverlay = document.getElementById("modal");

    // Captura botón que muestra el modal
    const openBtn = document.getElementById("open_mod_contr");

    // Captura del botón que cierra el modal
    const closeBtn = document.getElementById("close_mod");

    // Funciones que muestran y ocultan el modal
    const openModal = () => modalOverlay.classList.remove("hidden");
    const closeModal = () => modalOverlay.classList.add("hidden");

    // Abrir modal
    openBtn?.addEventListener("click", openModal);

    // Cerrar con la X
    closeBtn?.addEventListener("click", closeModal);

    // Cerrar clicando fuera del contenido
    modalOverlay?.addEventListener("click", e => {
        if (e.target === modalOverlay) closeModal();
    });
}
