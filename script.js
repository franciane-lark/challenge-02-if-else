let idade = 18;
let humano = true;

/*--------------------------------------------------------*/

console.log(idade);

/*--------------------------------------------------------*/
if (idade >= 18 && humano == true) {
    console.log("Você é maior de idade e humano.")
}else{
    console.log("Digite novamente!");
}
/*--------------------------------------------------------*/
let mes = "janeiro"; //dezembro

if(mes == "janeiro" || mes == "dezembro"){
    console.log("Faz aniversário em janeiro ou dezembro.");
}else{
    console.log("Digite novamente!");
}
/*--------------------------------------------------------*/
let nome = "Raiane";

if (nome === "R"){
    console.log("Seu nome tem a letra R.");
}else{
    console.log("Digite o nome novamente!");
}
/*--------------------------------------------------------*/
let sobrenome = "Emilly";

if(sobrenome == 6 || sobrenome === "E"){
    console.log("Seu nome tem 6 letras ou começa com a letra E");
}else{
    console.log("Erro, tente novamente!");
}