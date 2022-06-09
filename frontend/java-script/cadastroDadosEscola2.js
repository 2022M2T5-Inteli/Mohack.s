function cadastrarEscola2(){
    var url="http://127.0.0.1:3082/Escolainsert"
    $.ajax({
        url: url,
        type: 'POST',
        data: {
            Instituicao: $('#instituicao').val(),
            Estado: $('#estado').val(),
            Cidade: $('#cidade').val(),
            Bairro: $('#bairro').val(),
            Rua: $('#rua').val(),
        },
    });
    document.location.href="paginacadastroescolas1.html";

}