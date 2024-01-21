//const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//Se usa el require para usar xmlhttprequest fuera del navegador
//la instruccion require no se puede usar en un navegador, tendra un error
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//agregamos la url de la API a una constante para poder usarla de forma mas facil
const API = "https://api.escuelajs.co/api/v1";

//se crea la funcion que obtendra datos usando xmlhttprequest 
function fetchData(urlApi, callback){
	// se crea una instancia de xmlhttprequest
    let xhttp = new XMLHttpRequest();

	//su usa el metodo open para abrir una nueva solicitad a la API
    xhttp.open("GET", urlApi, true);
	// ahora validaremos que la peticion se realice correctamente usando el metodo de xmlhttprequest
	// onreadystatechange que nos devuelve valores en funcion del estado de la solicitad.
    xhttp.onreadystatechange = function (event){
		//comprobamos el estado del cliente xmlhttprequest
        if(xhttp.readyState === 4) {
            //0 no se inicializo, 1 loading, 2 se ejecuto, 3 interactuando, 4 completado
			//con al atributo estatus comprobamos si se completo la solicitud
            if(xhttp.status === 200){
				//LOADING Y DONE: 200
				//por ultimo devolvemos los datos, en un formato de objeto utilizando JSON.parse()
                callback(null, JSON.parse(xhttp.responseText));
			//si falla devolvemos un error
            }else{
                const error = new Error("Error" + urlApi)
				//devolvemos el callback con un error y ningun dato
                return callback(error, null)
            }
        }
    }
	//una vez comprobado que todo es correcto, mandamos la solicitud al servidor
    xhttp.send();
}

//empezamos a realizar solicitudes usando al funcion fetch data
//primero buscamos lo productos
fetchData(`${API}/products`, function(error1, data1){
	//si hay un error devolvemos el error y terminamos con la ejecucion
    if(error1) return console.error(error1);
	//ahora buscamos el id 
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2) return console.error(error2);
        //? optional chaining
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});