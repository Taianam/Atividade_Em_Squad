/*1. Um cinema faz reservas de 5 ingressos para uma sala, sendo 2 para meia 
entrada, para a reserva, basta informar o nome e se é meia ou não, é 
permitido apenas uma reserva por nome.
2. Após os 5 reservados, o cliente pode retirar se ingresso informando o seu 
nome, o ingresso irá informar seu número, nome de quem reservou e se é meia
 ou não.
 tipo ingresso ok
 nome pessoa ok
 
 */
 

 const prompt = require ("prompt-sync")();
 //3 INTEIRAS E 2 MEIAS
 var inteira = 0;
 var meia = 0;
 // const LIMITE =5;
 var cliente = 0;
 var nomes = [];
 var tipoIngresso = [];
 
 console.log("== CINEMA TCHOOOOOOP ==")
 
 while(nomes.length < 5){
   var nome = prompt("Digite seu nome por favor")
   var nomeRepetido = false;
   for (j = 0; j <= nomes.length; j++){
       if(nomes[j] == nome){
           nomeRepetido == true;
           break
       }
      if(nomeRepetido){
          console.log("Essse nome já consta em nossa base");
          continue;
      }
   }
 
     nomes.push(nome);
 
   var pagante = prompt("Senhor " + nome + " você deseja um ingresso inteiro ou meia? obs. existem 2 ingressos meia e 3 inteiros")
 
   if(pagante == "meia"){
 
       if(meia == 2){
         console.log("Senhor cliente os ingressos meios acabaram seu ingresso será inteiro")
         pagante = "inteira"
     }else {
     meia++
     }
     }
     tipoIngresso.push(pagante);
 
 }

 for(i = 0; i < 5; i++){
 console.log("\nNome: " + nomes[i] + "\nNumero ingresso: "+ i + "\nTipo ingresso: " + tipoIngresso[i]);
 }