let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let telefono = document.getElementById ("number")
let cajaComentario = document.getElementById("comentario");
let informacion = [];

let btnEnviar = document.getElementById("enviar");
btnEnviar.addEventListener("click", comprobarDatos);

function guardarDatos () {

    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = email.value;
    informacion[3] = number.value;
    informacion[4] = cajaComentario.value;
    console.log(informacion);

    let blob = new Blob ([informacion], { type: "text/plain;charset=utf-8" }) ;

    saveAs(blob, "contacto.txt");
}

function comprobarDatos(){
    const inputs = document.querySelectorAll("#miFormulario input");
    let camposCompletos = true;
        for (let i=0; i<inputs.length;i++){
            if (inputs[i].value==""){
                camposCompletos = false;
            }
        }

        if (camposCompletos){
            guardarDatos();
        }else{
            alert("debe completar todos los campos");
        }
    }