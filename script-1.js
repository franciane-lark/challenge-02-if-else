// EXERCÍCIO BÔNUS - Ajuda na resolução

//Crie uma condição que exiba uma mensagem no console 
//"se seu nome começar com a letra R".

let nome = "Luan";

// Esse charAt(0) verifica a primeira letra no nome
if(nome.charAt(0) === "R"){
    console.log(nome, "seu nome começa com a letra R");
}

//Crie uma condição que exiba uma mensagem no console
// "se seu sobrenome tiver mais de 6 letras" 
//OU "se seu nome começar com a letra E".

let sobreNome = "Silva";

// esse length verificar a quantidade de letras
if( (sobreNome.length >= 6) || (nome.charAt(0) === "E") ){
    console.log(`Seu sobrenome: ${sobreNome} tem +6 letras ou começa com a letra E`);
}else{
    console.log(`Seu sobrenome: ${sobreNome} não tem +6 letras ou não começa com a letra E`)
}