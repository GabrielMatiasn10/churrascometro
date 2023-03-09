// carne - 400 gr por pessoa + 6 horas - 650
// cerveja - 1200 ml por pessoa = 6 horas - 2000 ml
//refrigerante/agua - 1000 ml por pessoa + 6 horas 1500 ml

//crianças vale, por 0,5


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let Resultado = document.getElementById("Resultado");

function Calcular() {
  Resultado.innerHTML = '';
  const adultos = parseInt(inputAdultos.value);
  const criancas = parseInt(inputCriancas.value);
  const duracao = parseInt(inputDuracao.value);

  if (isNaN(adultos) || isNaN(criancas) || isNaN(duracao)) {
    Resultado.innerHTML = "<p>Preencha todos os campos!</p>";
    return;
    }

  const carnePorPessoa = carnePP(duracao);
  const cervejaPorPessoa = cervejaPP(duracao);
  const bebidasPorPessoa = bebidasPP(duracao);

  const quantidadeTotalCarne =
    carnePorPessoa * adultos + (carnePorPessoa / 2) * criancas;
  const quantidadeTotalCerveja = cervejaPorPessoa * adultos;
  const quantidadeTotalBebidas =
    bebidasPorPessoa * adultos + (bebidasPorPessoa / 2) * criancas;

  Resultado.innerHTML += `<p>${quantidadeTotalCarne / 1000} Kg de Carne</p>`;
  Resultado.innerHTML += `<p>${quantidadeTotalCerveja / 1000} L de Sucos</p>`;
  Resultado.innerHTML += `<p>${quantidadeTotalBebidas / 1000} L de Guaraná</p>`;
  
}

function carnePP(duração) {
  if (duração >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPP(duração) {
  if (duração >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPP(duração) {
  if (duração >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
