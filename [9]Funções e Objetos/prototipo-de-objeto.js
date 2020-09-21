//PrototypeOf

//var volks={
//	fabricante:"VW"
//}

//var fox = {
//	nome : "fox",
//	placa:"AAA-111",
//	__proto__: volks
	
//}

//var gol = Object.create(volks);
//gol.nome = "Gol";
//gol.placa = "AAA-2222";


//Object.setPrototypeOf(fox, volks);
//console.log(fox);
//console.log(gol);
//===================================================================================
/*
função
var criarCarro = function(nome, placa){
	return {
		nome: nome,
		placa: placa,
		fabricante: "VW"
	}
}
 var fox = criarCarro("fox","AAA-111");
 console.log(fox);
=====================================================================================
 Função construtora


 */
 var Carro = function(nome,placa){

 	this.nome = nome;
 	this.placa = placa;
 	this.fabricante= "VW";

 }

 var fox = new Carro("Fox", "AAA-111");
 console.log(fox);