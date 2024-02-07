function getPerroRandom(nombreRaza){


    const url = `https://dog.ceo/api/breed/${nombreRaza}/images/random`;
    
    
    return fetch(url)
    .then(response => response.json())
    .then(data => (data.message))
    
    
    }
    

    getPerroRandom("chihuahua").then(response => console.log(response));