


function clicar(){
    document.getElementById("obg").innerHTML = "Obrigado pelo click :)"; // tbm pode ser = "<b>Obrigado por clicar</b>" que retorna o texto em negrito, só que no formato hmtl, ou seja, tbm funciona html.
    // por causa do DOM, o java consegue acessar qualquer elemento/tag no documento html, logo passamos para ele buscar no documento e pegar pelo id, depois fazer uma inserção com o innerhtml
    //console.log(document.getElementById("obg"))
    //alert('Obrigado por clicar)
};


function redirect(){
    window.open("url") //abre em outra guia
    //window.location.href = "url" //abre na mesma guia
}


function change(elemento){
    //document.getElementById('mouse').innerHTML = "Outro textinho >:)"
    //alert('Trocando texto')
    elemento.innerHTML = "Outro textinho >:)"
}


function back(elemento){
    elemento.innerHTML = "Passe o mouse aqui" //não precisa passar o id, pois esta pegando o proprio elemento como parametro, no index hmtl
    //document.getElementById('mouse').innerHTML = "Passe o mouse aqui"
}

function load(){
    alert('Pág carregada')
}

function funcaoChange(elemento){
    console.log(elemento.value)
}




/*function click() {
    alert('Obrigado pelo click :)')
}*/



/*function soma(n1, n2){
    return n1 + n2;
}

var validar = 0; //-- globak

function validarIdade(idade){
    //var validar -- é o validar local !! Não irá alterar o validar global 
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt('Digite a sua idade');
validarIdade(idade);
console.log(validar); //--retorna o global !!
*/

/*var d = new Date();
alert(d)
pega a data e de dentro da data dá para pegar infos especificas
alert(d.get)*/



/*var count;
for(count = 0; count <=5; count++){
    console.log(count);
};*/



/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count) // lol kkkkkkkk
    count = count + 1; // count ++
};*/



/*var idade = prompt('Qual é a sua idade ?'); // emite um pop up para receber o valor da variavel - input
//var idade = 18;
if (idade >= 18){
    alert('maior de idade');
}else{
    alert('menor de idade');
};*/



/*var frutas = [{nome:'maça', cor:'vermelha'}, {nome:'uva', cor:'roxa'}]
console.log(frutas[0].cor)
alert(frutas[0].nome)*/



/* var fruta = {nome:'maça', cor:'vermelha'}
console.log(fruta)
console.log(fruta.nome)
alert(fruta.cor) */ 


//var lista = ['maça', 'pera', 'laranja'];
//lista.push('uva'); //adc um item na lista
//lista.pop(); //remove o último item da lista
//console.log(lista[1]); //pega a pera
//lista.length retorna o tamanho da lista
//lista.reverse(); ordena a lista inversamente, ao contrário

//console.log(lista[0])
//console.log(lista.toString()[0])
//console.log(lista.join(' - ')) //usa outro tipo de separador na lista


// | pipline
//alert(lista[1])
//var nome = "João Pedro";
//var idade = 18;
//var idade2 = 20;
//var frase = "O Palmeiras não tem mundial !";
//alert("meu terceiro pop up com js main.js: Bem vindo " + nome);
//alert(nome + " tem " + idade + " anos");
//alert(idade+idade2); posso deixar como str tbm
//console.log(nome);
//console.log(idade);
//console.log(frase);
//console.log(frase.replace('Palmeiras', 'Atlético Paranaense'))
//tbm posso fazer//
//alert(frase.replace('não tem', 'tem'))
//alert(frase.toUpperCase()) // tbm tem o toLowerCase
// com os numeros pode-se fazer as outras operações tbm
// pelo console aparece o erro, debug 