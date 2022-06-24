const minhaTabelaEixo = document.getElementById("tabelaEixo");
function enviarEixo() {
    let select = document.querySelector('#agenda');
    let optionValue = select.options[select.selectedIndex].value;
    let text = select.options[select.selectedIndex].text;
    console.log(optionValue, text)
    $.ajax({
        url: "http://127.0.0.1:3082/enviareixo",
        type: 'POST',
        data: {
            "Nome": document.getElementById("nomeEixo").value,
            "idAgenda": document.getElementById("agenda").value//pega o valor do dropdown
        },
        success: data => { /* no lugar de data estava apenas: ()*/
            console.log("olá");
            lerEixo();

        }

    });
}
//função get (lê)
function lerEixo() {
    atualizarDropdownAgenda();
    $.ajax({
        url: "http://127.0.0.1:3082/formeixo",
        type: 'GET',
        success: data => {
            console.log(data);
            document.getElementById("tabelaEixo").innerHTML = "" // inner html vazio para evitar de duplicação
            data.forEach(element => {
                document.getElementById("tabelaEixo").innerHTML += "<tr><td><div id='define'></div>" + "Eixo: " + element['Nome'] + "<br>Agenda:" + element['idAgenda'] + "</td><td><button id='editeixo' onclick='editEixo(" +
                    JSON.stringify(element) + ")'><i class='fas fa-pen'></i></button></td><td><button id='deleteixo'onclick='deleteEixo(" +
                    element["idEixo"] + ")'><i class='fas fa-trash'></button></td></tr>"; //td e tr que compõem a tabela vazia presente no html, aqui é incrementado os botões de editar e excluir e o cadastro do eixo
            });


        }
    });
}


function deleteEixo(id) {
    $.ajax({
        url: "http://127.0.0.1:3082/deleteixo/" + id,
        type: 'DELETE',
        success: data => {
            lerEixo() //chamada get para ler
        }
    });

}

function atualizarDropdownAgenda() { //chamada get
    document.getElementById("agenda").innerHTML = "<option value=' ' disabled selected>Selecione agenda</option>";
    $.ajax({
        url: "http://127.0.0.1:3082/form",
        type: 'GET',
        success: data => {
            data.forEach(agenda => { //laço
                document.getElementById("agenda").innerHTML +=
                    `<option value=${agenda['idAgenda']}>${agenda['Nome']}</option>`;
            })
        }
    })
}
function editEixo(e) {
    document.getElementById("nomeEixo").value = e['Nome']; //pega o valor do input e o transporta para a coluna Nome do bd por meio do (=)
    document.getElementById("agenda").value = e['idAgenda']; // pega o elemento - do botão escondido e quando for clicado, o id do eixo é incrementado
    document.getElementById("idInputEixo").value = e['idEixo']; // pega o elemento - do botão escondido e quando for clicado, o id do eixo é incrementado
}

function updateEixo() {//atualiza (edita)
    $.ajax({
        url: "http://127.0.0.1:3082/updateixo/" + document.getElementById("idInputEixo").value,
        data: {
            "Nome": document.getElementById("nomeEixo").value,
            "idAgenda": document.getElementById("agenda").value,
            "idEixo": document.getElementById("idInputEixo").value
        },
        type: 'PATCH',
        success: data => {
            lerEixo()
        }
    });

}

function getAdd(event) {
   
}




