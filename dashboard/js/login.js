$(document).ready(function () {
    $(document).on("click", "#btn-logar", function () {
        usuario = $('#input-usuario').val();
        senha = $('#input-senha').val();

        //cria json para login
        jsonLogin = JSON.stringify({login: usuario, pass: senha});
        $.ajax({
            type: "POST",
            url: 'http://u643580869.hostingerapp.com/login',
            data: jsonLogin,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
            statusCode: {
                200: function () {
                    console.log("200 - Success");
                    window.location.href = "index.html";
                },
                401: function (request, status, error) {
                    alert('Dados Incorretos');
                    console.log("404 - Not Found");
                    console.log(error);
                },
                404: function (request, status, error) {
                    console.log("404 - Not Found");
                    console.log(error);
                },
                503: function (request, status, error) {
                    console.log("503 - Server Problem");
                    console.log(error);
                }
            },
            error: function (jqXHR, status, error) {
                console.log(jqXHR);
                console.log(status);
                console.log(error);
            }
        });
    });


});