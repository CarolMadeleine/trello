window.addEventListener("load", function(){
  var contenedorTrello = document.getElementById("contenedorTrello");
  var formTrello = document.getElementById("formTrello");
  var añadirForm = document.getElementById("añadirForm");
  var inputLista = document.getElementById("inputLista").autofocus;
  var botonCerrar = document.getElementById("botonCerrar");
  var lista = document.getElementById("lista");3

  lista.addEventListener("click", function(){
    lista.classList.add("hidden");
    añadirForm.classList.remove("hidden");
  });

  botonCerrar.addEventListener("click", function(e){
    e.preventDefault();
    boxForm();
    añadirForm.classList.add("hidden");
    lista.classList.remove("hidden");
  });
});
  
  function boxForm(){
    var contenedor = document.createElement("div")
    contenedor.classList.add("contenedor");
    contenedorTrello.insertBefore(contenedor, contenedorTrello.childNodes[0]);

    var mensajeTrello = document.createElement("div")
    mensajeTrello.classList.add("mensajeTrello");
    mensajeTrello.innerText = inputLista.value;
    inputLista.value = "";
    contenedor.appendChild(mensajeTrello);

    var añadirCard= document.createElement("a");
    añadirCard.setAttribute("id", "añadirCard");
    añadirCard.classList.add("añadirCard");
    añadirCard.innerText = "Añadir una Tarjeta...";
    contenedor.appendChild(añadirCard);

    // var newContenedor = document.createElement("div");
    // newContenedor.classList.add("block", "newContenedor");
    // contenedorTrello.appendChild(newContenedor);
    // newContenedor.appendChild(lista);
    
      añadirCard.addEventListener("click", function(e){
        e.preventDefault();
        añadirCard.classList.add("hidden");
        añadirTarjeta();
      });

    function añadirTarjeta(){
    contenedorTarjeta = document.createElement("div");
    contenedorTarjeta.classList.add("contenedorTarjeta");
    contenedor.appendChild(contenedorTarjeta);

    var iconoLista= document.createElement("span");
    iconoLista.classList.add("icon-cross");
    contenedorTarjeta.insertBefore(iconoLista, contenedorTarjeta.childNodes[2]);

    var botonCerrar = document.createElement("button");
    botonCerrar.classList.add("botonCerrar");
    contenedorTarjeta.insertBefore(botonCerrar, contenedorTarjeta.childNodes[1]);
    var textoBoton = document.createTextNode("Añadir");
    botonCerrar.appendChild(textoBoton);

    var textArea= document.createElement("textarea");
    textArea.classList.add("textArea");
    contenedorTarjeta.insertBefore(textArea, contenedorTarjeta.childNodes[0]);

    //   botonCerrar.addEventListener("click", function(e){
    //     e.preventDefault();
    //     var tarjetaAñadida = document.createElement("div");
    //     tarjetaAñadida.classList.add("tarjetaAñadida");
    //     contenedor.insertBefore(tarjetaAñadida,contenedor.childNodes[1]);

    //     var post = document.createElement("div");
    //     post.classList.add("post");
    //     post.innerText = textArea.value;
    //     tarjetaAñadida.appendChild(post);

    //     contenedorTarjeta.classList.add("hidden");
    //     añadirCard.classList.remove("hidden");
    //   });
    }
  }


