function maiorDeTres(num1, num2, num3) {
    let maior = num1;

    if (num2 > maior) {
        maior = num2;
    }
    if (num3 > maior) {
        maior = num3;
    }

    return maior;
}

function ordemCrescente(num1, num2, num3) {
    let numeros = [num1, num2, num3];

    numeros.sort(function (a, b) { return a - b; });

    return numeros;
}

function verificarPalindromo(texto) {
    let maiusculas = texto.toUpperCase();
    let semEspacos = "";

    // monta uma nova string sem os espaços em branco
    for (let i = 0; i < maiusculas.length; i++) {
        if (maiusculas.charAt(i) !== " ") {
            semEspacos += maiusculas.charAt(i);
        }
    }

    for (let i = 0; i < semEspacos.length / 2; i++) {
        if (semEspacos.charAt(i) !== semEspacos.charAt(semEspacos.length - 1 - i)) {
            return "não é palíndromo";
        }
    }

    return "é palíndromo";
}

function verificarSubconjunto(palavra1, palavra2) {
    if (palavra1 === undefined || palavra2 === undefined || palavra1 === "" || palavra2 === "") {
        return "erro";
    }

    if (palavra1.lastIndexOf(palavra2) !== -1) {
        return "é um subconjunto";
    }

    return "não é um subconjunto";
}

function obterDiaSemana(dataTexto) {
    let dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
        "Quinta-feira", "Sexta-feira", "Sábado"];

    let dia = parseInt(dataTexto.substring(0, 2));
    let mes = parseInt(dataTexto.substring(3, 5));
    let ano = parseInt(dataTexto.substring(6));

    // no objeto Date os meses vão de 0 (janeiro) a 11 (dezembro)
    let data = new Date(ano, mes - 1, dia);

    if (isNaN(data.getTime()) || data.getDate() !== dia || data.getMonth() !== mes - 1) {
        return "data inválida";
    }

    return dias[data.getDay()];
}


function testarMaior() {
    let num1 = parseFloat(document.getElementById("maiorNum1").value);
    let num2 = parseFloat(document.getElementById("maiorNum2").value);
    let num3 = parseFloat(document.getElementById("maiorNum3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("resultadoMaior").innerHTML = "Informe os três números";
    } else {
        document.getElementById("resultadoMaior").innerHTML = "Maior: " + maiorDeTres(num1, num2, num3);
    }
}

function testarOrdem() {
    let num1 = parseFloat(document.getElementById("ordemNum1").value);
    let num2 = parseFloat(document.getElementById("ordemNum2").value);
    let num3 = parseFloat(document.getElementById("ordemNum3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("resultadoOrdem").innerHTML = "Informe os três números";
    } else {
        document.getElementById("resultadoOrdem").innerHTML = "Ordem crescente: " + ordemCrescente(num1, num2, num3);
    }
}

function testarPalindromo() {
    let texto = document.getElementById("textoPalindromo").value;
    document.getElementById("resultadoPalindromo").innerHTML = verificarPalindromo(texto);
}

function testarSubconjunto() {
    let palavra1 = document.getElementById("palavra1").value;
    let palavra2 = document.getElementById("palavra2").value;
    document.getElementById("resultadoSubconjunto").innerHTML = verificarSubconjunto(palavra1, palavra2);
}

function testarDiaSemana() {
    let data = document.getElementById("data").value;
    document.getElementById("resultadoData").innerHTML = obterDiaSemana(data);
}
