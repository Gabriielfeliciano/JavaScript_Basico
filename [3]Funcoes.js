/*
Aula 3.3: Funções matematicas
var menorNota = Math.min(5, 4, 8, 9, 3, 5, 1);

console.log(menorNota);

var maiorNota = Math.max(5, 4, 8, 9, 3, 5, 1);

console.log(maiorNota);

var temperatura = Math.round(29.7);

console.log(temperatura);

var valorAleatorio = Math.random();

console.log(valorAleatorio);

var valorNormal = valorAleatorio * 100;
var valor = Math.round(valorNormal);

console.log(valor);

==============================================================================================================================
Aula 3.4:Criando funções
function subtrair (a,b){
	return a - b;
}

var sub = subtrair(5,3);
console.log("5 - 3 =", sub);
console.log(typeof(subtrair));

==============================================================================================================================
Aula 3.5:Var globais e locais
var nome = "Gabriel";//var global

function meu(){
	var nome = "Gabriel".toUpperCase();//local
}
console.log(nome);

function meu2(){
	nome = "Gabriel".toUpperCase();//Global
}
meu2();
console.log(nome);

==============================================================================================================================
Aula 3.6:Closures
function incrementar(){
	var valor = 0;

	return  function(){
	 
	 return ++valor

	}

}

var fn = incrementar();
console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());
*/
