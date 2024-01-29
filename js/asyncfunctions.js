
//funcion que retorna una promesa
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)? setTimeout(() => resolve("Aync!!"), 2000) : reject(new Error("Error!"));
    })
}

//funcion asincrona
const anotherFn = async () => {
    //al llamar a something le estaremos diciendo que espere por la respuesta de la promesa pero de mientras continua con la ejecucion del programa
    const something = await fnAsync();
    console.log(something);
    //escribimos algo en consola para saber que la promesa fue 
    console.log("Hello!");
}

console.log("Before");
anotherFn();
console.log("After");

