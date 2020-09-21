/*var contador ={
	valor: 0,
	incrementar: function(){
		this.valor++;
	},
	reset: function(){
		console.log("Valor contador agora", this.valor);
		this.valor = 0;
	}
}


contador.reset();*/

var contador = (function(){
	var valor = 0; //privado

	
	var incrementar= function(){
			valor++;
		};

	var reset= function(){
			console.log("Valor contador agora", valor);
			valor = 0;
		};
		
	return{

		incrementar: incrementar,
		reset: reset
	}

})();

contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.reset();