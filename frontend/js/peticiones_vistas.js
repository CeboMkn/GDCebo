export async function renderMiembros() {
    const res = await fetch("../pages/miembros/añadir_miembro.html");
    return await res.text();
}

export async function renderContraseñas() {
    const res = await fetch("../pages/contraseñas/contraseñas.html");
    return await res.text();
}

export async function renderNotas() {
    const res = await fetch("../pages/notas/notas.html");
    return await res.text();
}