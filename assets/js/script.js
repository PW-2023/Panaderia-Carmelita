function loadData() {
  const url = "http://192.168.1.173:5501/assets/json/data.json";
  const response = fetch(url)
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
      const objJson = JSON.parse(data);
      const selectRegiones = document.getElementById("regiones");
      const selectComunas = document.getElementById("comunas");
      /*const selectRegiones = document.getElementById('regiones');
      const selectComunas = document.getElementById('comunas');*/
      for (i = 0; i < objJson.length; i++) {
        /*console.log("Región: ", objJson[i].region);
        console.log("Comunas: ", objJson[i].comunas);*/
        /*option.innerHTML = objJson[i].region;
        document.getElementById("regiones").appendChild(option);*/
      }
      // Agregar opciones para regiones
      for (let i = 0; i < objJson.length; i++) {
        const option = document.createElement("option");
        option.text = objJson[i].region;
        selectRegiones.add(option);
      }

      // Agregar opciones para comunas de la primera región
      const regionSeleccionada = selectRegiones.options[selectRegiones.selectedIndex].text;
      console.log(regionSeleccionada);
      for (let i = 0; i < objJson.length; i++) {
        if (objJson[i].region === regionSeleccionada) {
          for (let j = 0; j < objJson[i].comunas.length; j++) {
            const option = document.createElement("option");
            option.text = objJson[i].comunas[j];
            selectComunas.add(option);
          }
          break;
        }
      }
      selectRegiones.addEventListener("change", () => {
        selectComunas.innerHTML = ""; // Limpiar opciones anteriores
        const regionSeleccionada = selectRegiones.options[selectRegiones.selectedIndex].text;
        for (let i = 0; i < objJson.length; i++) {
          if (objJson[i].region === regionSeleccionada) {
            for (let j = 0; j < objJson[i].comunas.length; j++) {
              const option = document.createElement("option");
              option.text = objJson[i].comunas[j];
              selectComunas.add(option);
            }
            break;
          }
        }
      });
    })
    /*.then((data) => {
        const selectColores = document.getElementById('regiones');  
        const objJson = JSON.parse(data);
        data.regiones.forEach(regiones => {
            const option = document.createElement('option');
            option.text = regiones.NombreRegion;
            selectRegiones.add(option);
        });

    })*/
    .catch((err) => {
      /*CAPTURA DE ERRORES*/
      console.error("ERROR", err.message);
    });
}
loadData();