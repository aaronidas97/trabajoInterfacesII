
import {fetchDataFromUrl} from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {

    const url = "https://dog.ceo/api/breeds/list/all";
    let container = document.getElementById("listaRazas");

    fetchDataFromUrl(url)
        .then(data => {
            data.forEach(raza => {
                let col = document.createElement("div");
                col.className = "col";

                let card = document.createElement("div");
                card.className = "card shadow-sm";

                let card_body = document.createElement("div");
                card_body.className = "card-body";

                let p_text = document.createElement("p");
                p_text.className = "card-text";
                p_text.innerText = raza;

                card_body.addEventListener("click", () =>{

                    window.location.href = `perro.html?raza=${raza}`;
                    
                });

                card_body.appendChild(p_text);
                card.appendChild(card_body);
                col.appendChild(card);

                container.appendChild(col);
            });
        })
        .catch(error => console.error('Error:', error));
});
