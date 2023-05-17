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
            var form = document.getElementById("formulario");
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
$("#formulario").submit(function (event) {
    event.preventDefault();
    var nombre = $("#nombre").val();
    var email = $("#email").val();
    var telefono = $("#telefono").val();
    var mensaje = $("#mensaje").val();

    // Validación adicional
    if (nombre === "" || email === "" || telefono === "") {
        Swal.fire({
            icon: "error",
            title: "Campos obligatorios",
            text: "Por favor, complete todos los campos obligatorios",
        });
        return false;
    }

    // Aquí puedes agregar el código para enviar el formulario por AJAX
    // ...

    // Alerta de éxito
    Swal.fire({
        icon: "success",
        title: "¡Enviado!",
        text: "Gracias por contactarnos",
        showConfirmButton: false,
        timer: 3000,
    });

    // Limpiar formulario
    $("#formulario")[0].reset();
    $("input, textarea").prev().removeClass("active");
    $("#formulario").removeClass("was-validated");
});