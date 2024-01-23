//Es una forma de consumir, por ejemplo, una API, usando promesas

//Necesitamos importar el componente "fetch", recuerda que no es necesario usar esta para probarlo en el navegador
//ya que esta disponible por defecto, tambien hay que agregar el modulo fetch al package.json
import fetch from "node-fetch";
//como la url de la api la usaremos seguido, creamos una constante con su valor
const API = 'https://api.escuelajs.co/api/v1';

//creamos la funcion para usar fetch
function fetchData(urlApi){
	//simplemente retornamos todos los datos que va obtener fetch
	//tambien lo transformamos en JSON para poder mostrarlo
	return fetch(urlApi).then(response => response.json());
}

//como es una promesa podemos usar .then and .catch
fetchData(`${API}/products`)
	.then(products => {
		console.log(products);
	})
	.catch(error => console.log(error));
