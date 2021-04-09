/**
    hamburgueria
  1. quantidade de pedidos
  2. Monte seu hamburguer
  3. entrega (entregar ou buscar na loja)
  4. pergunta se deseja molho
  5. refrigerante
  6. valor total  
 deseja pão? -- sim não
    tipo pão -- normal, artesanal
 carne, frango, peixe, tofu
 deseja alface
 deseja bacon
 deseja queijo? 
    cheddar, mozarela, catupiry
deseja molho?
  cheddar, barbecue, ketchup, maionese, molho especial
deseja bebida?
  suco(uva e laranja), coca, fanta, guarana, água
valor TOTAL seu pedido está correto?
  1- sim
  2- nao(retornar ao inicio da hamburgueria)
tipo- "Como estamos em uma pandemia não é possivel comer na loja
       deseja 1- pegar na loja 2-entrega(adicional de 2 reais)"
       valor total "OBRIGADA POR COMPRAR CONOSCo"
*/

const prompt = require("prompt-sync")();

console.log("===== DEV_BURGUES =====\n")

console.log("MONTE SEU HAMBURGUER DO JEITO QUE QUISER :p\n")

  var total = 0.00;
  var mensagem = "";

var pao = (prompt("Deseja seu hamburguer com pão? 1-pão comum (R$3,00) // 2-pão artesanal (R$5,00)// 3- sem pão (R$1,00)"));
var valorPao;
var mensagemPao;
switch(pao){
  case "1": valorPao = 3.00; mensagemPao = "Pão comum";break;
  case "2": valorPao = 5.00; mensagemPao = "Pão artesanal";break;
  case "3": valorPao = 1.00; mensagemPao = "Sem pão";break;
}
  total += valorPao;
  mensagem += mensagemPao

var carne = (prompt("Qual carne você deseja? 1- carne (R$7,00) // 2- frango (R$5,00)//3- tofu (R$8,00)"));
var valorCarne;
var mensagemCarne;
switch(carne){
  case "1": 
    valorCarne = 7.00;
    mensagemCarne ="Carne";break;
  case "2": 
    valorCarne = 5.00; 
    mensagemCarne ="Frango";break;
  case "3": 
    valorCarne = 8.00; 
    mensagemCarne ="Tofu";break;
}
  total += valorCarne;
  mensagem += mensagemCarne;

var alface = prompt("Deseja salada?(R$2,00)");
var valorAlface;
var mensagemAlface;

if(alface =="sim"){
  valorAlface = 2.00;
  mensagemAlface ="Com salada"
}else {
  valorAlface = 0.00
  mensagemAlface = "Sem salada"}
  
  total += valorAlface;
  mensagem += mensagemAlface;
  
var bacon = prompt("Deseja bacon?(R$3,00)");
var valorBacon;
var mensagemBacon
if(bacon == "sim"){
  valorBacon = 3.00;
  // var baconExtra = prompt("Estamos com uma promoção de: o dobro de bacon por R$1,00 a mais, você deseja?")
  //   if(baconExtra == "sim") {
  //     valorBacon += 1.00;
      mensagemBacon = "Com bacon";
    }
    else {valorBacon = 0.00
      mensagemBacon = "Sem bacon";}

  total += valorBacon;
  mensagem += mensagemBacon;
  
var quiejo= prompt(`Queijo? 1-sem queijo // 2- cheddar (R$2,00)// 3- mozarela (R$1,50)// 4- catupry(R$1,50)`)
var valorQueijo;
var mensagemQueijo;
switch(quiejo){
  case "1": 
    valorQueijo = 0.00; 
    mensagemQueijo = "Sem queijo";break;
  case "2": 
    valorQueijo = 2.00; 
    mensagemQueijo = "Cheddar";break;
  case "3": 
    valorQueijo = 1.50;
    mensagemQueijo = "Mozarela";break;
  case "4": 
    valorQueijo = 1.50;
    mensagemQueijo = "Sem queijo";break;
}
  total += valorQueijo;
  mensagem += mensagemQueijo;
  
var molho = prompt(`Escolha 1 tipo de molho:1- sem molho//2- barbecue (R$1,50)//3- ketchup (R$0,90)//4- molho especial (R$3,00)`)
var valorMolho;
var mensagemMolho;
switch(molho){
  case "1": 
    valorMolho = 0.00; 
    mensagemMolho = "Sem molho";break;
  case "2": 
    valorMolho = 2.00; 
    mensagemMolho = "Barbecue";break;
  case "3": 
    valorMolho = 1.50; 
    mensagemMolho = "Cheddar";break;
  case "4": 
    valorMolho = 0.90; 
    mensagemMolho = "Molho especial";break;
}
  total += valorMolho;
  mensagem += mensagemMolho;
  
var bebida = prompt(`Deseja bebida? 1-não // 2- suco(laranja) (R$3,00)// 3- coca-cola (R$7,00)// 4- guaraná (R$5,00)`)
var valorBebida;
var mensagemBebida;

switch(bebida){
  case "1": 
    valorBebida = 0.00; 
    mensagemBebida = "Sem bebida";break;
  case "2": 
    valorBebida = 3.00; 
    mensagemBebida = "Suco";break;
  case "3": 
    valorBebida = 7.00; 
    mensagemBebida = "Coca-cola";break;
  case "4": 
    valorBebida = 5.00;
    mensagemBebida = "Guaraná";break;
}
 total += valorBebida;
 mensagem += mensagemBebida;
 
console.log("Devido ao vírus covid-19 não podemos permitir o consumo em loja")
var entrega = prompt("Deseja:  1-pegar no estabelecimento  ou  2- quer que entrguemos?")
var valorEntega; 
var mensagemEntrega;

if(entrega == "2"){
  valorEntrega = 2.00
  mensagemEntrega = "Delivery"
  } else {
    valorEntrega = 0.00
    mensagemEntrega = "Pegar na loja";
  }
  total += valorEntrega
  mensagem += mensagemEntrega;
  
  console.log("O valor total da sua compra é R$", total.toFixed(2));
  console.log("Seu pedido: \n", mensagem)
//PROCESSAMENTO
//pao resposta 1 / 2 e 3







//SAÍDA