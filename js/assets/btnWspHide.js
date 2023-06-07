var prevScrollpos = window.pageYOffset;
var whatsappButton = document.getElementById('whatsapp-button');
    
window.addEventListener('scroll', function() {
  let posAct = window.pageYOffset;
  
  if (prevScrollpos > posAct) {
    whatsappButton.classList.remove('hide-button');
  } else {
    whatsappButton.classList.add('hide-button');
  }
  
  prevScrollpos = posAct;

});

