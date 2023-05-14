function loadCustomNavbar() {
  var customNavBar = `

<nav class="navbar navbar-expand-lg navbar-light navbar-custom">
<div class="container-fluid">
  <p class="text-center font-weight-bold"><img style="width: 100px; margin-top: 15px;"
      src="../img/logopanaderia.png" alt=""></p>
  <a class="navbar-brand" href="#" id="nombre"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link " aria-current="page" href="../html/index.html">Inicio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../html/productos.html">Productos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../html/productos.html#menupanes">Panes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../html/productos.html#menudulces">Tentaciones Dulces</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../html/productos.html#menuempanadas">Empanadas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " aria-current="page" href="../html/formulario2.html">Haz tu pedido</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../html/quienessomos.html">Quienes Somos</a>
      </li>
    </ul>
    <div id="carrito">
      <a href="#" class="card-link1"><i class="bi bi-cart3"></i></a>
    </div>
  </div>
</div>
</nav>`;
  var customNabBarHTML = document.getElementById("custom-navbar");
  customNabBarHTML.innerHTML = customNavBar;
}
loadCustomNavbar();

function loadCustomFooter() {
  var customFooter = `
<footer class="bg-dark text-light py-5">
<div class="container">
  <div class="row">
    <div class="col-lg-4 col-md-6 mb-4 mb-md-0 ">
      <h5 class="text-light mb-4">CONTACTO</h5>
      <ul class="list-unstyled mb-0">
        <li class="mb-2"><i class="bi bi-geo-alt-fill me-2"></i>Calle la Merced 589, Putaendo</li>
        <li class="mb-2"><i class="bi bi-envelope-fill me-2"></i>panaderiacarmelita@gmail.com</li>
        <li><i class="bi bi-telephone-fill me-2"></i>999999999</li>
      </ul>
    </div>

    <div class="col-lg-4 col-md-6 mb-4 mb-md-0 ">
      <h5 class="text-light mb-4">HORARIO DE ATENCIÓN</h5>
      <ul class="list-unstyled mb-0">
        <li class="mb-2"><i class="bi bi-clock me-2"></i><span class="text-light">Lunes a viernes:</span> 07:00 -
          22:00</li>
        <li class="mb-2"><i class="bi bi-clock me-2"></i><span class="text-light">Sábados:</span> 08:00 - 21:00</li>
        <li><i class="bi bi-clock me-2"></i><span class="text-light">Domingos:</span> 07:00 - 17:00</li>
      </ul>
    </div>
    <div class="col-lg-4 col-md-6 ">
      <h5 class="text text-light mb-4">SÍGUENOS EN REDES SOCIALES</h5>
      <ul class="list-unstyled mb-0">
        <li class="mb-2"><a href="#" class="text-light me-3"><i class="bi bi-twitter"></i></a><span
            class="text-light">@panaderiacarmelita</span></li>
        <li class="mb-2"><a href="#" class="text-light me-3"><i class="bi bi-facebook"></i></a><span
            class="text-light">/panaderiacarmelita</span></li>
        <li><a href="#" class="text-light me-3"><i class="bi bi-instagram"></i></a><span
            class="text-light">@panaderiacarmelita</span></li>

      </ul>
    </div>
  </div>
</div>
<div class="container text-center">
  <hr class="bg-light my-5">
  <p class="mb-0 text-light">&copy; 2023 Panaderia Carmelita. Todos los derechos reservados.</p>
  <p class="mb-0 text-light">Información Legal</p>
  <p class="mb-0 text-light">Términos y Condiciones de Uso</p>
  <p class="mb-0 text-light">Política de Privacidad</p>
</div>
</footer>`;

  var customFoterHTML = document.getElementById("custom-footer");
  customFoterHTML.innerHTML = customFooter;
}
loadCustomFooter();






