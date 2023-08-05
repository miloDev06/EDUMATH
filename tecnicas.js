let regla1 = document.querySelector(".section1");
let regla2 = document.querySelector(".section2")
let main = document.querySelector(".container");

function verRegla1 (){
   
    regla1.style.display="flex";
    main.style.display="none";
}


function ocultarRegla1 (){
    
    regla1.style.display="none";
    main.style.display="flex";
}
function verRegla2 (){
   
    regla2.style.display="flex";
    main.style.display="none";
}


function ocultarRegla2 (){
    
    regla2.style.display="none";
    main.style.display="flex";
}

