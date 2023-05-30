// Opcional: Agrega funciones JavaScript para interactuar con la galería

// Ejemplo: abrir imagen en una ventana modal al hacer clic
const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

images.forEach(image => {
  image.addEventListener('click', () => {
    const imageUrl = image.src;
    modalImage.src = imageUrl;
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
