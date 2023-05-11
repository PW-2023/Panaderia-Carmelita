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






