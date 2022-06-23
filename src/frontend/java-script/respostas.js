
function submeter(){
    var url="http://127.0.0.1:3082/Perguntainsert"
    console.log('estou na funcao')
    $.ajax({
        url: url,
        type: 'POST',
        data: {
            idGestor: 1,
            idPerg: 3,
            textPerg: 'a',
            Peso: 2,
            idSub: 1,
        },
    });
}