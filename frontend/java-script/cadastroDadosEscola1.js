function cadastrarEscola1(){
    var url="http://127.0.0.1:3082/Escolainsert"
    $.ajax({
        url: url,
        type: 'POST',
        data: {
            numeroAlunos: $('#nAlunos').val(),
            numeroFuncionarios: $('#nFuncionarios').val(),
            codigoCenso: $('#codCenso').val(),
        },
    });
}