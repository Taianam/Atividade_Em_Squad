//Requisitos para rodar cyberpunk
const ler = require("prompt-sync")();
console.log(" ===== REQUISITOS PARA CYBERPUNK 2077 ===== ")
var ram = Number(ler("Qual é a sua memória ram?"));
var armazenamento = Number(ler("Quanto de espaço no seu armazenamento?"));
var directx = (ler("DirectX 12? [S] ou [N]"))
var placa = (ler("Placa de vídeo superior ou equivalente a Nvidia GeForce GTX 780 3GB ou AMD Radeon RX 470 [S] ou [N]"))

if (ram >= 8)console.log("\nMemória ram compátivel.")
else console.log("\nPouca memória, não é compátivel.");
if (ram >= 16)console.log("Obs, mémoria compátivel com 4k.")
if (armazenamento >= 70)console.log("Armazenamento suficiente.")
else console.log("Armazenamento insuficiente.");
if (placa == "S")console.log("Placa de vídeo: Ok")
else console.log("Placa de vídeo incompátivel");
if (directx == "S")console.log("DirectX correto!")
else console.log("DirectX inválido, favor baixar o 12.")
if (ram >=8 && armazenamento >= 70 && directx == "S")console.log("Apto para rodar cyberpunk 2077")
else console.log("Devido a problemas descritos, não é possível rodar Cyberpunk.")
