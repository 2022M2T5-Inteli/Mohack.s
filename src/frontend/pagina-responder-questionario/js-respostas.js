function onload() {
    trocaDiv()
}

function salvaRespostas() {
    let url = "http://127.0.0.1:3082/Respostasinsert";
    let perguntas = []
    perguntas = buscaPerguntas()
    console.log(perguntas)
    perguntas.forEach(pergunta => {
        let alternativas = capturaAlternativas(pergunta['idPerg']);
        console.log(alternativas)
        let opcaoEscolhida = document.querySelector(`input[name=questao${pergunta['idPerg']}]:checked`).value;
        let nota = pegaAlternativaPeloId(opcaoEscolhida)['Nota'];
        console.log(nota)
        if(nota === "ruim"){
            nota = 1;
        }
        else if(nota === "regular"){
            nota = 2;
        }
        else if(nota === "bom"){
            nota = 3;
        }
        else if(nota === "muito bom"){
            nota = 4;
        }
        else if(nota === "excelente"){
            nota = 5;
        }
        let notaFinal = nota * parseInt(pergunta['Peso']);
        console.log("nota final" + notaFinal)
        console.log(parseInt(pergunta['Peso']))
        console.log( nota * parseInt(pergunta['Peso']))
        $.ajax({
            url: url,
            type: 'POST',
            async: false,
            data: {
                idGestor: 1,
                idPerg: pergunta['idPerg'],
                Alternativa: opcaoEscolhida,
                notaTotal: parseInt(notaFinal),
                idSub: pergunta['idSub']
            }
        })
    })
}


function pegaAlternativaPeloId(id) {
    let alternativaDesejada = null;
    $.ajax({
        url: "http://127.0.0.1:3082/Alternativa",
        type: 'GET',
        async: false,
        success: data => {
            data.forEach(alternativa => {
                if (parseInt(alternativa["Alternativa"]) === parseInt(id))
                    alternativaDesejada = alternativa;
            })
        }
    });
    return alternativaDesejada;

}

function trocaDiv() {
    let array = []
    array = buscaPerguntas()
    array.forEach(pergunta => {
        document.getElementById("possuidor").innerHTML += `<div>${pergunta["textPerg"]}</div>`
        let alternativas = capturaAlternativas(pergunta['idPerg'])
        alternativas.forEach(alternativa => {
            document.getElementById("possuidor").innerHTML += `<div><input type="radio" value=${alternativa['Alternativa']} name="questao${alternativa['idPerg']}" class="inputRadio">${alternativa['textAlternativa']}</div>`;
        })

    })
}

function capturaAgendaIdDaPergunta(pergunta) {
    let eixoId = 0;
    $.ajax({
        url: "http://127.0.0.1:3082/SubEixo",
        type: 'GET',
        async: false,
        success: data => {
            data.forEach(subeixo => {
                if (subeixo["idSub"] === pergunta['idSub'])
                    eixoId = subeixo["idEixo"];
            })
        }
    });
    let idAgenda = -1;
    $.ajax({
        url: "http://127.0.0.1:3082/Eixo",
        type: 'GET',
        async: false,
        success: data => {
            data.forEach(eixo => {
                if (eixo["idEixo"] === eixoId)
                    idAgenda = eixo["idAgenda"];
            })
        }
    });
    return idAgenda;
}

function buscaPerguntas() {
    let perguntas = []
    $.ajax({
        url: "http://127.0.0.1:3082/Pergunta",
        type: 'GET',
        async: false,
        success: data => {
            data.forEach(pergunta => {
                if (capturaAgendaIdDaPergunta(pergunta) === 1)
                    perguntas.push(pergunta)
            })
        }
    });
    return perguntas;
}

function capturaAlternativas(idPerg) {
    let alternativas = []
    $.ajax({
        url: "http://127.0.0.1:3082/Alternativa",
        type: 'GET',
        async: false,
        success: data => {
            data.forEach(alternativa => {
                if (alternativa["idPerg"] === idPerg) {
                    alternativas.push(alternativa);
                }
            })
        }
    });
    console.log
    return alternativas;
}