/*

[Objetos]

var fox = {
	cor: "prata",
	modelo: "fox",
	frabicante:"VW"

}

console.log(fox);
console.log(fox.cor);

fox.cor = "Branco";
console.log(fox.cor);

fox.peso = 1000;
console.log(fox);
console.log(fox.peso);

fox.ligar = function(){
	console.log("ligar o carro")
}

fox.ligar();

=====================================================================

[Objetos dentro de Objetos]

var joao = {
	nome: "joao",
	idade: 25,
	endereco:{
		logradouro:"rua a",
		numero:100,
		complemento:"Apartamento 205"
	}
	

}
 console.log(joao);

 console.log("numero da casa do joão: ",joao.endereco.numero);

 joao.endereco.numero = 102;
 console.log("numero novo da casa do joão: ",joao.endereco.numero);

=====================================================================

[Deletar Objeto]

var maria = {
	nome: "maria",
	idade: 17,
	namorado: "Joao",
	endereco:{
		logradouro:"rua b",
		numero:10,
		complemento:"Apartamento 200"
	}

}

console.log(maria);
console.log("==================================================");

delete maria.namorado;
console.log(maria);

=====================================================================

[Propiedades]

var maria = {
	nome: "maria",
	idade: 17,
	namorado: "Joao",
	endereco:{
		logradouro:"rua b",
		numero:10,
		complemento:"Apartamento 200"
	}

}

for (var prop in maria) {
	console.log(prop);
}

=====================================================================

[Comparando obj]

var maria = {
	nome: "maria",
	idade: 17,
	email:"a@a",
	igualA: function(obj){
		return this.email === obj.email;
	}
}

var joao = {
	nome: "joao",
	idade: 25,
	email:"a@a"
}


console.log(maria.igualA(joao));
*/

