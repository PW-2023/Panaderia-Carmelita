function loadData() {
    const url = 'https://mindicador.cl/api/uf';    //llamamos a la api
    fetch(url)   //llama a la función fetch del js para hacer la solicitud api y obtener respuesta
        .then(function (response) {    // Toma la respuesta y la convierte en un objeto JSON.
            return response.json();
        })
        .then(function (data) {  //aqui proceso la info y la muestro en la pagina
            const serie = data.serie;//objeto que tiene toda la info de la uf
            const ultimoValor = data.serie[0].valor;  //tomo el ultimo valor y lo redondeo a 2 decimales //para mostrar el valor de la uf en html
            const nombre = data.nombre;
            const fechaActual = new Date();
            const fecha = fechaActual.toLocaleDateString('es-CL');
            const tipoMoneda = data.unidad_medida;
            const datosUF = document.getElementById('datos-uf2');
            datosUF.innerHTML =

                `<p>VALOR UF HOY</p>
                <p> ${nombre}</p>
                <p>Valor UF: ${ultimoValor}</p>
                <p>Tipo Moneda: ${tipoMoneda}</p>
                <p> Fecha: ${fecha} </p>`;  //voy actualizando el valor de la uf con el ultimo valor

            // for (let i = 0; i < serie.length; i++) {
            //   const objeto = serie[i];
            //   const fecha = new Date(objeto.fecha).toLocaleDateString();
            //   const valor = objeto.valor.toFixed(2);
            //   console.log(`Fecha: ${ fecha }, Valor: ${ valor } `);
            // }

        })
        .catch(function (error) {
            console.log(error);
        });
}


loadData();// se llama a la funcion loaddata para iniciar el proceso y mostrar informacion de la uf

  // "codigo": "uf", "nombre": "Unidad de fomento (UF)",
  //   "unidad_medida": "Pesos"
  // "fecha": "2023-05-14T04:00:00.000Z", "valor": 35973.75