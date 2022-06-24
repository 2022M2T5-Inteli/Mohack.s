const tabelaSub = document.getElementById("tabelaSub");

function x() { //insere valor dos elementos no corpo do html
    console.log("enviar subEixo");
    let sub = document.querySelector('#sub');
    let valueSub = sub.options[sub.selectedIndex].value;
    let value = sub.options[sub.selectedIndex].text;
    $.ajax({
        url: "http://127.0.0.1:3082/enviarformsub",
        type: 'POST',
        data: {
            "Nome": document.getElementById("nomeSub").value,
            "Tipo": document.getElementById("tipoSub").value,
            "idEixo": document.getElementById("sub").value //pega o select(dropdown)
        },
        success: data => {
            console.log("sub-eixo enviado");
            lerSub();//chamada get para ler
        }
    });
}

function lerSub() { //chamada get
    atualizarDropdownEixo();
    console.log("leitura feita");
    $.ajax({
        url: "http://127.0.0.1:3082/formsub",
        type: 'GET',
        success: data => {
            document.getElementById("tabelaSub").innerHTML = "";
            data.forEach(element => { //laço
                document.getElementById("tabelaSub").innerHTML += "<tr><td><div id='a'></div>" 
                + element['Nome'] +"<br>Eixo:"+ element['idEixo']+"<br>Tipo:"+ element['Tipo'] + "</td><td><button id='editSub' onclick='editSub(" +
                    JSON.stringify(element) + ")'><i class='fas fa-pen'></i></button></td><td><button id='deleteSub' onclick='deleteSub(" + 
                    element["idSub"] + ")'><i class='fas fa-trash'></i></button></td></tr>";
                    //elementos que conforme incrementa, compõem a tabela vazia presente no html
                });
        }
    });
}

function deleteSub(id) { //deleta o elemento por meio do id (deleta tudo da linha de registro)
    $.ajax({
        url: "http://127.0.0.1:3082/deletesub/" + id,
        type: 'DELETE',
        success: data => {
            lerSub()
        }
    });

}

function atualizarDropdownEixo() { //chamada get
    document.getElementById("sub").innerHTML = "<option value=' ' disabled selected>Selecione eixo</option>";
    $.ajax({
        url: "http://127.0.0.1:3082/formeixo",
        type: 'GET',
        success: data => {
            data.forEach(sub => { //laço
                document.getElementById("sub").innerHTML +=
                    `<option value=${sub['idEixo']}>${sub['Nome']}</option>`;
            });
        }
    });
}

function editSub(e) {
    document.getElementById("nomeSub").value = e['Nome']; //inseri o valor do input na coluna Nome do banco de dados
    document.getElementById("idInputSub").value = e['idSub']; //botão escondido 
    document.getElementById("tipoSub").value = e['Tipo']; //tipo do subEixo
    document.getElementById("sub").value = e['idEixo'];
}

function updatesub() { //atualiza - edita
    console.log("http://127.0.0.1:3082/updatesub/" + document.getElementById("idInputSub").value);
    $.ajax({
        url: "http://127.0.0.1:3082/updatesub/" + document.getElementById("idInputSub").value,
        data: {
            "Nome": document.getElementById("nomeSub").value,
            "Tipo": document.getElementById("tipoSub").value,
            "idSub": document.getElementById("idInputSub").value,
            "idEixo": document.getElementById("sub").value
        },
        type: 'PATCH',
        success: data => {
            lerSub()
            console.log("sub-eixo enviado");
        }
    });

}

function getSub(event){ 
console.log("sub-eixo selecionado");
}