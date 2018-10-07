$(document).ready(function () {

    $(document).on("click", "#btn-ad-med", function () {

        nome_sensor = $('#nome_sensor').val();
        codigo_sensor = $('#codigo_sensor').val();

        jsonAdicionarMedidor = JSON.stringify({
            id_sensor: codigo_sensor,
            equipamento: nome_sensor,
        });
        $.ajax({
            type: "POST",
            url: 'http://u643580869.hostingerapp.com/sensor',
            data: jsonAdicionarMedidor,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            statusCode: {
                200: function () {
                    console.log("200 - Success");
                    alert('Sensor Adicionado com sucesso!');
                    //location.reload();
                },
                401: function (request, status, error) {
                    alert('Erro');
                    console.log("404 - Not Found");
                    console.log(error);
                },
                404: function (request, status, error) {
                    alert('Erro');
                    console.log("404 - Not Found");
                    console.log(error);
                },
                503: function (request, status, error) {
                    alert('Erro');
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