async function getPerroRandom(nombreRaza) {
    const url = `https://dog.ceo/api/breed/${nombreRaza}/images/random`;
    try {
        const response = await fetch(url);

        // Verificar si la respuesta no es exitosa (código de estado no está en el rango 200-299)
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('La raza de perro no fue encontrada.');
            } else {
                throw new Error('Ocurrió un error al obtener la imagen.');
            }
        }

        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error('Error al obtener la imagen:', error);
        throw error;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const raza = new URLSearchParams(window.location.search).get('raza');
    let img = document.getElementById('imagen');

    if (raza) { 
        try {
           const imagen = await getPerroRandom(raza);
            img.src = imagen;
        } catch (error) {
            console.error('No se pudo obtener la imagen del perro:', error);
            img.src = 'https://c8.alamy.com/comp/F10MET/404-error-page-not-found-concept-and-a-broken-or-dead-link-symbol-F10MET.jpg';
        }
    } else {
        console.error('No se recibió el parámetro "raza"');
        img.src = 'https://c8.alamy.com/comp/F10MET/404-error-page-not-found-concept-and-a-broken-or-dead-link-symbol-F10MET.jpg';
    }
});
