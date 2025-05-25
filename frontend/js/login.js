

/***************************/
/*   Peticion de usuario   */
/***************************/


document.getElementById('form-login').addEventListener('submit', async function (e) {
    e.preventDefault()

    const user = document.getElementById('user').value.trim()
    const pass = document.getElementById('password').value

    const res = await fetch('', {
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({user, pass})
    })

    const result = await res.json()

    if(res.ok) {
        alert(`Bienvenido ${result.user}!`)

        window.location.href = 'index.html'
    }else{
        alert(res.message || 'Usuario o contraseña incorrectos')
    }
});