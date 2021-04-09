//1- mostre 3 destinos para o cliente
//2- deixe o cliente escolher um dos lugares
//3- apresente o (ou os) pacotes para a escolha do cliente
//4- depois que ele escolher // boa viagem (se quiser incremente mais como dito acima)

const ler = require ("prompt-sync")();
var total = 0;
   console.log ("SEJA BEM VIDO A NOSSA PROMOÇÃO,\n AGORA MOSTRAREMOS OS LUGARES DISPONIVÉS: \n");

   var nome = ler("Qual o nome do Sr/Sra?")

   console.log ( nome, "SEJA BEM VIDO A NOSSA PROMOÇÃO,\n AGORA MOSTRAREMOS OS LUGARES DISPONIVÉS POR $300/cada:\n");

var destinos = "RIO DE JANEIRO, AMSTERDAM, CANADÁ";

var pacote = ler("Qual dessas opções você deseja adquirir? " + destinos);
    var valorPacote = 300.0
console.log ("Ok, você escolheu o destino", pacote ,"vamos lá!");

var comida = ler("VOCÊ DESEJA ADICIONAR POR $50/DIARIA COMIDA LIBERADA. SIM OU NAO: ");
  if (comida == "SIM"){
      var valorComida = 50.0;
       console.log ("ADICIONAMOS ESSA VANTAGEM AO SEU PACOTE *-*");
   }else if (comida == "NAO"){
       console.log ("OK, PRÓXIMA OPÇÃO");
   }

   var guia =  ler("DESEJARIA POR $10/DIARIA UM GUIA ESPECIALIZADO EM TURISMO? SIM OU NAO: ");
     if (guia == "SIM"){
         var valorGuia = 10.0;
         console.log ("VOCÊ ADQUIRIU O GUIA *-*");
     }else if(guia == "NAO");{
         console.log ("OK, PRÓXIMA OPÇÃO");
     }
     var diaria = ler ("Quantos dias você gostaria de ficar em seu destino? ");
     
     total = (valorPacote + valorComida + valorGuia) * diaria;

var pagamento = ler("Qual será sua forma de pagamento? DINHEIRO OU CARTAO: ");
   if(pagamento == "DINHEIRO"){
   console.log("PAGAMENTO EM DINHEIRO");
  }else if (pagamento == "CARTAO"){
  
     var opcao= ler("PAGAMENTO EM CARTÃO, PODE SER PARCELADO EM 5x, deseja parcelar: ");
 
  if (opcao == "SIM"){
      var quant = ler("EM QUANTAS VEZES?");
      var valorParcelado = total / quant;
      console.log ("\n" + nome, "SEU PACOTE FOI DIVIDIDO " + quant + "x O VALOR TOTAL FOI R$ " + valorParcelado.toFixed(2));
  }else if (opcao == "NAO"){
      console.log ("OK, VAMOS ENVIAR SEU RECIBO", nome);
  }
  }
   console.log ("BOA VIAGEM", nome);