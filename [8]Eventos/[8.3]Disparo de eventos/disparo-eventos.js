$(function(){

	var atividade = $("#atividade");
	var listaAtividades = $("#lista-atividades");

	atividade.on("keyup", function(a){
		var keyCode = a.keyCode;

		if (keyCode === 13) {
			atividade.trigger("enter", atividade.val());
			atividade.val("");
		}
	});

	atividade.on("enter", function(evento, texto){
		listaAtividades.prepend("<li>" + atividade.val() + "</li>");
	});
});