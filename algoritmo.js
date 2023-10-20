const API = "https://hp-api.onrender.com/api/characters";

async function infoApi() {

    const resultado = await fetch(API);
    const info = await resultado.json();


    let infoHarryPotter = "def nombre";

    info.forEach(async (harryPotter) => {
        console.log(harryPotter);
        /*    infoHarryPotter = await fetch(harryPotter.url);
           infoHarryPotter = await infoHarryPotter.json(); */

        document.querySelector("body").innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="${harryPotter.image}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="card-title">${harryPotter.name})</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
        `;

    });


}
infoApi();