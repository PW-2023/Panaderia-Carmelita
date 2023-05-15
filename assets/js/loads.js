function loadData() {
    const url = "https://pw-2023.github.io/Panaderia-Carmelita/assets/json/data1.json";
    /* INVOCACIÓN DATA JSON */
    const resp = fetch(url)
        .then((response) => {
            /* VALIDACIÓN RESPUESTA RECURSO */
            if (response.ok) {  
                console.log("response.text: ", response.text);
                return response.text();
            } else {
                console.log("response.status: ", response.status);
                throw new Error(response.status);
            }
        })
        .then((data1) => {
            const objJson = JSON.parse(data1);
            var cards = '';
            var count = 0;

            for (i = 0; i < objJson.length; i++) {
                if (count === 0) {
                    cards += '<div class="row">';
                }

                cards += `
                <div class="col-sm">
                  <div class="card my-3">
                    <img class="card-img-top" src="${objJson[i].imagen}" />
                    <div class="card-body">
                      <h5 class="card-title">${objJson[i].nombreproducto}</h5>
                      <p class="card-text">${objJson[i].descripcion}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">${objJson[i].valor}</li>
                    </ul>
                    <div class="card-body">
                      <a href="#" class="card-link1"><i class="${objJson[i].icono1}"></i></a>
                      <a href="#" class="card-link"><i class="${objJson[i].icono2}"></i></a>
                    </div>
                  </div>
                </div>
              `;

                count++;

                if (count === 4) {
                    cards += '</div>'; // TIRE UN CONTADOR PARA AGRUPAR EN FILAS DE 4 COLUMNAS
                    //Y AL DETECTAR 4 COLUMNAS VA A CERRAR EL DIV
                    count = 0; // RREINCIO EL CONTEO
                }
            }

            // VALIDO QUE NO HAYA UNA FILA ABIERTA
            if (count !== 0) {
                cards += '</div>'; //el +- cuando lo usamos en las variables se utiliza para ir actualizando, asi actualizo cuando la condicion se cumple 
            }

            var cardsHTML = document.getElementById("cards");
            cardsHTML.innerHTML = cards;
        })
        .catch((err) => {
            console.error("ERROR: ", err.message);
        });
}

loadData();