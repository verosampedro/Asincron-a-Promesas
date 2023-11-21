
/* Importo este módulo para que me devuelva promesas */
const fs = require('fs/promises');

/* Defino una función con async para indicar que puede contener operaciones asincrónicas que se van a manejar de manera sincrónica con un await posteriormente */
async function readJSON() {

  try {
    /* readFile para leer el contenido del .json y me devuelva una cadena de texto que se almacenará en la variable declarada 'data'. El await para que 
    la promesa que me va a devolver readFile se resuelva */
    const data = await fs.readFile('exercise.json', 'utf8');

    /* Convierto la cadena de texto almacenada en 'data' en un objeto js */
    const jsonData = JSON.parse(data);

    /* Se recorre el array results del objeto jsonData y se imprime el título de cada elemento en la consola */
    jsonData.results.forEach(function (item) {
      console.log(item.title);
    });

    console.log('Lectura correcta.');

  } catch (err) {
    console.error('Error leyendo el archivo:', err);
  }
}

readJSON();