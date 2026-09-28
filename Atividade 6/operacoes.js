let n1 = parseFloat(prompt("Digite o primeiro número:"));
let n2 = parseFloat(prompt("Digite o segundo número:"));

let soma = n1 + n2;
let subtracao = n1 - n2;
let produto = n1 * n2;


var divisao, resto;
if (n2 === 0) {
    divisao = "indefinida (divisão por zero)";
    resto = "indefinido (divisão por zero)";
} else {
    divisao = (n1 / n2).toFixed(2);
    resto = n1 % n2;
}

alert(
    "Números: " + n1 + " e " + n2 + "\n\n" +
    "Soma: " + n1 + " + " + n2 + " = " + soma + "\n" +
    "Subtração: " + n1 + " - " + n2 + " = " + subtracao + "\n" +
    "Produto: " + n1 + " x " + n2 + " = " + produto + "\n" +
    "Divisão: " + n1 + " / " + n2 + " = " + divisao + "\n" +
    "Resto: " + n1 + " % " + n2 + " = " + resto
);