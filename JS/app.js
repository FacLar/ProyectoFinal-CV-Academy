//MENU LATERAL//
  function mostrarOcultarMenu(){
    if(document.getElementById("nav").style.display == "block"){
        document.getElementById("nav").style.display = "none";
    } else{
        document.getElementById("nav").style.display = "block"
    }
  }
  document.getElementsByClassName("nav-bar").addEventListener("click",mostrarOcultarMenu)

  //OCULTO MENU UNA VEZ QUE SELECIONO LINK// NO SUPE COMO RESOLVERLO, AYUDA!!!!!!!
//function ocultarUlAlClick(){
//   if(document.getElementsByTagName("nav ul li a").style.display == "block"){
//        document.getElementsByTagName("nav ul li a").style.display = "none";
//   }
//document.getElementsByTagName("nav ul li a").addEventListener("click",ocultarUlAlClick)// 

//tuve la intención de hacer un archivo pdf para mi cv descargable pero no entendí muy bien y tampoco tuve tiempo de emaparme bien
//en html2pdf (canvas) y jspdf