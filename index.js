



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
    document.getElementById("ejerciciosFracciones").style.display="flex";
    document.getElementById("infoFraccionales").style.display="flex";
    document.getElementById("btn__ocultarFraccion").style.display="flex";
    document.getElementById("btn_mostrarFraccion").style.display="none";
}

function ocultarInfoFracciones() {
    document.getElementById("btn__fraccion1").style.display="flex";
    document.getElementById("ejerciciosFracciones").style.display="none";
    document.getElementById("infoFraccionales").style.display="none";
    document.getElementById("btn__ocultarFraccion").style.display="none";
    document.getElementById("btn_mostrarFraccion").style.display="flex";
}


const mostrarFracciones = () => {
    document.getElementById("fracc__dif").style.display="flex";
    document.getElementById("fracc__fac").style.display="none";
    document.getElementById("edfd").style.display="none";
   document.getElementById("edff").style.display="flex";
    

}

const ocultarFracciones = () => {
    document.getElementById("fracc__dif").style.display="none";
    document.getElementById("fracc__fac").style.display="flex";
    document.getElementById("edfd").style.display="flex";
   document.getElementById("edff").style.display="none";
    

}





