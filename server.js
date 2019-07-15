const express = require('express')
const app = express()
const request = require('request');


app.set('view engine', 'ejs')
app.use(express.static('public'));

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "", //Direccion de la conexion a la DB
  user: "",//Usuario
  password:"", //Contraseña
  database: "", //Nombre de la DB
});

app.get('/', function (req, res) {
    res.render('index');
})


app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

app.post('/', function (req, res) {

	var str = req.body.sigRawData;
	var cedula = req.body.cedula_doc;
	var sql = "INSERT INTO doctor (firma) VALUES (str) WHERE ced_doc = cedula"; //Query para instar la firma en la DB (Este es uno de prueba, usado para la presentacion del sistema.)
	con.query(sql, function (err, result) {
	if (err) throw err;
	console.log("1 record inserted");
	});  
})