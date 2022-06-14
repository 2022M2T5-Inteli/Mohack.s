  //esse código deu bug referente ao banco de dados
  
  // const minhaTabelaEixo = document.getElementById("tabelaEixo"); 
//   function enviarEixo() {
//        $.ajax({
//         url: "http://127.0.0.1:3061/enviareixo",
//         type: 'POST',
//         data: {
//             "Nome": document.getElementById("nomeEixo").value
//         },
//         success: () => {
//             lerEixo();

//         }
//     });
// }

// function lerEixo() {
//     $.ajax({
//         url: "http://127.0.0.1:3061/formeixo",
//         type: 'GET',
//         success: data => {
//             data.forEach(element => {
//                 document.getElementById("tabelaEixo").innerHTML += "<tr><td>" + element['Nome'] + "</td><td><button onclick='editEixo(" +
//                     JSON.stringify(element) + ")'>editar</button> <button onclick='deleteEixo(" + element["idEixo"] + ")'>excluir</button></td><tr>";
//             });

//         }
//     });
// }

// function deleteEixo(id) {
//     $.ajax({
//         url: "http://127.0.0.1:3061/delete/" + id,
//         type: 'DELETE',
//         success: data => {
//             lerEixo()
//         }
//     });

// }

// function editEixo(e) {
//     document.getElementById("nomeEixo").value = e['Nome'];
//     document.getElementById("idInputEixo").value = e['idEixo'];
// }

// function updateEixo() {

//     $.ajax({
//         url: "http://127.0.0.1:3061/update/" + document.getElementById("idInputEixo").value,
//         data: {
//             "Nome": document.getElementById("nomeEixo").value
//         },
//         type: 'PATCH',
//         success: data => {
//             lerEixo()
//         }
//     });

// }

   