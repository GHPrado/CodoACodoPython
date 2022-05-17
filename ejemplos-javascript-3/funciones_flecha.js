/************ FUNCIONES DE TIPO FLECHA ***************/

// // Función tradicional 
// function cuadrado(x){ 
//     return x*x;
// }
// console.log(cuadrado(2));

// // Función Arrow
// var aCuadrado = x => x*x;
// console.log(aCuadrado(4));

/*---------------------------------------------------------*/
// // Función tradicional 
// console.log(sumar(4,6));
// function sumar (num1,num2) {
//     return num1+num2;
// } 

// // Función Arrow
// var aSumar = (num1,num2) => num1+num2;
// console.log(aSumar(5,7));

/*---------------------------------------------------------*/
// // Función tradicional 
// function multiplicar (num1,num2) {
//     producto= num1*num2;
//     return producto; 
// } 
// console.log(multiplicar(2,3));

// // Función Arrow
// var aMultiplicar = (num1,num2) => 
// {   
//     producto= num1*num2;
//     return producto; 
// }
// console.log(aMultiplicar(6,7));

/* ¿CÓMO CONVERTIMOS UNA FUNCIÓN TRADICIONAL EN UNA FUNCIÓN FLECHA */
function cubo(a){
    return a*a*a;
}
//Paso 1: Elimina la palabra "function" y coloca un = a la izquierda del nombre. Coloca la flecha entre el argumento y las llaves de apertura.
cubo = (a) => {
    return a*a*a;
}

//Paso 2: Quita los llaves{} del cuerpo y la palabra "return" — el return está implícito.
cubo = (a) => a*a*a;

//Paso 3: Suprime los paréntesis de los argumentos
cubo = a => a*a*a;
console.log(cubo(3)) //27