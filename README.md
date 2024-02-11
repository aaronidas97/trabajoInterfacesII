


# Uso de la API Dog CEO

![imagenFondo](\img\imagenFondo.jpg)
En este documento, exploraremos cómo utilizar la API Dog CEO (<https://dog.ceo/api>) para obtener información sobre razas de perros.

## Introducción

La API Dog CEO proporciona acceso a una amplia variedad de información sobre perros, incluyendo imágenes de diferentes razas, subrazas, y más.

## Realización de Peticiones

Podemos realizar peticiones a la API utilizando JavaScript, ya sea con `fetch` o `async await`.

### Utilizando `fetch`

```javascript
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
```

### Utilizando `async`

```javascript
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
```

## Casos de Error

Al utilizar la API Dog CEO, es importante considerar los posibles casos de error que pueden surgir:

1. **Error en la URL**: Si escribimos incorrectamente el nombre de alguna raza en la URL de la petición, recibiremos un error 404 o un mensaje indicando que la ruta no fue encontrada.

![Error1](.\img\error1.png)
![Error1(2)](.\img\ejError1.png)

La imagen del perro aparece gracias a este pedazo de código:

```javascript
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
```

Además este error aparecerá también en consola:
![ErroConsola](\img\errorConsola.png)
Esto se debe concretamente a esta parte del código:

```javascript
   if (!response.ok) {
            if (response.status === 404) {
                alert("El perro no existe.");
                throw new Error('La raza de perro no fue encontrada.');
            } else {
                throw new Error('Ocurrió un error al obtener la imagen.');
            }
        }
```

2. **Error de la API**: En caso de que la API Dog CEO deje de recibir peticiones GET, ya sea por problemas técnicos o de mantenimiento.
