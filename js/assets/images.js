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

modal.addEventListener("click", (event)=>{
  if(event.target !== modalImage){
    modal.style.display = "none";
  }
});
