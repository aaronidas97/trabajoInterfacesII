


export  function fethListaRazas(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {

    
            let listaRazas = [];
            //Hay que obtener solo las claves del json, ya que es donde se encuentra el nombre de las razas
            Object.keys(data.message).forEach(key => {
    
                listaRazas.push(key);
    
            })
            return listaRazas;
        })
       
}
export  async function getPerroRandom(nombreRaza) {
    const url = `https://dog.ceo/api/breed/${nombreRaza}/images/random`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 404) {
                alert("El perro no existe.");
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


export function capitalizarString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}





