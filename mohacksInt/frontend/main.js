const minhaTabela = document.getElementById("tabela");

function enviar() {
    $.ajax({
        url: "http://127.0.0.1:3061/enviarform",
        type: 'POST',
        data: {
            "Nome": document.getElementById("nome").value
        },
        success: data => {

            ler();
        }
    });
}

function ler() {
    $.ajax({
        url: "http://127.0.0.1:3061/form",
        type: 'GET',
        success: data => {
            document.getElementById("tabela").innerHTML = "";
            data.forEach(element => {
                document.getElementById("tabela").innerHTML += "<tr><td>" + element['Nome'] + "</td><td><button onclick='edit(" +
                    JSON.stringify(element) + ")'>editar</button> <button onclick='deleteItem(" + element["idAgenda"] + ")'>excluir</button></td><tr>";
            });
        }
    });
}

function deleteItem(id) {
    $.ajax({
        url: "http://127.0.0.1:3061/delete/" + id,
        type: 'DELETE',
        success: data => {
            ler()
        }
    });

}

function edit(e) {
    document.getElementById("nome").value = e['Nome'];
    document.getElementById("idInput").value = e['idAgenda'];
}

function updateName() {

    $.ajax({
        url: "http://127.0.0.1:3061/update/" + document.getElementById("idInput").value,
        data: {
            "Nome": document.getElementById("nome").value
        },
        type: 'PATCH',
        success: data => {
            ler()
        }
    });

}

