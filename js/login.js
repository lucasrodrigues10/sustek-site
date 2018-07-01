$('.message a').click(function () {
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");

});

$('#login').click(function(){
	dados = {	
			login:$("#textlogin").val(),
			pass:$("#textpass").val()
		}
	
	$.ajax({
		url:"http://"+ host+ "/login",
		type: "post",
		dataType: "json",
		contentType: 'application/json',
		data: JSON.stringify(dados),
		statusCode:{
			200: function (response){
				console.log("aceitou");
				window.location.href = "pages/home.php";
			}
		}
		
	});
	
	
});
