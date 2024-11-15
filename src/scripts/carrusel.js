let currentIndex = {
    carrusel1: 0,
    carrusel2: 0,
    carrusel3: 0
  };
  
  // Mostrar la imagen actual en el carrusel especificado
  function showImage(carruselId) {
      const carrusel = document.getElementById(carruselId);
      const images = carrusel.querySelectorAll('.carrusel-images img');
      
      // Ocultar todas las imágenes
      images.forEach((img) => {
          img.style.display = 'none';
      });
  
      // Mostrar la imagen actual
      images[currentIndex[carruselId]].style.display = 'block';
  }
  
  // Función para ir a la imagen anterior
  function prevImage(carruselId) {
    console.log("carrusel",carruselId)
      const carrusel = document.getElementById(carruselId);
      const images = carrusel.querySelectorAll('.carrusel-images img');
      
      // Ajustar el índice para ir a la imagen anterior, con loop
      currentIndex[carruselId] = (currentIndex[carruselId] - 1 + images.length) % images.length; 
      showImage(carruselId);
  }
  
  // Función para ir a la imagen siguiente
  function nextImage(carruselId) {
      const carrusel = document.getElementById(carruselId);
      const images = carrusel.querySelectorAll('.carrusel-images img');
      console.log('Script cargado correctamente');
      // Ajustar el índice para ir a la imagen siguiente, con loop
      currentIndex[carruselId] = (currentIndex[carruselId] + 1) % images.length;
      showImage(carruselId);
  }
window.showImage = showImage;
window.prevImage = prevImage;
window.nextImage = nextImage;

  // Mostrar la primera imagen al cargar la página para cada carrusel
  window.onload = function() {
      showImage('carrusel1');
      showImage('carrusel2');
      showImage('carrusel3');
  };
  