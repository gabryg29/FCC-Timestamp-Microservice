//Este código permite montar un objeto de APP de Express
var express = require('express');
var app = express();
app.use(express.static(__dirname + "/public")); //Esto vincula de alguna forma los elementos estáticos de nuestra app con el directorio al que el usuario puede acceder

//------------------------------------------------------------------------------
//PROGRAMA BUENO
//------------------------------------------------------------------------------

//Podría mejorarse quitando este app.get, detectando si req.params.data==undefined

app.get("/api/timestamp/", respuestaTimestampVacio); //Cuando reciba una llamada en www.app.com/ ejecuto el handler "respuesta"
function respuestaTimestampVacio(req, res) //Esta función devuelve como respuesta a la llamada un archivo, en este caso un HTML para "visualizar la app"
{ 
  req.utc = new Date(Date.now()).toUTCString();
  req.unix = new Date(Date.now()).getTime();
  res.json({"unix": req.unix, "utc": req.utc}); 
  console.log("Recibida una llamada en www.app.com/api/timestamp/");
} 

app.get("/api/timestamp/:data", respuestaTimestamp); //Cuando reciba una llamada en www.app.com/ ejecuto el handler "respuesta"
function respuestaTimestamp(req, res) //Esta función devuelve como respuesta a la llamada un archivo, en este caso un HTML para "visualizar la app"
{ 
  console.log(req.params.data);
  if(req.params.data.charAt(4)!="-"){   
    var resultDate = parseInt(req.params.data); 
    console.log("Ejecución de int");
  }
  else{
    var resultDate = req.params.data;
    console.log("Ejecución normal");
  }
  req.utc = new Date(resultDate).toUTCString();
  req.unix = new Date(resultDate).getTime();
  
  if(req.utc=="Invalid Date"){
    res.json({"error" : req.utc}); 
  }
  else{
    res.json({"unix": req.unix, "utc": req.utc}); 
  }
  
  console.log("Recibida una llamada en www.app.com/api/timestamp/:data");
  console.log("Data: " + resultDate);

} 
//------------------------------------------------------------------------------

/** Serve the HTML file of the programm*/
app.get("/", respuesta); //Cuando reciba una llamada en www.app.com/ ejecuto el handler "respuesta"

function respuesta(req, res) //Esta función devuelve como respuesta a la llamada un archivo, en este caso un HTML para "visualizar la app"
{ 
  res.sendFile(__dirname+'/views/index.html'); //Meto el path/file para darlo como respuesta
  console.log("Recibida una llamada en www.app.com/");
} 

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
