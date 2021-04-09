// Crie um jogo em que você vai ter que escolher entre 3 
// armas para enfrentar o grande dragão malvado "Progradragão". As armas são uma espada,
// uma faca e um sapato. Só uma dessas opções que vai garantir a vitória contra o dragão Antes de começar o jogo, 
// o mesmo vai pedir o nome do herói, acrescente o nome do herói nos textos do jogo.


const ler = require("prompt-sync")();

console.log("Olá, bem vindo ao jogo PROGRADRAGÃO!");
console.log("─────▄████▀█▄");
console.log("───▄█████████████████▄");
console.log("─▄█████.▼.▼.▼.▼.▼.▼▼▼▼");
console.log("▄███████▄.▲.▲▲▲▲▲▲▲▲");
console.log("████████████████████▀▀");
console.log("Aqui você vera um mundo completamente diferente!");
console.log("Você está quase no final do jogo, só falta matar o dragão!");
console.log("Lembre-se só existe apenas uma resposta correta, você terá duas chances!");
console.log("Qual arma você escolhe para matar o dragão?");
var arma= ler("DGITE 1 = Espada, DIGITE 2 = Faca, DIGITE 3= Sapato");


if (arma == "1") {
    console.log("Você MATOU o PROGRADRAGÃO.");
    console.log("Parabéns, você ganhou o jogo!");
    
} else {
    arma = ler ("Escolha errada, você tem mais uma chance tente novamente!");

    if (arma=="1") {
        console.log("Você MATOU o PROGRADRAGÃO.");
        console.log("Parabéns, você ganhou o jogo!"); 
    }
    else  
    console.log("ESCOLHA ERRADA \n GAME OVER");
}

