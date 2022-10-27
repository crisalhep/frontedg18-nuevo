//crearemos nuestra funcion

function callMenu(){
    let nro_ejercicio= parseInt(
    prompt("ingrese el numero de ejercicio que quiera ejecutar: \r\n 1.suma. \r\n 2. Promedio de Examenes \r\n 3.calcular el area del rectangulo")

    );
    if(isNaN(nro_ejercicio)){
        alert("ingreasar valores")
    }else{
        MenuEjercicios(nro_ejercicio)
    }
}


function MenuEjercicios(nro_ejercicio){
    switch(nro_ejercicio){
        case 1:
            let valor1 = parseFloat(prompt("ingresa el valor 1 a sumar"));
            let valor2 = parseFloat(prompt("ingresa el valor 2 a sumar"));
            alert(ej1_sumarValores(valor1,valor2))
            break;
        case 2:
            let ex1 = parseFloat(prompt("ingresa nota 1"));
            let ex2 = parseFloat(prompt("ingresa nota 2"));   
            let ex3 = parseFloat(prompt("ingresa nota 3"));      
            let ex4 = parseFloat(prompt("ingresa nota 4"));
            alert(ej2_calcularPromedio(ex1,ex2,ex3,ex4))
            break;
        case 3:
            let base_rect = parseFloat(prompt("ingrese base"));
            let altura_rect = parseFloat(prompt("ingrese altura"));
            alert(ej3_calcularAreaRectangulo(base_rect,altura_rect))
    }
}


function ej1_sumarValores(a,b){
    if(isNaN(a) || isNaN(b)){
        return"porfavor ingresa valores";
    }else{
    return a+b    
}
}


function ej2_calcularPromedio(){
    if(isNaN(ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(ex4)){
        return "porfavor ingresa las notas"

    }else{
    return(ex1+ex2+ex3+ex4)/4;}
}
