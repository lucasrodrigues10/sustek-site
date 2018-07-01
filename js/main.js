$(document).ready(function () {

    $("#btn-busca-a").click(function () {
        $('#jb-avan').toggle("slide", {direction: "right"}, 1000);
        console.log("ola");

    });

    $("#btn-buscar").click(function () {
        $('#jb-res').show();
        $('#jb-det').hide();
    });

    $("#btn-lista").click(function () {
        $('#galeria').hide();
        $('#lista').show();
    });

    $("#btn-galeria").click(function () {
        $('#lista').hide();
        $('#galeria').show();
    });

    $(".btn-gostei").click(function () {
        $('#jb-res').hide();
        $('#jb-det').show();
    });

    $('#table_id').DataTable( {
        language: {
            "sEmptyTable": "Nenhum registro encontrado",
            "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            "sInfoFiltered": "(Filtrados de _MAX_ registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "_MENU_ resultados por página",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "Pesquisar",
            "oPaginate": {
                "sNext": "Próximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Último"
            },
            "oAria": {
                "sSortAscending": ": Ordenar colunas de forma ascendente",
                "sSortDescending": ": Ordenar colunas de forma descendente"
            }
        }
    } );

    $("#nav-pagina-inicial").click(function () {
        $("#pagina-inicial").show();
        $("#senhorios").hide();
        $("#inquilinos").hide();
    })

    $("#nav-inquilinos").click(function () {
        $("#pagina-inicial").hide();
        $("#senhorios").hide();
        $("#inquilinos").show();
    })

    $("#nav-senhorios").click(function () {
        $("#pagina-inicial").hide();
        $("#senhorios").show();
        $("#inquilinos").hide();
    })

    $(".img-car").click(function () {
        $('#jb-res').hide();
        $('#jb-det').show();
    })

});