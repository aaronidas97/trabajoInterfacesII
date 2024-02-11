
import {fethListaRazas, getPerroRandom, capitalizarString} from "./utils.js";

document.addEventListener("DOMContentLoaded",  () => {

    const url = "https://dog.ceo/api/breeds/list/all";
    let container = document.getElementById("listaRazas");
 
    fethListaRazas(url)
        .then(data => {
            data.forEach( async (raza) => {   

                
                const img_url = await getPerroRandom(raza);
                let col = document.createElement("div");
                col.className = "col";

                let card = document.createElement("div");
                card.className = "card shadow-sm";

                let card_body = document.createElement("div");
                card_body.className = "card-body";

                let card_img = document.createElement("img");
                
                card_img.src = img_url;

                let p_text = document.createElement("p");
                p_text.className = "card-text";
                p_text.innerText = capitalizarString(raza);

                card_body.addEventListener("click", () =>{

                    window.location.href = `perro.html?raza=${raza}`;
                    
                });

                card_body.appendChild(p_text);
                card_body.appendChild(card_img);
                card.appendChild(card_body);
                col.appendChild(card);

                container.appendChild(col);
            });
        })
        .catch(error => console.error('Error:', error));
});
