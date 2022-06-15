const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3082;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'banco.db';
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("../frontend"));
app.use(express.json());


/* Definição dos endpoints */



/****** CRUD ******************************************************************/


//tabela adiministrador
// Retorna todos registros (é o R do CRUD - Read)
app.get('/Adiministrador', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  	var sql = 'SELECT * FROM Adiministrador ORDER BY Nome COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});
// Insere um registro (é o C do CRUD - Create)
app.post('/Adiministradprinsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO Adiministrador (Nome, Email) VALUES ('" + req.body.Nome + "','" + req.body.Email + "')";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});
// Atualiza um registro (é o U do CRUD - Update)
app.post('/AdiministradorUpdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE Adiministrador SET Nome = '" + req.body.Nome + "', Email = '" + req.body.Email + "' WHERE idFalconi = '" + req.body.idFalconi + "'";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});
// Exclui um registro do (é o D do CRUD - Delete)
app.post('/Adiministradordelete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM Adiministrador WHERE idFalconi = '" + req.body.idFalconi + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});


//tabela respostas
// Retorna todos registros (é o R do CRUD - Read)
app.get('/Respostas', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  	var sql = 'SELECT * FROM Resposta ORDER BY idResp COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});
// Insere um registro (é o C do CRUD - Create) -() se der erro é pq n precisa do idResp)
app.post('/Respostasinsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO Resposta (idResp, idGestor, idPerg, Alternativa, idEixo) VALUES ('" + req.body.idResp + "','" + req.body.idGestor + "''" + req.body.idPerg + "''" + req.body.Alternativa + "''" + req.body.idEixo + "')";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});




//tabela agenda
// Retorna todos registros (é o R do CRUD - Read)
app.get('/Agenda', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Agenda ORDER BY Nome COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});
// Insere um registro (é o C do CRUD - Create)
app.post('/agendainsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO Agenda (idAgenda, Nome) VALUES ('" + req.body.idAgenda + "','" + req.body.Nome + "')";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});
// Atualiza um registro (é o U do CRUD - Update)
app.post('/agendauptade', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE Agenda SET Nome = '" + req.body.Nome + "' WHERE idAgenda = " + req.body.idAgenda;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});
// Exclui um registro (é o D do CRUD - Delete)
app.post('/agendadelete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM Agenda WHERE idAgenda = " + req.body.idAgenda
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});


//tabela Alternativa
app.get('/Alternativa', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  	var sql = 'SELECT * FROM Alternativa ORDER BY textAlternativa COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});
// Insere um registro (é o C do CRUD - Create)
app.post('/Alternativainsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO Alternativa (textAlternativa, Cargo, idPerg) VALUES ('" + req.body.textAlternativa + "','" + req.body.Cargo + "','" + req.body.idPerg + "')";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});
// Atualiza um registro (é o U do CRUD - Update)
app.post('/AlternativaUpdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE Alternativa SET textAlternativa = '" + req.body.textAlternativa + "', idPerg = '" + req.body.idPerg + "', Nota = '" + req.body.Nota + "' WHERE Alternativa = '" + req.body.Alternativa + "'";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});
// Exclui um registro do (é o D do CRUD - Delete)
app.post('/Alternativadelete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM Alternativa WHERE Alternativa = '" + req.body.Alternativa + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});


//tabela eixo
// Retorna todos registros (é o R do CRUD - Read)
app.get('/Eixo', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  	var sql = 'SELECT * FROM Eixo ORDER BY Nome COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});
// Insere um registro (é o C do CRUD - Create) (se der erro é pq precisa do idEixo)
app.post('/Eixoinsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO Eixo (Nome, idAgenda) VALUES ('" + req.body.Nome + "','" + req.body.idAgenda + "')";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});
// Atualiza um registro (é o U do CRUD - Update)
app.post('/EixoUpdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE Eixo SET Nome = '" + req.body.Nome + "', idAgenda = '" + req.body.idAgenda + "' WHERE idEixo = '" + req.body.idEixo + "'";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});
// Exclui um registro do (é o D do CRUD - Delete)
app.post('/Eixodelete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM Eixo WHERE idEixo = '" + req.body.idEixo + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});


//tabela SubEixo
app.get('/SubEixo', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  	var sql = 'SELECT * FROM SubEixo ORDER BY Nome COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});
// Insere um registro (é o C do CRUD - Create)
app.post('/SubEixoinsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO SubEixo (Nome, Tipo, idEixo) VALUES ('" + req.body.Nome + "','" + req.body.Tipo + "','" + req.body.idEixo + "')";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});
// Atualiza um registro (é o U do CRUD - Update)
app.post('/SubEixoUpdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE SubEixo SET Nome = '" + req.body.Nome + "', idEixo = '" + req.body.idEixo + "', Tipo = '" + req.body.Tipo + "' WHERE idSub = '" + req.body.idSub + "'";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});
// Exclui um registro do (é o D do CRUD - Delete)
app.post('/SubEixodelete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM SubEixo WHERE idSub = '" + req.body.idSub + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});



//tabela Escola
app.get('/Escola', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  	var sql = 'SELECT * FROM Escola ORDER BY Instituicao COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});
// Insere um registro (é o C do CRUD - Create)
app.post('/Escolainsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO Escola (Instituicao, Estado, Cidade, Bairro, Rua, numeroAlunos, numeroFuncionarios, codigoCenso) VALUES ('" + req.body.Instituicao + "','" + req.body.Estado + "','" + req.body.Cidade + "','" + req.body.Bairro + "','" + req.body.Rua + "','" + req.body.numeroAlunos + "','" + req.body.numeroFuncionarios + "','" + req.body.codigoCenso + "')";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});
// Atualiza um registro (é o U do CRUD - Update)
app.post('/EscolaUpdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE Escola SET Instituicao = '" + req.body.Instituicao + "', Estado = '" + req.body.Estado + "', Cidade = '" + req.body.Cidade + "', Bairro = '" + req.body.Bairro + "', Rua = '" + req.body.Rua + "', numeroAlunos = '" + req.body.numeroAlunos + "', numeroFuncionarios = '" + req.body.numeroFuncionarios + "', codigoCenso = '" + req.body.codigoCenso + "' WHERE idEscola = '" + req.body.idEscola + "'";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});
// Exclui um registro do (é o D do CRUD - Delete)
app.post('/Escoladelete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM Escola WHERE idEscola = '" + req.body.idEscola + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});


//tabela Gestor
app.get('/Gestor', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  	var sql = 'SELECT * FROM Gestor ORDER BY Nome COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});
// Insere um registro (é o C do CRUD - Create)
app.post('/Gestorinsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO Gestor (Nome, Cargo, idEscola) VALUES ('" + req.body.Nome + "','" + req.body.Cargo + "','" + req.body.idEscola + "')";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});
// Atualiza um registro (é o U do CRUD - Update)
app.post('/GestorUpdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE Gestor SET Nome = '" + req.body.Nome + "', idEscola = '" + req.body.idEscola + "', Cargo = '" + req.body.Cargo + "' WHERE idGestor = '" + req.body.idGestor + "'";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});
// Exclui um registro do (é o D do CRUD - Delete)
app.post('/Gestordelete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM Gestor WHERE idGestor = '" + req.body.idGestor + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});



//tabela Perguntas
// Retorna todos registros (é o R do CRUD - Read)
app.get('/Pergunta', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  	var sql = 'SELECT * FROM Pergunta ORDER BY TextPerg COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});
// Insere um registro (é o C do CRUD - Create)
app.post('/Perguntainsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO Pergunta (textPerg, Peso, idSub) VALUES ('" + req.body.textPerg + "','" + req.body.Peso + "','" + req.body.idSub + "')";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});
// Atualiza um registro (é o U do CRUD - Update)
app.post('/PerguntaUpdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE Pergunta SET textPerg = '" + req.body.textPerg + "', Peso = '" + req.body.Peso + "', idSub = '" + req.body.idSub + "' WHERE idPerg = '" + req.body.idPerg + "'";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});
// Exclui um registro do (é o D do CRUD - Delete)
app.post('/Perguntadelete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM Pergunta WHERE idPerg = '" + req.body.idPerg + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});


//Tabela Rede
// Retorna todos registros (é o R do CRUD - Read)
app.get('/leRede', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM Rede ORDER BY idRede COLLATE NOCASE';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});
// Insere um registro (é o C do CRUD - Create)
app.post('/criaRede', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    sql = "INSERT INTO Rede (Nome, Tipo) VALUES ('" + req.body.Nome + "','" + req.body.Tipo + "', 33, false)";
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
    });
    db.close(); // Fecha o banco
    res.end();
});
// Atualiza um registro (é o U do CRUD - Update)
app.post('/atualizaRede', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    sql = "UPDATE Rede SET Nome = '" + req.body.Nome + "', Tipo = '" + req.body.Tipo + "' WHERE idRede = " + req.body.idRede;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
});
// Exclui um registro (é o D do CRUD - Delete)
app.post('/deletaRede', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    sql = "DELETE FROM Rede WHERE idRede = " + req.body.idRede;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
});



/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


