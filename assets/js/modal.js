// Obtener el elemento HTML del modal
var modal = document.getElementById("miModal");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Función para abrir el modal cuando se envía el formulario
function openModal(event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario
    modal.style.display = "block";
}

// Cuando se hace clic en el elemento <span>, cerrar el modal
span.onclick = function () {
    modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier parte fuera del modal, cerrarlo
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
