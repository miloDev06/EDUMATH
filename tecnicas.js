let regla1 = document.querySelector(".section1");
let main = document.querySelector(".container");

function verRegla1 (){
   
    regla1.style.display="flex";
    main.style.display="none";
}


function ocultarRegla1 (){
    
    regla1.style.display="none";
    main.style.display="flex";
}

alert("hola")