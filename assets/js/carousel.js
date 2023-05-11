function loadCustomCarousel() {
    var customCarousel = `
    
  <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
      aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
      aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
      aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../img/panaderia1.png" class="d-block w-100px" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Nuestro Local</h5>
        <p>Ven a visitarnos a nuestra sucursal</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../img/panaderia2.jpg" class="d-block w-100px" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Nuestros panes</h5>
        <p>Distintos tipos de panes con masa madre</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../img/panaderia3.jpg" class="d-block w-100px" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Distintos tipos de pasteles</h5>
        <p>Conoce nuestra variedad en reposteria </p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>`;

    var customCarrouselHTML = document.getElementById("custom-carousel");
    customCarrouselHTML.innerHTML = customCarousel;
}
loadCustomCarousel();
