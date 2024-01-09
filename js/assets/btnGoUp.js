window.onscroll = function(){
  if(document.documentElement.scrollTop > 3000){
    document.querySelector(".go-top-container").classList.add("showBtnUp");
  }else{
    document.querySelector(".go-top-container").classList.remove("showBtnUp");
  }
} 

document.querySelector(".go-top-container").addEventListener("click",()=>{
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  });
});

