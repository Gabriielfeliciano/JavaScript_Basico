$(function(){

	$("#botao1").on("click", function(e){
		alert("teste");
	});

	$("#link1").on("click", function(a){
		a.preventDefault();
		alert("link 1 ");
	})

	$("#input1").on("keyup", function(b){
		console.log(b.keyCode);
		if (b.keyCode === 13) {
			alert("Enter pressionado");
		}
	})
});
