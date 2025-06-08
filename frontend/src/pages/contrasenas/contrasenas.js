export async function render() {
    try {
        const res = await fetch("src/pages/contrasenas/contrasenas.html");
        return await res.text();
    } catch {
        console.error(`No se encuentra la vista "Contraseñas"`);
    }


}


export function after_render() {
    // Referencias
    const modalOverlay = document.getElementById("modal");
    const openBtn = document.getElementById("open_mod_contr");
    const closeBtn = document.getElementById("close_mod");

    // Funciones
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
