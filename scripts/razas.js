


export default function fetchDataFromUrl(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {

    
            let listaRazas = [];
            
            Object.keys(data.message).forEach(key => {
    
                listaRazas.push(key);
    
            })
            return listaRazas;
        })
       
}






