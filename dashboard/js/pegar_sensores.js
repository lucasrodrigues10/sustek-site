$(document).ready(function () {


    email = $('#input-email').val();
    senha = $('#input-senha').val();

    //cria json para login
    jsonLogin = JSON.stringify({login: email, pass: senha});
    $.ajax({
        type: "GET",
        url: 'http://u643580869.hostingerapp.com/usuario/sensor',
        statusCode: {
            200: function (data) {
                medidores = [];
                var i;
                for (i = 0; i < data.length; i++) {
                    medidor = data[i]["equipamento"];
                    medidores.push(medidor);
                    $("#medidores").append("<div class='col text-center'><p class='h4'>" + medidor + "</p></div>");
                    $("#select-medidor").append("<option class=''>" + medidor + "</option>");

                }
                for (i = 0; i < data.length; i++) {
                    medidor = data[i]["equipamento"];
                    medidores.push(medidor);

                    $("#medidores-fotos").append("<div class='col'><img src='assets/img/" + medidor + ".jpg' class='img-fluid rounded mx-auto d-block' alt='Responsive image'>" + "</div>");
                }
                console.log(medidores);
                console.log("200 - Success");
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