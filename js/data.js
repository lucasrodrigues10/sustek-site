$(document).ready(function() {
    $.ajax({
        url: "http://demo4289605.mockable.io/medidor"
    }).then(function(data) {
        $('.data-id').append(data.ID);
        $('.data-sensor').append(data.Medidor);
        $('.data-potencia').append(data.Potencia);
        $('.data-horario').append(data.Tempo);
    });
});