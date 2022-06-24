
function capturaEnunciado() {
    let url = "http://127.0.0.1:3082/Perguntainsert";
    {
        $.ajax({
            url: url,
            type: 'POST',
            async: false,
            data: {
                textPerg: $('#campo_enunciado').val(),
                Peso: $('#campo_peso').val(),
                idSub: $('#subeixos').val(),
            }
        })
    }
}

function novaQuestao(){
    document.getElementById("campo_enunciado").value =''
    document.getElementById("campo_peso").value =''
    for (let i = 1; i <= 5; i++) {
        $("#alternativa" + i).val('')
        $("#notas" + i).val('')
        $("#botaosalvar").show()
        $("#botaoedicao").hide()
    }

}

$(document).ready(function () {
    atualizaEixos()
})

$("#eixos").change(function () {
    let eixo_selecionado = parseInt($("#eixos").val())
    let subeixos = capturaSubEixos(eixo_selecionado)
    document.getElementById("subeixos").innerHTML = ``;
    subeixos.forEach(subeixo => {
        document.getElementById("subeixos").innerHTML += `<option value="${subeixo["idSub"]}">${subeixo["Nome"]}</option>`
    })
});

function listaPerguntas() {
    let valor_pergunta = parseInt($("#perguntasp").val())
    let pergunta_selecionada = 0
    $.ajax({
        url: "http://127.0.0.1:3082/Pergunta",
        type: 'GET',
        async: false,
        success: data => {
            data.forEach(pergunta => {
                if (valor_pergunta === pergunta["idPerg"]) {
                    pergunta_selecionada = pergunta
                }
            })
        }
    });
    return pergunta_selecionada
}

function listaAlternativas() {
    let pergunta_selecionada1 = listaPerguntas()
    let alternativas = []
    $.ajax({
        url: "http://127.0.0.1:3082/Alternativa",
        type: 'GET',
        async: false,
        success: data => {
            data.forEach(alternativa => {
                if (alternativa["idPerg"] === pergunta_selecionada1["idPerg"]) {
                    alternativas.push(alternativa)
                }
            })
        }
    });

    return alternativas
}

$("#perguntasp").change(function () {
    let pergunta_selecionada2 = listaPerguntas()
    let alternativas1 = listaAlternativas()
    for (let i = 1; i <= 5; i++) {
        $("#alternativa" + i).val('')
        $("#notas" + i).val('')
    }
    for (let i = 1; i <= alternativas1.length; i++) {
        $("#alternativa" + i).val(alternativas1[i - 1]['textAlternativa'])
        $("#notas" + i).val(alternativas1[i - 1]['Nota'])
    }

    document.getElementById("campo_enunciado").value = pergunta_selecionada2["textPerg"]
    document.getElementById("campo_peso").value = pergunta_selecionada2["Peso"]
    $("#botaosalvar").hide()
    $("#botaoedicao").show()
})

function ajasUptadeGeral() {
    ajasUptadePergunta()
    ajasUptadeAlternativa()
}

function teste() {
    console.log(buscaPerguntas())
}

function ajasUptadePergunta() {
    let perguntas2 = buscaPerguntas()
    let perguntas3 = 0
    perguntas2.forEach(pergunta => {
        if (parseInt($('#perguntasp').val()) === pergunta['idPerg']) {
            perguntas3 = pergunta;
        }
    })

    let url = "http://127.0.0.1:3082/PerguntaUpdate";
    let teste = $("#perguntasp").val()
    console.log(teste)
    $.ajax({
        url: url,
        type: 'POST',
        async: false,
        data: {
            idPerg: parseInt($("#perguntasp").val()),
            textPerg: $('#campo_enunciado').val(),
            Peso: $('#campo_peso').val(),
            idSub: parseInt(perguntas3['idSub']),
        }
    })
}

function ajasUptadeAlternativa() {
    let url = "http://127.0.0.1:3082/AlternativaUpdate";
    let alternativas2 = listaAlternativas()
    for (let i = 1; i <= alternativas2.length; i++) {
        $.ajax({
            url: url,
            type: 'POST',
            async: false,
            data: {
                Alternativa: parseInt(alternativas2[i - 1]['Alternativa']),
                textAlternativa: $("#alternativa" + i).val(),
                Nota: $("#notas" + i).val(),
                idPerg: parseInt(alternativas2[i - 1]['idPerg']),
            }
        })
    }
}
function excluiTudo(){
    excluiAlternativa()
    excluiPergunta()
}

function excluiPergunta(){
    let valor_pergunta_selecionada = ($("#perguntasp").val())
    $.ajax({
        url: "http://127.0.0.1:3082/Perguntadelete",
        type: 'POST',
        async: false,
        data: {
            idPerg: valor_pergunta_selecionada['idPerg'],
        }
    });
}
function excluiAlternativa(){
    let alternativas = []
    $.ajax({
        url: "http://127.0.0.1:3082/Alternativa",
        type: 'GET',
        async: false,
        success: data => {
            data.forEach(alternativa => {
                if (parseInt(alternativa["idPerg"]) === $('perguntasp').val())
                    alternativas.push(alternativa);
            })
        }
    });
    for (let i = 1; i <= alternativas.length; i++)
        $.ajax({
            url: "http://127.0.0.1:3082/Alternativadelete",
            type: 'POST',
            async: false,
            data: {
                Alternativa: alternativa[i]['Alternativa'],
            }
        });
        }

function capturaEixos() {
    let eixos = []
    $.ajax({
        url: "http://127.0.0.1:3082/Eixo",
        type: 'GET',
        async: false,
        success: data => {
            data.forEach(eixo => {
                if (eixo["idAgenda"] === 1)
                    eixos.push(eixo);
            })
        }
    });
    return eixos;
}
function capturaSubEixos(idEixo) {
    let subeixos = []
    $.ajax({
        url: "http://127.0.0.1:3082/SubEixo",
        type: 'GET',
        async: false,
        success: data => {
            data.forEach(subeixo => {
                if (subeixo["idEixo"] === idEixo)
                    subeixos.push(subeixo);
            })
        }
    });
    return subeixos;
}
function capturaAlternativas(idPerg) {
    let alternativas = []
    $.ajax({
        url: "http://127.0.0.1:3082/Alternativa",
        type: 'GET',
        async: false,
        success: data => {
            data.forEach(alternativa => {
                if (alternativa["idPerg"] === idPerg["idPerg"])
                    alternativas.push(alternativa);
            })
        }
    });
    return alternativas;
}
function atualizaAlternativas() {
    for (let i = 1; i <= 5; i++) {
        let puxapergunta = $("#perguntasp").val()
        let alternativasquestao = capturaAlternativas(puxapergunta)
        console.log(alternativasquestao)
        document.getElementById("alternativa" + i).value = alternativasquestao
        $("#botaosalvar").hide()
        $("#botaoedicao").show()
    }
}

function capturaAgendaIdDaPergunta(pergunta) {
    //console.log("idsub = " + pergunta['idSub'])
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
    console.log(eixoId)
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

    //console.log(idAgenda)
    return idAgenda;
}
function atualizaEixos() {
    document.getElementById("eixos").innerHTML = `<option value="" disabled selected>Selecione</option>`
    let eixos = capturaEixos()
    eixos.forEach(eixo => {
        document.getElementById("eixos").innerHTML += `<option value="${eixo["idEixo"]}">${eixo["Nome"]}</option>`
    })
}

function onload() {
    $("#botaoedicao").hide()
    document.getElementById("perguntasp").innerHTML += ''
    let perguntas = buscaPerguntas();
    let numPergunta = 1;
    perguntas.forEach(pergunta => {
        document.getElementById("perguntasp").innerHTML += `<option value="${pergunta["idPerg"]}">Pergunta ${numPergunta}</option>`
        numPergunta++;
    })
}
function capturaIdPerg() {
    var maiorId = 0;
    $.ajax({
        url: "http://127.0.0.1:3082/Pergunta",
        type: 'GET',
        async: false,
        success: data => {
            data.forEach(pergunta => {
                if (pergunta['idPerg'] > maiorId) {
                    maiorId = pergunta['idPerg'];
                }
            })
        }
    });
    return maiorId;
}
function insereAlternativa() {
    for (let i = 1; i <= 5; i++) {
        if ($("#alternativa" + i).val() != "") {
            let url = "http://127.0.0.1:3082/Alternativainsert";
            $.ajax({
                url: url,
                type: 'POST',
                async: false,
                data: {
                    textAlternativa: $("#alternativa" + i).val(),
                    Nota: $("#notas" + i).val(),
                    idPerg: capturaIdPerg(),
                }
            })
        }
    }
}
function buscaPerguntas() {
    let perguntas = []
    $.ajax({
        url: "http://127.0.0.1:3082/Pergunta",
        type: 'GET',
        async: false,
        success: data => {
            data.forEach(pergunta => {
                console.log(pergunta)
                console.log(capturaAgendaIdDaPergunta(pergunta))
                if (capturaAgendaIdDaPergunta(pergunta) === 1)
                    perguntas.push(pergunta)
            })
        }
    });
    console.log(perguntas)
    return perguntas;
}
function pegaTudo() {
    //console.log("inside")

    capturaEnunciado()
    insereAlternativa()
}