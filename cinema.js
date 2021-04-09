const ler = require("prompt-sync")();

var nome1 = "";
var nome2 = "";
var nome3 = "";
var nome4 = "";
var nome5 = "";
var contador = 0;
var assentoComDesconto1 = "";
var assentoComDesconto2 = "";

for (let index = 0; index < 5; index++) {
    
    var nome = ler("Digite o nome  para colocar no ingresso?");
    var condicao = false;

    if(validarNome()){
        condicao = true;
    }

    while (condicao) {
        nome = ler("Digite o nome  para colocar no ingresso?");
        if(validarNome()){
            condicao = true;
        }else{
            condicao = false;
        }
    }

    if(contador < 2){
        var desconto = ler("Digite o nome  para colocar no ingresso?");
            if( desconto == "sim"){
                contador++;
                if(assentoComDesconto1 == ""){
                    assentoComDesconto1 = nome;
                }else{
                    assentoComDesconto2 = nome;
                }
            }
    }

    if( nome1 == ""){
        nome1 = nome;
    }else if(nome2 == ""){
        nome2 = nome;
    }else if(nome3 == ""){
        nome3 = nome;
    }else if(nome4 == ""){
        nome4 = nome;
    }else if(nome5 == ""){
        nome5 = nome;
    }
}

function validarNome(){
    if(nome1 === nome || nome2 === nome || nome3 === nome || nome4 === nome || nome5 === nome){
        console.log("Esse nome já existe");
        return true;
    }else{
        return false;
    }
}

console.log("Igresso vendido:", nome1, nome2, nome3,nome4,nome5);
console.log("Ingresso meia entrada:", assentoComDesconto1, assentoComDesconto2);