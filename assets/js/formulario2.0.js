// Animación de las etiquetas de los campos del formulario
$(document).ready(function () {
    $("input, textarea").each(function () {
        $(this).on("focus", function () {
            $(this).prev().addClass("active");
        });
        $(this).on("blur", function () {
            if ($(this).val().length === 0) {
                $(this).prev().removeClass("active");
            }
        });
        if ($(this).val() !== "") {
            $(this).prev().addClass("active");
        }
    });
});

// Validación del formulario
(function () {
    "use strict";
    window.addEventListener(
        "load",
        function () {
            var form = document.getElementById("formulariocontac");
            form.addEventListener(
                "submit",
                function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add("was-validated");
                },
                false
            );
        },
        false
    );
})();

// Envío del formulario
$("#formulariocontac").submit(function (event) {
    event.preventDefault();
    var nombre = $("#nombrecontac").val();
    var email = $("#emailcontac").val();
    var telefono = $("#telefonocontac").val();
    var mensaje = $("#mensajecontac").val();

    // Validación adicional
    if (nombre === "" || email === "" || telefono === 0) {
        Swal.fire({
            icon: "error",
            title: "Campos obligatorios",
            text: "Por favor, complete todos los campos obligatorios",
        });
        return false;
    } else {
        Swal.fire({
            icon: "success",
            title: "Confirmación",
            text: "Formulario enviado correctamente",
        });

        // Aquí puedes agregar el código para enviar el formulario por AJAX
        // ...

        // Alerta de éxito


        // Limpiar formulario
        $("#formulariocontac")[0].reset();
        $("input, textarea").prev().removeClass("active");
        $("#formulariocontac").removeClass("was-validated");
    }
});