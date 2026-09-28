    let media
    let nome = prompt("Digite o nome do aluno: ");
    let nota1 = parseFloat(prompt ("Digite a primeira nota: "));
    let nota2 = parseFloat(prompt ("Digite a segunda nota: "));
    let nota3 = parseFloat(prompt ("Digite a terceira nota: "));
    let nota4 = parseFloat(prompt ("Digite a quarta nota: "));

    media = (nota1 + nota2 + nota3 + nota4) / 4;
    alert("media do aluno: " + media.toFixed(2));