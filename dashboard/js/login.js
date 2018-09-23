$(document).ready(function () {
    $(document).on("click", "#btn-logar", function () {
        usuario = $('#input-usuario').val();
        senha = $('#input-senha').val();

        url = 'http://u643580869.hostingerapp.com/login';

        //cria json para login
        //jsonLogin = JSON.stringify({login: usuario,pass: senha});
        jsonLogin = {"login": "teste@sql", "pass": "123"};
        console.log(jsonLogin);
        $.ajax({
            type: "POST",
            url: 'http://u643580869.hostingerapp.com/login',
            data: jsonLogin,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            crossDomain: true,
            success: function (data) {
                alert("Deu bom");
                alert(data);
                window.location.href = "index.html";
            },
            error: function () {
                alert("Errouuuuu");
            }
        });
    });


});