document.addEventListener("DOMContentLoaded", function () {
    const botaoCalcular = document.getElementById("buttonCalculate");
    const alturaInput = document.getElementById("altura");
    const pesoInput = document.getElementById("peso");

    botaoCalcular.addEventListener("click", calcularIMC);

    document.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            botaoCalcular.click();
        }
    });

    alturaInput.addEventListener("input", function () {
        let valor = alturaInput.value.replace(/[^0-9,]/g, "");
        valor = valor.replace(",", ".");

        if (valor.length >= 3 && !valor.includes(".")) {
            valor = valor.slice(0, 1) + "." + valor.slice(1);
        }

        alturaInput.value = valor;
    });

    pesoInput.addEventListener("input", function () {
        let valor = pesoInput.value.replace(/[^0-9.]/g, "");

        let partes = valor.split(".");
        if (partes.length > 2) {
            valor = partes[0] + "." + partes.slice(1).join("");
        }

        pesoInput.value = valor;
    });

    function calcularIMC() {
        let peso = parseFloat(pesoInput.value);
        let altura = parseFloat(alturaInput.value);
        let resultado = document.getElementById("containerResult");

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            resultado.innerHTML = "<p id='textInvalidValues' class='fade-effect'>Por favor, insira valores válidos!</p>";

            let mensagemErro = document.getElementById("textInvalidValues");

            setTimeout(() => {
                mensagemErro.style.opacity = "0";
            }, 1500);

            setTimeout(() => {
                resultado.innerHTML = "";
            }, 2000);

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
            <p class="imcResult">Seu IMC é <strong style="color: ${cor};">${imc.toFixed(2)}</strong></p>
            <p class="imcResult">Classificação: <strong style="color: ${cor};">${classificacao}</strong></p>
            <p class="imcResult">Grau de Obesidade: <strong style="color: ${cor};">${obesidade}</strong></p>
        `;
    }
});
