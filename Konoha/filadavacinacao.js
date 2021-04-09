// FIla da vacinação
// Ola, você deverá pedir como entrada o nome da pessoa e sua idade,
//  se a idade da pessoa for  menor de 18 anos, ela não poderá tomar
//   a vacina, por falta de teste, se a  pessoa tiver entre 18 e 59,
//    deverá ser perguntado se ela está grávida ou não se ela tiver 
//    gravida ela não poderá tomar a vacina também, pelo mesmo motivo 
//    dos menores de 18 anos. se a pessoa não tiver grávida, diga para 
//    ela que ele será um dos últimos a tomarem a vacina. E se caso  
//    for acima de 59 anos diga que a data está próxima verifique o
//     calendário da sua cidade.


const ler = require("prompt-sync")();


var nome = ler ("Olá, qual seu nome?");

    var idade = ler ("Prazer em te conhecer, " + nome +" qual o sua idade?");

    if (idade < 18){
     console.log ("Por falta de testes até o momento, a vacina não é recomendada para menores de 18 anos")

    } else if ( idade >= 18 && idade <=59) {
     var gestante = ler (nome + " você está gravida?");

            if ( gestante === "sim"){
                console.log("Por falta de testes até o momento, a vacina não é recomendada para gestantes!");
            }else {
                console.log("Você será o ultimo da fila de vacinação, aguarde sua vez.");
            }
        }
        else{
            console.log ("Você está no grupo prioritário a ser incluído ao fim da primeira fase de vacinação, verifique calendário da sua cidade.");
        }
            