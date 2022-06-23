function cadastrarEscola2Bnt(){
    document.getElementById("forms1").style.display="none";
    document.getElementById("forms2").style.display="block";


}
function cadastrarEscola1Bnt(){
    var url="http://127.0.0.1:3082/Escolainsert"
    console.log('estou na funcao')
    $.ajax({
        url: url,
        type: 'POST',
        data: {
            Instituicao: $('#instituicao').val(),
            Estado: $('#estado').val(),
            Cidade: $('#cidade').val(),
            Bairro: $('#bairro').val(),
            Rua: $('#rua').val(),
            numeroAlunos: $('#nAlunos').val(),
            numeroFuncionarios: $('#nFuncionarios').val(),
            codigoCenso: $('#codCenso').val(),
        },
    });
    document.location.href="../pagina-menu-escolha-escolas/menu-escolha-escolas.html";
    }
    
