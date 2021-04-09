//Leilaflix
//Este é um canal de stream de filmes de Horror e Drama.
//Apresente uma lista final de filmes e atrelar a relevância dela de acordo com as escolhas do usuário durante a interação com a lista de filmes exibidos no canal (exemplo da Netflix, Spotify, Youtube)
//Dica: categorize a relevância dos filmes, afunilando a preferência do usuário a partir da seleção dos filmes que contém tópicos do interesse do usuário.
//(Ex: "Titanic (95%): este filme venceu diversos prêmios Oscar".)

const ler = require("prompt-sync")();

console.log("======= LEILAFLIX =======");
var genero = Number(ler("Escolha o genêro do filme: [1] Terror [2] Drama: "));

if (genero == 1){
let ult = Number(ler("Entre os filmes de terror [1] Invocação do Mal e [2] It, qual você prefere?: "));
switch(ult){
    case 1: mensagem = "Recomendação: (76% gostaram desse filme) Annabelle: Este filme pode atender sua sede de terror!"; break
        
    case 2: mensagem = "Recomendação: (85% gostaram desse filme) It 2: Este filme pode atender sua sede de terror!"; break
}
console.log(mensagem);}

if (genero == 2){
let ult2 = Number(ler("Entre os filmes de drama [1] O Homem Duplicado e [2] Dúvida, qual você prefere?: "));
switch(ult2){
    case 1: mensagem = "Recomendação: (88% gostaram desse filme) Sobre Meninos e Lobos: Este filme pode atender sua sede de drama!"; break
        
    case 2: mensagem = "Recomendação: (89% gostaram desse filme) Fragmentado: Este filme pode atender sua sede de drama!"; break
}
console.log(mensagem);}
