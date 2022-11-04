//QUE ES UNA API
//APLICATION PROGRAMMNING INTERFACE
//ES UN SERVICIO EL CUAL PUEDE PROVEER INFORMACION O TAMBIEN PUEDE CREARLA

//EN JS EXISTE UNA FUNCION LA CUAL SE ENCARGA DE HACER LA PETICION
//FETCH()
//EXISTE TIPO DE PETICIONES DONDE LAS PRINCIPALES SON:
//GET: obtener informacion
//POST: crear datos
//PUT: actualizar datos
//DELETE: eliminar datos
//FUNCTION ASYNC
//las funciones async fueron creadas para poeder ejecutar algo y en caso la ejecucion de esto demora mas de los normal,es para poder pasar a la siguiente funcion
//hay un tiempo de espera no se sabe cuanto tarda
//peticion.. no esta bien estructurada, nunca retornara nada

const imgProfile = document.querySelector("#img-profile");
const githubName = document.querySelector("github-name")
const githubUserName = document.querySelector("github-username")
const githubBio = document.querySelector("github-bio")
const githubJoined = document.querySelector("github-joined")
const githubRepos = document.querySelector("github-repos")
const githubFollowers = document.querySelector("github-followers")
const githubFollowing = document.querySelector("github-following")
const githubLocation = document.querySelector("github-location")
const githubTwitter = document.querySelector("github-twitter")


/* PIMERA FORMA

const obtenerDatosGithub = async()=>{
    //como ejemplo await esta haciendo lo siguiente
    //ejecuta fetch con la url y una vez que sabe la ejecucion fetch recien hara el console.log

    const response = await fetch("https://api.github.com/users/crisalhep")

    //es decir que hasta que la ejecucion no termine no mostrara la siguiente linea

    const data = await response.json();
    imgProfile.src = data.avatar_url
    console.log(data)
}
*/


//NECESITAMOS INPUT Y BUTTON

const githubActionSearch = document.querySelector("#github-action-search");
const githubInputSearch = document.querySelector("#github-search")

githubActionSearch.onclick =()=>{
    const username = githubInputSearch.value;
    githubInputSearch.value = "";
    //aca nos falata validad si el inut esta vacio 
    if(username ===""){
        Swal.fire({
            title: "error",
            text: "debes llenar el campo usario",
            icon:"error"        
        });
        return;
    }
    //ojo!!! solo nos mostrara el alert si el input esta vacio..
    //recuerden que el return termina la ejecucion
    obtenerDatosgithub(username);
};


//vamos a detectar el eebtmo de enter cuando entremos en el input 
// est hace que funcione con el enter 
githubInputSearch.addEventListener("keyup", function(event){
    if(event.key ==="Enter"){
        obtenerDatosgithub(event.target.value)
    }a
})
//------------------------------------------------------------



const obtenerDatosgithub = async(username = "crisalhep")=>{


    const response = await fetch(`https://api.github.com/users/${username}`);

    const data = await response.json();

    if(data.message === "Not Found"){
        Swal.fire({
            title:"Error",
            text: "No se econtro el usuario",
            icon: "error",
        });
        return;
    }

    setDataUser(data)
};

const formatDate = (fecha)=>{
    let date = new Date(fecha);
    return date.toISOString().split("T")[0];
}


const setDataUser = (data)=>{
    imgProfile.src = data.avatar_url;
    githubName.innerHTML = data.name;
    githubBio.innerHTML = data.bio;
    githubUserName.innerHTML=`@${data.login}`;
    githubJoined.innerHTML= formatDateformatDate(data.created_at);
    githubRepos.innerHTML = data.public_repos;
    githubFollowers.innerHTML = data.followers;
    githubFollowing.innerHTML = data.following;
    githubLocation.innerHTML= data.company;
    githubTwitter.innerHTML = data.twitter_usernname;
    

}

//llamar a la funcion
obtenerDatosgithub()