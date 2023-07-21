function getValueInput(){
    let nombre = document.getElementById("username").value;
    let contraseña = document.getElementById("password").value;
    console.log(nombre, contraseña);
}


function login(){
    window.location.href="index.html"
}

function mostrarRegister () {
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "block";
}


function mostrarLogin (){
    document.getElementById("login").style.display = "flex";
    document.getElementById("register").style.display = "none";
}
function iniciarSesion(){
    let nombre = document.getElementById("username").value;
    let contraseña = document.getElementById("password").value;

    if (nombre == "emiliano" & contraseña == "abanicog11"){
        login();
        event.preventDefault();
    } else {
        alert("nombre de usuario o contraseña incorrecto");
    }
    
}