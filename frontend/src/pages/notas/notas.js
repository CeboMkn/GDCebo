export async function render() {
    try {
        const res = await fetch("src/pages/notas/notas.html");
        return await res.text();
    }catch{
        console.error(`No se encuentra la vista "Notas"`);
    }
    

}


export async function after_render() {

    
}