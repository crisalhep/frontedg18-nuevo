//existe dentro de js el document... este atributode js permite obtener elementos de HTML

//obtener elemntos segun el nombre de su etiqueta
//tag - etiqueta en ingles
//h1-div-input


/*const inputs=document.getElementsByTagName("input")
console.log("input", inputs.value);
//recordemos que input es un html collection,
//para poder recorrerlo debemos convertirlo en un array
//array.from esto convierte un html colecction a un array.


//convertir un html collect a array normal
const newInputs = Array.from(inputs);
console.log("newinput", newInputs)


//bucle map
newInputs.map((newInput)=>{
    console.log("nueva forma", newInput.value)
})


//bucle for
for(let i=0; i<inputs.length; i++){
    console.log("input", inputs[i].value);
}

//------------------------------------------


const password = document.getElementById('input_password')

console.log("password", password)

//vamos a acceder al elemento seleccionado el value de mi input

password.style.backgroundColor = "#000";
password.style.color = "#fff";

//por clases

const InputsName = document.getElementsByClassName
("last_name");
console.log(InputsName)

                  //con esta palabra convertimos
const InputName = Array.from(InputsName)
console.log(InputsName)


//bucle forEach
InputName.forEach((input)=>{
    console.log(input.value)
})

*/

//otros ejemplo

const form = document.getElementsByTagName('form')
console.log(form)

const input2 = document.querySelectorAll('input2')
console.log(input2)

input2.forEach((input)=>{
    console.log(input.value)
})
