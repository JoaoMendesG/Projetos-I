/*var sum = function(a, b) {
	return a + b
};

console.log(sum(5,5));


function log(value) {
	console.log(value);
};

log("teste");*/

/*function Car() {
	this.foo = 'bar'
};*/
/*console.log(new Car());
var Car = () => {this.foo = "teste"};*/ // ISSO RETORNA ERRO, POIS COM A ARROW FUNCTION, CAR NAO VIRA UM CONSTRUTOR
/*LEMBRABDO DDO CONCEITO DE HOISTING, A FUNCTION PODE SER EXECUTADA MESMO ANTES DE SER DECLARADA */

/*log("teste");
var log = (value) => {console.log(value);};
log("teste");
/// caracteristicas de hoisting nao funcionam com arrow functions*/

/*var sum = (a, b) => a + b;
console.log(sum(2,1));

var sumNew = a => a + 2;
console.log(sumNew(3)); //  no caso, aqui eu atribuo o valor direto em a, e tbm n preciso de parenteses na arrow function

///log("nem vai ver pq da erro kkkkkkkkkk")
var log = value => {(console.log(value))};
log("Teste = Sucesso !") // ai funciona

var obj ={
	Conteudo: function conteudo(){
		console.log(this); // referencia do proprio obj
	},
	log2: function log2(value) {
		console.log(value);
	}
};
console.log(obj);
console.log(obj.conteudo);
console.log(obj.log2("Testando log function de obj"))
// no caso, nao precisa de console.log]
obj.Conteudo();



var object = {
	showContext: function showContext () {
		setTimeout (() => { // CONTEXTO LEXICO
				this.log("after 1000ms");
			}, 1000);
	},
	log: function log(value) {
		console.log(value);
	}
};
object.showContext();*/
// lembrando, operador ou = ||

/*var mult = function(a = 0, b = 1) { // mas isso só veio dps do es6
	return a * b;
}
console.log(mult(3, 3));

//lazy evaluation
var randNumb = function() {
	return Math.random() * 100; // pois se nao o num é entre 0 e 1
} 

var multplicacao = function(a, b = randNumb().toFixed(0)) { // para deixar sem casas decimais
	return a * b;
}
console.log(multplicacao(1)) */

/*
var nomeProp = 'teste';
var obj = {nomeProp: 'prop value', propName: nomeProp, [nomeProp + "concatenando"]: "another prop value"};
console.log(obj.nomeProp);*/
/*
var obj = {
	sleep: function() {
	  setTimeout(() => {
		console.log(this);
	  }, 1000);
	}
  }
  
  obj.sleep();*/

/*
function sum() {console.log(arguments)} // usaria o arguments, lista de argumentos passados na function

function sum() {
	  var value = 0;
	  for(var i = 0; i < arguments.length; i++) {
		  value += arguments[i];
	  }
	  return value;
  }
  
  
  // rest operator ...
function sum(...args) {
  return args.reduce((acc, value) => acc + value, 0);
  }
  // usando o reduce do array pq o rest operator cria uma arraay de args, ao inves de um obj args que nem o de cima
  // então, caso passe os args no começo, tipo a, b, logo apos colocar ...nome do array de args, começa-se a criar o array de args com os args restantes, no caso ele não pega o a ou b
  
const mut = (...args) => args.reduce((acc, value) => acc * value);
  
function sum(...rest) => {
  return mut.apply(undefined, rest);
};
  
 console.log(5,5,5,2,3);
  
  //spread operator ...
  
  const mut = (...args) => args.reduce((acc, value) => acc * value);
  
  function sum(...rest) => {
	  return mut(...rest).;
  };
  
  console.log(5,5,5,2,3);*/
  //spread se escreve do mesmo jeito que o rest, pode ser usado em strings, arrays, objetos literais e obj iteraveis. quebra e repassa para algum lugar
  /*
const str = "DIO Plataforma"; // obj iteravel !
  
function logArgs (...args) {
	text = args;
  console.log(args); // ou arguments
};
  
logArgs(...str);

const array = [1,2,3,4]

logArgs(...array);
*/


//SYMBOLS, maneira de gerar um identificador unico
/*
const idUnico = Symbol();
console.log(idUnico);

//o valor de um symbol é um id, que nao pode ser adivinhado, descrito ou ser repetido

// da para passar valores para ele tbm

const symbol = Symbol(0);

// um symbol nunca é igual a outro

const objSymbol = {[symbol]: 'Hello world !'}

Symbol.split;

Symbol.toStringTag;

//...

Symbol.iterator; // um interface para vc consumir passo a passo uma lista ou uma estrutura de dados !, tipo, criando um array, ele traz os valores de um array.
// o lance pós o es6 agr, é usar um for of para ver os valores de uma lista ou array, tipo:
const arr = [1,3,5,7,9];
// com strings tbm funciona !! Tipo um soletrando do Luciano Hulk

for (let item of arr) {console.log(item);}*/

// usando em um obj:
/*
const obj = {
	itens: [1,3,5,7,9], 
	[Symbol.iterator]() {
		let i = 0;
		return {
			next: () => {
				i++;
				return {
					value: this.itens[i - 1],
					done: i > this.itens.length
				};
			}
		};
	}
};*/
/*
const it = obj[Symbol.iterator]();
*/
/*
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
*/
/*
for(let value of obj) {
	console.log(value);
}*/

// pode usar o spread tbm
/*
const arraySpread = [...obj]
console.log(arraySpread); // lindo */


// iterados = interface

//generators... functions com pausam e despausam, retornando valores atraves da mesma interface de iteracao, ex:

/*function hello () {console.log('hello'), console.log('world'), console.log('!')}

// caso eu quisesse pausar e retornar outros valores, generators *

function* hello () {console.log('hello'); yield 1; console.log('world'); yield 2; console.log('!');}

const it = hello();

//console.log(it); // checar o prototype
console.log(it.next()); 
console.log(it.next()); 
console.log(it.next()); 
*/
// quase igual o de cima, symbol

// tbm pode ser usado para criar iteradores
// com o while
/*
function* numeros() {
	let numero = 0;
	while(true) {
		yield numero;
		numero++;
	}
};
const it = numeros();

console.log(it.next());
console.log(it.next());
console.log(it.next());*/

// usando no obj anterior
/*
const obj = {
	itens: [1,3,5,7,9], 
	*[Symbol.iterator]() { // por ter o * já vira um generator
		for(var i = 0; i < this.itens.length; i++) {
			yield this.itens[i];
		}
	}
};

for(let value of obj) {
	console.log(value);
}*/


const customError = new Error('Algo de errado não está certo...');

throw customError;