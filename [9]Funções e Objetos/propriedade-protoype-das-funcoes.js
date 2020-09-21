 var Carro = function(nome,placa){

 	this.nome = nome;
 	this.placa = placa;
 	//this.fabricante= "VW";

 }

 Carro.prototype.fabricante = "VW";
 Carro.prototype.ligar = function(){
 	console.log("ligando...");
 };

 var fox = new Carro("Fox", "AAA-111");
 console.log(fox);

  var gol = new Carro("gol", "AAA-222");
 console.log(gol);

  console.log(fox.fabricante);
  console.log(gol.fabricante);

fox.ligar();