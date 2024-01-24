let title = document.querySelector("h1");
title.innerHTML = "Hora do Desafio";

function consoleButton() {
    console.log("O botão console foi apertado.");
}

function alertButton() {
    alert("Eu amo JS!");
}

function promptButton() {
    let city = prompt("Digite o nome de uma cidade no Brasil: ");
    alert("Estive em " + city + " e lembrei de você.")
}

function somaButton() {
    let numA = prompt("Digite um número: ");
    let numB = prompt("Digite outro número: ");
    alert("A soma do número " + numA + " e do número " + numB + " é igual a " + (Number(numA) + Number(numB)));
}