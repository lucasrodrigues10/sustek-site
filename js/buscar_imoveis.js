$("#buscaimovel").click(function(){
	tipo = $("#tipoimovel").val();
	tipo = tipo.toLowerCase();
	cidade = $("#cidadeimovel").val();
	cidade = cidade.replace(/ /g,"_");
	
	$.ajax({
		type: "get",
		url:"http://"+ host+ "/imovel/"+tipo+"/"+cidade,
		success:function(result){
			console.log(result);
			
			console.log(result[0].rua);
			console.log(result[0].cidade);
			console.log(result[0].valor_imovel);
		}
		
	});
	
	
})