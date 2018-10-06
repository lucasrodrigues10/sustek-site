$(document).ready(function () {

    $(document).on("click", "#btn-registrar", function () {

        primeiro_nome = $('#primeiro-nome').val();
        cidade_usuario = $('#cidade').val();
        e_mail = $('#e-mail').val();
        senha_1 = $('#senha').val();
        senha_2 = $('#confirmar_senha').val();

        if (senha_1 === senha_2) {
            //cria json para login
            jsonRegistrar = JSON.stringify({
                nome: primeiro_nome,
                email: e_mail,
                senha: senha_1,
                cidade: cidade_usuario
            });
            $.ajax({
                type: "POST",
                url: 'http://u643580869.hostingerapp.com/usuario',
                data: jsonRegistrar,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                statusCode: {
                    200: function () {
                        console.log("200 - Success");
                        alert('Registrado com sucesso!');
                        window.location.href = "login.html";
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
        }
        else {
            alert('As senhas não coincidem, digite novamente!')
        }
    });


});