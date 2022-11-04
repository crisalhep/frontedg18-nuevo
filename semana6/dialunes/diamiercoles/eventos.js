
const btnPrueba = document.querySelector('#btn-prueba')
// atrapa el boton

btnPrueba.onclick = function(event){
    console.log("click desde el boton")
    console.log(event)
    Swal.fire("hola mundo")
}

//--------------------------------------


const btnPregunta = document.querySelector('#btn-pregunta')

btnPregunta.onclick = function(){
    Swal.fire("alguna pregunta", "aca el texto de la pregunta en cuestion")
}

//--------------------------------------

const btnError = document.querySelector('#btn-error')

//--------------------------------------
//definamos una nueva funcion para el sweet alert

function showAlert(icon, title,text){
    Swat.fire(
        icon,
        title,
        text,
        footer: "<a href ='http://google.com'> mas info "
    )
}

btnError.onclick = function(){
    Swal.fire("ERROR", "hubo un error", "mail o password erroneos")
}