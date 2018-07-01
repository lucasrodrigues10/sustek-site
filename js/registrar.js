$('#registrar').click(function(){
	dados = {	
			nome:$("#regNome").val(),
			senha:$("#regPass").val(),
			email:$("#regEmail").val(),
			cpf:$("#regCpf").val(),
			rg:$("#regRg").val(),
			tel:$("#regTel").val(),
			tipo:$("#regTipo").val().toLowerCase()
	}
	
	
	$.ajax({
		url:"http://"+ host+ "/registrar",
		type: "post",
		dataType: "json",
		contentType: 'application/json',
		data: JSON.stringify(dados),
		statusCode:{
			201: function (response){
				//alerta usuario que conta foi criada
				console.log("conta criada com sucesso");
			}
		}
		
	});
	
	
	console.log(dados);
})