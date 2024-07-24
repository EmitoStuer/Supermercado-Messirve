let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cajaComentario = document.getElementById("comentario");
let informacion = [];

let btnEnviar = document.getElementById("enviar");
btnEnviar.addEventListener("click", guardarDatos);

function guardarDatos () {
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = email.value;
    informacion[3] = cajaComentario.value;
    console.log(informacion);
    let blob = new Blob ([informacion], { type: "text/plain;charset=utf-8" }) ;

    saveAs(blob, "contacto.txt");
}

