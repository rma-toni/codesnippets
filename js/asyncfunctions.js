
//funcion que retorna una promesa
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)? setTimeout(() => resolve("Async!!"), 2000) : reject(new Error("Error!"));
    })
}

//funcion asincrona
const anotherFn = async () => {
    //al llamar a something le estaremos diciendo que espere por la respuesta de la promesa pero de mientras continua con la ejecucion del programa
    //se podira decir que await indica a partir de que parte de una funcion asincrona comiensa su asincronisidad con el resto del codigo
    const something = await fnAsync();
    console.log(something);
    //escribimos algo en consola para saber que la promesa fue 
    console.log("Hello!");
}

console.log("Before");
anotherFn();
console.log("After");

