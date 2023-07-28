



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
    document.querySelector(".contenedorEjerciciosJerarquia").style.display="flex";
}

function ocultarJerarquia(){
    document.getElementById("info__jerarquia").style.display="none";
    document.getElementById("toca__aqui").style.display="flex";
    document.getElementById("btn__jerarquia").style.display="flex";
    document.getElementById("btn__ocultarJerarquia").style.display="none";
    document.querySelector(".contenedorEjerciciosJerarquia").style.display="none";
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




function generarJe(){
    let num1 = document.getElementById("numA");
    let operacion1 = document.getElementById("operando1");
    let num2 = document.getElementById("numB");
    let operacion2 = document.getElementById("operando2");
    let num3 = document.getElementById("numC");
    let operacion3 = document.getElementById("operando3");
    let num4 = document.getElementById("numD");
   
   let valor1 =  parseInt(Math.round(Math.random(1, 10)*9 +1));
   let op1 = parseInt(Math.round(Math.random(1, 10)*3 ));
     if (op1 == 0){
        operacion1.innerHTML="+";
     }else if(op1 == 1){
        operacion1.innerHTML="-";
     } else if(op1 == 2){
        operacion1.innerHTML="*"
     } else if (op1 == 3){
        operacion1.innerHTML="/"
     }
    
     num1.innerHTML=valor1;

   let valor2 =  parseInt(Math.round(Math.random(1, 10)*9 +1));
   let op2 = parseInt(Math.round(Math.random(1, 10)*3 ));
     if (op2 == 0){
        operacion2.innerHTML="+";
     }else if(op2 == 1){
        operacion2.innerHTML="-";
     } else if(op2 == 2){
        operacion2.innerHTML="*"
     } else if (op2 == 3){
        operacion2.innerHTML="/"
     }
     num2.innerHTML=valor2;

   let valor3 =  parseInt(Math.round(Math.random(1, 10)*9 +1));
   let op3 = parseInt( Math.round(Math.random(1, 10)*3 ));
     if (op3 == 0){
        operacion3.innerHTML="+";
     }else if(op3 == 1){
        operacion3.innerHTML="-";
     } else if(op3 == 2){
        operacion3.innerHTML="*"
     } else if (op3 == 3){
        operacion3.innerHTML="/"
     }

     num3.innerHTML=valor3;
     
     let valor4 =  parseInt(Math.round(Math.random(1, 10)*9 +1));
     
       num4.innerHTML=valor4;
   

/* aaaaa */


    let num12 = document.getElementById("numA2");
    let operacion12 = document.getElementById("operando12");
    let num22 = document.getElementById("numB2");
    let operacion22 = document.getElementById("operando22");
    let num32 = document.getElementById("numC2");
    let operacion32 = document.getElementById("operando32");
    let num42 = document.getElementById("numD2");
   
   let valor12 =  parseInt(Math.round(Math.random(1, 10)*9 +1));
   let op12 = parseInt(Math.round(Math.random(1, 10)*3 ));
     if (op12 == 0){
        operacion12.innerHTML="+";
     }else if(op12 == 1){
        operacion12.innerHTML="-";
     } else if(op12 == 2){
        operacion12.innerHTML="*"
     } else if (op12 == 3){
        operacion12.innerHTML="/"
     }
    
     num1.innerHTML=valor12;

   let valor22 =  parseInt(Math.round(Math.random(1, 10)*9 +1));
   let op22 = parseInt(Math.round(Math.random(1, 10)*3 ));
     if (op22 == 0){
        operacion22.innerHTML="+";
     }else if(op22 == 1){
        operacion22.innerHTML="-";
     } else if(op22 == 2){
        operacion22.innerHTML="*"
     } else if (op22 == 3){
        operacion22.innerHTML="/"
     }
     num22.innerHTML=valor22;

   let valor32 =  parseInt(Math.round(Math.random(1, 10)*9 +1));
   let op32 = parseInt( Math.round(Math.random(1, 10)*3 ));
     if (op32 == 0){
        operacion32.innerHTML="+";
     }else if(op32 == 1){
        operacion32.innerHTML="-";
     } else if(op32 == 2){
        operacion32.innerHTML="*"
     } else if (op32 == 3){
        operacion32.innerHTML="/"
     }

     num32.innerHTML=valor32;
     
     let valor42 =  parseInt(Math.round(Math.random(1, 10)*9 +1));
     
       num42.innerHTML=valor42;
   

/* aaaaa */
/*ultimate*/
    let num13 = document.getElementById("numA3");
    let operacion13 = document.getElementById("operando13");
    let num23 = document.getElementById("numB3");
    let operacion23 = document.getElementById("operando23");
    let num33 = document.getElementById("numC3");
    let operacion33 = document.getElementById("operando33");
    let num43 = document.getElementById("numD3");
   
   let valor13 =  parseInt(Math.round(Math.random(1, 10)*9 +1));
   let op13 = parseInt(Math.round(Math.random(1, 10)*3 ));
     if (op13 == 0){
        operacion13.innerHTML="+";
     }else if(op13 == 1){
        operacion13.innerHTML="-";
     } else if(op12 == 2){
        operacion13.innerHTML="*"
     } else if (op13 == 3){
        operacion13.innerHTML="/"
     }
    
     num13.innerHTML=valor13;

   let valor23 =  parseInt(Math.round(Math.random(1, 10)*9 +1));
   let op23 = parseInt(Math.round(Math.random(1, 10)*3 ));
     if (op23 == 0){
        operacion23.innerHTML="+";
     }else if(op23 == 1){
        operacion23.innerHTML="-";
     } else if(op23 == 2){
        operacion23.innerHTML="*"
     } else if (op23 == 3){
        operacion23.innerHTML="/"
     }
     num23.innerHTML=valor23;

   let valor33 =  parseInt(Math.round(Math.random(1, 10)*9 +1));
   let op33 = parseInt( Math.round(Math.random(1, 10)*3 ));
     if (op33 == 0){
        operacion33.innerHTML="+";
     }else if(op33 == 1){
        operacion32.innerHTML="-";
     } else if(op33 == 2){
        operacion32.innerHTML="*"
     } else if (op33 == 3){
        operacion33.innerHTML="/"
     }

     num33.innerHTML=valor33;
     
     let valor43 =  parseInt(Math.round(Math.random(1, 10)*9 +1));
     
       num43.innerHTML=valor43;
   

/* aaaaa */
}



