function dolarHoy() {
    const url = "https://mindicador.cl/api/dolar";
    const response = fetch(url, { method: 'GET' })
        .then((response) => {
            /*VALIDACION RESPUESTA RECURSO*/
            if (response.ok) {
                console.log("response.text:", response.text);
                return response.text();
            } else {
                console.log("response.status ", response.status);
                throw new Error(response.status);
            }
        })
        .then((data) => {
            /*LECTURA DE LA DATA JSON*/
            const fecha = document.getElementById("fecha").value;
            const fe = new Date(document.getElementById("fecha").value);
            fe.setMinutes(fe.getMinutes() + fe.getTimezoneOffset());

            var dia1 = fe.getDate();
            if (dia1 <= 9) {
                dia1 = "0" + fe.getDate();
            } else {
                dia1 = fe.getDate();
            }

            var mes1 = fe.getMonth() + 1;
            if (mes1 <= 9) {
                mes1 = "0" + `${fe.getMonth() + 1}`;
            } else {
                mes1 = fe.getMonth() + 1;
            }

            const año1 = fe.getFullYear();
            const fecha_2 = `${dia1}-${mes1}-${año1}`.toString();
            /*alert(fecha_2);*/
            console.log("Datos: ", data);
            const objJson = JSON.parse(data);
            var dolar = "";
            let fechaEncontrada = false;
            const ultimodia = objJson.serie[0].fecha.substring(0, 10);
            const primerdia = objJson.serie[30].fecha.substring(0, 10);
            console.log(primerdia);
            console.log(ultimodia);
            for (i = 0; i < objJson.serie.length; i++) {
                /*alert(objJson.serie.length);*/
                const año = objJson.serie[i].fecha.substring(0, 4).trim();
                const mes = objJson.serie[i].fecha.substring(5, 7).trim();
                const dia = objJson.serie[i].fecha.substring(8, 10).trim();
                const fecha_final = `${dia}-${mes}-${año}`;
                /*alert(fecha_final);*/
                if (fecha_2 == fecha_final) {
                    /*alert("pepe");*/
                    console.log("_________________");
                    console.log("Nombre: ", objJson.nombre);
                    console.log("Moneda: ", objJson.unidad_medida);
                    console.log("Fecha: ", fecha_final);
                    console.log("Valor: $", objJson.serie[i].valor);
                    dolar = `  <br>
                                <p>Nombre: ${objJson.nombre}</p>
                                <p>Moneda: ${objJson.unidad_medida}</p>
                                <p>Fecha: ${fecha_final}</p>
                                <p>Valor: $ ${objJson.serie[i].valor}</p>
                            `
                    fechaEncontrada = true;
                    break;
                }
            }
            if (!fechaEncontrada) {
                alert(`Ingrese una día habil entre el ${primerdia} y el ${ultimodia}`);
            }
            var dolarHTML = document.getElementById("datos-uf");
            dolarHTML.innerHTML = dolar;


        })
        .catch((err) => {
            /*CAPTURA DE ERRORES*/
            console.error("ERROR", err.message);
        });
}