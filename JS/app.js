//MENU LATERAL//
  function mostrarOcultarMenu(){
    if(document.getElementById("nav").style.display == "block"){
        document.getElementById("nav").style.display = "none";
    } else{
        document.getElementById("nav").style.display = "block"
    }
  }
  document.getElementsByClassName("nav-bar").addEventListener("click",mostrarOcultarMenu)

