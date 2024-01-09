let listaItems = document.querySelectorAll(".menu_list li");

for (let i = 0; i < listaItems.length; i++) {
  listaItems[i].addEventListener("click", function() {
    let seleccionado = this.getAttribute("data-categoria");
    let imagenes = document.querySelectorAll(".gallery img");
    
    if(seleccionado == "all"){
      for(let i=0; i<imagenes.length; i++){
        imagenes[i].style.display="block";
      }
    }else{
      for (let j = 0; j < imagenes.length; j++) {
        imagenes[j].style.display = "none"; // Ocultar todas las imágenes
      }
      
      let imagenesMostrar = document.querySelectorAll("." + seleccionado);
      
      for (let k = 0; k < imagenesMostrar.length; k++) {
        imagenesMostrar[k].style.display = "block"; // Mostrar solo las imágenes seleccionadas
      }
    }
    
  });
}
