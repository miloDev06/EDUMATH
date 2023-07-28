



function cambiarInfoAMath (){
    let info = document.querySelectorAll(".content__pizarra");
    info.style.display="none";
    document.getElementsByClassName("content__pizarraMath").style.display="flex"

}
function cambiarInfoApr (){
    let info = document.querySelectorAll(".content__pizarra");
    info.style.display="flex";
    document.getElementsByClassName("content__pizarraMath").style.display="none"

}

function mostrarBtnE(){
    document.getElementById("btn__e").style.display="flex";
    document.getElementById("btn__m").style.display="none";
}

function mostrarBtnM(){
    document.getElementById("btn__e").style.display="none";
    document.getElementById("btn__m").style.display="flex";
}




function verInfo () {
    document.getElementById("edumath").style.display= "none" ;
    document.getElementById("info").style.display= "block";
    document.getElementById("ocultar_info").style.display= "flex";
    document.getElementById("ver_info").style.display= "none";
    
}

function ocultarInfo (){
    document.getElementById("edumath").style.display= "block";
    document.getElementById("info").style.display= "none";
    document.getElementById("ocultar_info").style.display= "none";
    document.getElementById("ver_info").style.display= "flex";
}


function mostrarJerarquia(){
    document.getElementById("info__jerarquia").style.display="flex";
    document.getElementById("toca__aqui").style.display="none";
    document.getElementById("btn__jerarquia").style.display="none";
    document.getElementById("btn__ocultarJerarquia").style.display="flex";
    document.getElementById("ejercicios__jerarquia").style.display="flex";
}

function ocultarJerarquia(){
    document.getElementById("info__jerarquia").style.display="none";
    document.getElementById("toca__aqui").style.display="flex";
    document.getElementById("btn__jerarquia").style.display="flex";
    document.getElementById("btn__ocultarJerarquia").style.display="none";
    document.getElementById("ejercicios__jerarquia").style.display="none";
}
    


function verEjerciciosDificiles() {
    document.getElementById("ejerciciosDificiles").style.display="flex"
    document.getElementById("ejerciciosFaciles").style.display="none"
    document.getElementById("dificilesJerarquia").style.display="flex"
    document.getElementById("facilesJerarquia").style.display="none"
    
    
    
}



function verEjerciciosFaciles() {
    document.getElementById("ejerciciosDificiles").style.display="none"
    document.getElementById("ejerciciosFaciles").style.display="flex"
    document.getElementById("dificilesJerarquia").style.display="none"
    document.getElementById("facilesJerarquia").style.display="flex"
    
}


function mostrarInfoFracciones() {
    document.getElementById("btn__fraccion1").style.display="none";
    
    document.getElementById("infoFraccionales").style.display="flex";
    document.getElementById("btn__ocultarFraccion").style.display="flex";
    document.getElementById("btn_mostrarFraccion").style.display="none";
    document.querySelector(".contenedorEjerciciosFracciones").style.display="flex";
}

function ocultarInfoFracciones() {
    document.getElementById("btn__fraccion1").style.display="flex";
   
    document.getElementById("infoFraccionales").style.display="none";
    document.getElementById("btn__ocultarFraccion").style.display="none";
    document.getElementById("btn_mostrarFraccion").style.display="flex";
    document.querySelector(".contenedorEjerciciosFracciones").style.display="none";
}





function mostrarFraccionResponsive() {
    let tituloResponsive = document.getElementById("tittleResponsive");
    let infoResponsive = document.getElementById("parrafoResponsive");
    let ejercicioResponsive = document.getElementById("ejerciciosResponsive");
    let boton = document.getElementById("btnFraccionResponsive");

    tituloResponsive.style.transform="translateY(-50%)";
    infoResponsive.style.display="flex";
    ejercicioResponsive.style.display="flex";
    boton.style.display="flex";
}
function ocultarFraccionResponsive() {
    let tituloResponsive = document.getElementById("tittleResponsive");
    let infoResponsive = document.getElementById("parrafoResponsive");
    let ejercicioResponsive = document.getElementById("ejerciciosResponsive");
    let boton = document.getElementById("btnFraccionResponsive");

    tituloResponsive.style.transform="translateY(0%)";
    infoResponsive.style.display="none";
    ejercicioResponsive.style.display="none";
    boton.style.display="none";
}


function generarEc (){
    let denominador = parseInt(Math.round(Math.random(1, 10)*3 +2));
    let num1 = parseInt(Math.round(Math.random(1, 10)*15 +1));
    let num2 = parseInt(Math.round(Math.random(1, 10)*15 +1));
    let operando = parseInt(Math.round(Math.random(1, 10)*1 ));
    

    let x = document.getElementById("aa");
    let y = document.getElementById("bb");

    let den1 = document.querySelector(".denominador1");
    let den2 = document.querySelector(".denominador2");
    let operacion = document.getElementById("operacion");
       if (operando == 0){
        operacion.innerHTML="+"
       } else {
        operacion.innerHTML="-"
       }

       den1.innerHTML=denominador;
       den2.innerHTML=denominador;

       x.innerHTML=num1;
       y.innerHTML=num2;


    let denominador2 = parseInt(Math.round(Math.random(1, 10)*3 +2));
    let num3 = parseInt(Math.round(Math.random(1, 10)*15 +1));
    let num4 = parseInt(Math.round(Math.random(1, 10)*15 +1));
    let operando2 = parseInt(Math.round(Math.random(1, 10)*1 ));
    

    let x2 = document.getElementById("aa2");
    let y2 = document.getElementById("bb2");

    let den3 = document.querySelector(".denominador12");
    let den4 = document.querySelector(".denominador22");
    let operacion2 = document.getElementById("operacion2");
       if (operando2 == 0){
        operacion2.innerHTML="+"
       } else {
        operacion2.innerHTML="-"
       }

       den3.innerHTML=denominador2;
       den4.innerHTML=denominador2;

       x2.innerHTML=num3;
       y2.innerHTML=num4;


    let denominador3 = parseInt(Math.round(Math.random(1, 10)*3 +2));
    let num5 = parseInt(Math.round(Math.random(1, 10)*15 +1));
    let num6 = parseInt(Math.round(Math.random(1, 10)*15 +1));
    let operando3 = parseInt(Math.round(Math.random(1, 10)*1 ));
    

    let x3 = document.getElementById("aa3");
    let y3 = document.getElementById("bb3");

    let den5 = document.querySelector(".denominador13");
    let den6 = document.querySelector(".denominador23");
    let operacion3 = document.getElementById("operacion3");
       if (operando == 0){
        operacion3.innerHTML="+"
       } else {
        operacion3.innerHTML="-"
       }

       den5.innerHTML=denominador;
       den6.innerHTML=denominador;

       x3.innerHTML=num5;
       y3.innerHTML=num6;


   
}




