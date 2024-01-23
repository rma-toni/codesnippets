//promise

const cows = 9;

//creamos una promesa, lleva de argumentos una funcion que recibe como parametros
//un resolve y un reject.
const countCows = new Promise(function (resolve, reject){
    if (cows > 10) {
        resolve (`We have ${cows} cows on the farm`);
    } else {
        reject ("There is no cows on the farm");
    }
});

//con them obtenemos el valor si la promesa es verdadera
//y con catch obtenemos la respuesta si la promesa es falsa
countCows.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
})

//prueba vim
