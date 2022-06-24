const minhaTabela = document.getElementById("tabela");

function enviar() { //insere valor dos elementos no corpo do html
    $.ajax({
        url: "http://127.0.0.1:3082/enviarform",
        type: 'POST',
        data: {
            "Nome": document.getElementById("nome").value //pega o valor do input
        },
        success: data => {
            ler();//chamada get para ler
        }
    });
}

function ler() { //chamada get
    $.ajax({
        url: "http://127.0.0.1:3082/form",
        type: 'GET',
        success: data => {
            document.getElementById("tabela").innerHTML = "";
            data.forEach(element => { //laço
                document.getElementById("tabela").innerHTML += "<tr id='row1'><td>" 
                + element['Nome'] + "</td><td><button id='edit' onclick='edit(" +
                    JSON.stringify(element) + ")'><i class='fas fa-pen'></i></button></td><td><button id='delet' onclick='deleteItem(" + 
                    element["idAgenda"] + ")'><i class='fas fa-trash'></i></button></td></tr>";
                    //elementos que conforme incrementa, compõem a tabela vazia presente no html
                });
        }
    });
}

function deleteItem(id) { //deleta o elemento por meio do id (deleta tudo da linha de registro)
    $.ajax({
        url: "http://127.0.0.1:3082/delete/" + id,
        type: 'DELETE',
        success: data => {
            ler()
        }
    });

}

function edit(e) {
    document.getElementById("nome").value = e['Nome']; //inseri o valor do input na coluna Nome do banco de dados
    document.getElementById("idInput").value = e['idAgenda']; //botão escondido 
}

function updateName() { //atualiza - edita

    $.ajax({
        url: "http://127.0.0.1:3082/update/" + document.getElementById("idInput").value,
        data: {
            "Nome": document.getElementById("nome").value
        },
        type: 'PATCH',
        success: data => {
            ler()
        }
    });

}



