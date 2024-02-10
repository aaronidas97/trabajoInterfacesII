import {getPerroRandom, capitalizarString} from "./utils.js";


document.addEventListener('DOMContentLoaded', async () => {
    const raza = new URLSearchParams(window.location.search).get('raza');
    const urlActual = window.location.href;
    let img = document.getElementById('imagen');
    let titulo = document.getElementById('titulo');
    let refresh = document.getElementById('refresh');
    refresh.href = urlActual;
    if (raza) { 
        try {
           const imagen = await getPerroRandom(raza);
            img.src = imagen;
            titulo.innerText = capitalizarString(raza);
        } catch (error) {
            console.error('No se pudo obtener la imagen del perro:', error);
            img.src = 'https://c8.alamy.com/comp/F10MET/404-error-page-not-found-concept-and-a-broken-or-dead-link-symbol-F10MET.jpg';
        }
    } else {
        console.error('No se recibió el parámetro "raza"');
        img.src = 'https://c8.alamy.com/comp/F10MET/404-error-page-not-found-concept-and-a-broken-or-dead-link-symbol-F10MET.jpg';
    }
});
