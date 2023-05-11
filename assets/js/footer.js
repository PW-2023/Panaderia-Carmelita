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
  