document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("buttonCalculate").addEventListener("click", function () {
        
        let peso = parseFloat(document.getElementById("peso").value);
        let altura = parseFloat(document.getElementById("altura").value);
        let resultado = document.getElementById("containerResult");

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            resultado.innerHTML = "<p style='color: red;'>Por favor, insira valores válidos!</p>";
            return;
        }

        let imc = peso / (altura ** 2);
        let classificacao = "";
        let obesidade = "";
        let cor = "";

        if (imc < 18.5) {
            classificacao = "Magreza";
            obesidade = "Grau 0";
            cor = "rgb(136, 255, 0)";
        } else if (imc >= 18.5 && imc <= 24.9) {
            classificacao = "Normal";
            obesidade = "Grau 0";
            cor = "rgb(255, 174, 0)";
        } else if (imc >= 25.0 && imc <= 29.9) {
            classificacao = "Sobrepeso";
            obesidade = "Grau 1";
            cor = "rgb(255, 115, 0)";
        } else if (imc >= 30.0 && imc <= 39.9) {
            classificacao = "Obesidade";
            obesidade = "Grau 2";
            cor = "rgb(255, 30, 0)";
        } else {
            classificacao = "Obesidade Grave";
            obesidade = "Grau 3";
            cor = "rgb(255, 0, 0)";
        }

        resultado.innerHTML = `
            <p class="imcResult" >Seu IMC é <strong style="color: ${cor};">${imc.toFixed(2)}</strong></p>
            <p class="imcResult" >Classificação: <strong style="color: ${cor};">${classificacao}</strong></p>
            <p class="imcResult" >Grau de Obesidade: <strong style="color: ${cor};">${obesidade}</strong></p>
        `;
    });
});
