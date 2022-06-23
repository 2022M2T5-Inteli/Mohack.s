const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = '127.0.0.1';

const cors = require("cors");

const port = 3061;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'banco.db';

app.use(express.static("../frontend/"));

app.use(express.json());
app.use(cors());


/* Definição dos endpoints */

/****** CRUD ******************************************************************/


// Retorna todos registros (é o R do CRUD - Read)
app.get('/form', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM Agenda ORDER BY idAgenda COLLATE NOCASE';
	db.all(sql, [], (err, rows) => {
		if (err) {
			throw err;

		}

		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/enviarform', urlencodedParser, (req, res) => {
	console.log("cheguei");
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = `INSERT INTO Agenda (Nome) VALUES ('${req.body.Nome}')`; //insere dentro da tabela respostas os dados entre parênteses
	var db = new sqlite3.Database(DBPATH); // Abre o banco, sem sql = e aspas
	console.log(sql);
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
		else console.log(sql);
	});
	db.close(); // Fecha o banco
	res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.patch('/updateEixo/:id', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE Agenda SET Nome = '" + req.body.Nome + "' WHERE idAgenda = " + req.params.id
	var db = new sqlite3.Database(DBPATH); // Abre o banco, copia e insere no sqlite 
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.delete('/deleteEixo/:id', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM Agenda WHERE idAgenda = " + req.params.id;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});


/* Inicia o servidor */
app.listen(port, hostname, () => {
	console.log(`BD server running at http://${hostname}:${port}/`);
});




/*eixo */



// Retorna todos registros (é o R do CRUD - Read)
app.get('/formeixo', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM Eixo ORDER BY idEixo COLLATE NOCASE';
	db.all(sql, [], (err, rows) => {
		if (err) {
			throw err;

		}

		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/enviareixo', urlencodedParser, (req, res) => {
	console.log("cheguei");
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = `INSERT INTO Eixo (Nome, idAgenda) VALUES ('${req.body.Nome}','${req.body.idAgenda}')`; //insere dentro da tabela respostas os dados entre parênteses
	var db = new sqlite3.Database(DBPATH); // Abre o banco, sem sql = e aspas
	console.log(sql);
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
		else console.log(sql);
	});
	db.close(); // Fecha o banco
	res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.patch('/update/:id', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE Agenda SET Nome = '" + req.body.Nome + "' WHERE idAgenda = " + req.params.id
	var db = new sqlite3.Database(DBPATH); // Abre o banco, copia e insere no sqlite 
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.delete('/delete/:id', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM Agenda WHERE idAgenda = " + req.params.id;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});
