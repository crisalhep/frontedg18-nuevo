//promesas: sirve para poder ejecutar al asyncrono
// cuando hacemos una peticion a un API -- esto tiene un tiempo de espera--

//new promise()
//esrto determinamos que es una promesa
//resolve : este retornara la respuesta cuando todo esta ok!
//reject: cuando esta algo mal
//retornan algo
//cuando creamos una promesa esta no tiene un return


const promesa = new Promise((resolve,reject)=>{
//vamos a emular un tiempo de espera

    setTimeout(()=>{
//esta funcion va a esperar 3 segundos para retornar el resolve
        resolve("aca demora en llegar a console")

    },5000);
});

//como ejecutamos la promesa
async function getDataFromPromesa(){
    const respuesta = await promesa;
    console.log(respuesta);
}


getDataFromPromesa()
//existe otra forma de leer promesas, esta forma existe del asynt await
//.then()=>entonces luego de
//.then un callback
//callback es una funcion que ejecuta algo en la base del resultado


promesa.then((respuesta)=>{
    //cuando acabe de ejecutar la promesa detener el valor y guarda una respuesta
console.log("then", respuesta)

})


//vamos a crear una promesa con errores...
const promesasConError =(validacion)=>{
    return new Promise((resolve,reject)=>{
        if(validacion){
            resolve("la validacion esta ok")
        }else{
            //new error es una clase de js la cual permite retornar con mensaje
            reject(new Error("Error en la validacion"))
        }
    });

}

//veamos como poder validar un error usando .then()

promesasConError()
.then((error)=>{
    console.log(respuesta)
    //para poder detectar un error usamos .catch()
    //si algo esta mal automaticamente entra al catch()

})

.catch((error)=>{
    console.log(error.message)
})

//vamos a validar un  error USANDO ASYNC AWAIT

const validacionesAsync = async()=>{
    //con try catch
    try{
        //aca va a intentar obtener el resultado de la peticion
        const respuesta = await promesasConError(false);
        consoles.log("validadcionesAsync", respuesta)
    }catch(error){
        //si detecta un error automaticamnete entra al catch()
        console.log("validacionesAsync", error.message)
    }
};

validacionAsync()

//ejemplo real 

const getUserGithub = async ()= >{
    prueba{
       const respuesta = aguardar buscar("https://api.github.com/users/cvxcvcvcv") ;
       const datos = aguardar respuesta.json();
       regreso datos; 
    }atrapar(error){
        
        consola.iniciar sesión(error.mensaje)
    }
};
getUserGithub()

//veamos un poco de los que el código statuts ,
//normalmen estos codigo son respuesta de una peticion fallida 

//200, 500,401,403,404,201,512
//si una peticvion n0o devuelve un status que sea 200 201 
//que la erespuesta es ok 
//200 = ok
//201 = ok y ademas significa que algo ha sido creado 

// si la url respuesta un 500 404 512 
// heno un error
//404 = es el eroror que muestra cuandono encuentra la url, es devir no existe
//500 = es ele error que retorna cunado hay un problema en serviudor 
//512 = es un error de espacio en el servidor 

//get = obetner datos 
//post = enviar / crear datos 
//put = datos de actualización
//eliminar = borrado