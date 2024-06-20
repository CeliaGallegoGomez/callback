import "../scss/styles.scss";

// //Callback --función que ejecuta otra función.
// //callback y printdata son lo mismo (o por lo menos son intercambiables)

//- Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbers =[1,2,3,4,5]


function myFirstCallback(array){
    array.forEach((number,index)=> {
        let multiplication = number*index;
        console.log(multiplication);
    });  
}

const ejecucion = myFirstCallback(numbers);

//- Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2

function giveBack(array){
    let result= array.map((number,index)=> {
        return number/(index+2);
    });
    return result;
}

const ejecucionDos = giveBack(numbers)

console.log(ejecucionDos)


//- Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const minus =['caldero','trompeta']

function goMayus (array){
    const result =array.map(word=> {
        return word.toUpperCase();
    });
    return result;
}

const ejecucionTres = goMayus(minus);

console.log(ejecucionTres)
