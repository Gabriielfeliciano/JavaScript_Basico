/*

[Começando um array]

var emails = [];

emails[0] = "Joao@email.com";
emails[1] = "Maria@email.com";

console.log(emails[1]);

 var nomes = ["Gabriel","Leticia","Luara"];

 console.log(nomes);

===========================================================================

[Add e delete elementos do array]

var nomes = ["Gabriel","Leticia","Luara"];

nomes.push("Maria");

console.log(nomes);

nomes.pop();

console.log(nomes);

nomes.unshift("Lucas");

console.log(nomes);

nomes.shift("Lucas");

console.log(nomes);

==========================================================================

Ver elementos com ForEach

var nomes = ["Gabriel","Leticia","Luara"];

nomes.forEach(function(e){
	console.log(e);
});

==========================================================================

*/

var nomes = ["Gabriel","Leticia","Luara"];

console.log(nomes);
console.log(nomes.toString());
console.log(nomes.join(" - "));



