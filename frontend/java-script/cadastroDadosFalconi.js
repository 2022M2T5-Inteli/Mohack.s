function inserirDados(){
    var url="http://127.0.0.1:3082/Adiministradorinsert"
    $.ajax({
        url: url,
        type: 'POST',
        data: {
            Nome: $('#nome').val(),
            Email: $('#email').val(),
        },
    });
}
