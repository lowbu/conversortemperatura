function compararNumeros() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
        return;
    }

    var numeros = [num1, num2, num3];

    var maior = Math.max(...numeros);
    var menor = Math.min(...numeros);

    var iguais = [];
    if (num1 === num2 && num2 === num3) {
        iguais.push(`Todos são iguais (Posições 1, 2 e 3)`);
    } else {
        if (num1 === num2) iguais.push(`${num1} e ${num2} (Posições 1 e 2)`);
        if (num2 === num3) iguais.push(`${num2} e ${num3} (Posições 2 e 3)`);
        if (num1 === num3) iguais.push(`${num1} e ${num3} (Posições 1 e 3)`);
    }

    var resultadoString = `
        Maior número: ${maior} <br>
        Menor número: ${menor} <br>
        ${iguais.length > 0 ? `Números iguais: ${iguais.join(', ')}` : 'Não há números iguais.'}
    `;

    document.getElementById("resultado").innerHTML = resultadoString;
}