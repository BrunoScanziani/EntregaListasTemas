document.addEventListener("DOMContentLoaded", function () {

    const API = "https://picsum.photos/300/300";
    
    var btn = document.getElementById("btn");
    var lista = document.getElementById("lista"); 

   

    btn.addEventListener("click", (e) => {
        e.preventDefault;

        var busqueda = document.getElementById("busqueda").value;
        var li = document.createElement("li");
        var img = document.createElement("img");
        var btn1 = document.createElement("button");
        var btn2 = document.createElement("button");
        var parrafo = document.createElement("p");


        fetch(API) 
        .then((result) => {
            result.json;
            img.src = result.url;
            img.alt = "Imagen tema";
            })   
            .catch((err) => {
            console.log(err);
            });
        
            parrafo.innerHTML = busqueda;

            btn1.innerHTML = "Eliminar";
            btn1.addEventListener("click", e => {
                li.remove();
            })

            btn2.innerHTML = "Completar";
            btn2.addEventListener("click", e => {
                li.classList.toggle("completado");
            })

            li.appendChild(img);
            li.appendChild(parrafo);
            li.appendChild(btn1);
            li.appendChild(btn2);

            lista.appendChild(li);

            busqueda = " ";


    })

})


