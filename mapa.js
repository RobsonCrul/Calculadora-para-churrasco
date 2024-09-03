//Entrada de dados do form e saída de dados no <li>
let frm = document.getElementById('form');
const resp1 = document.getElementById('outResp1');
const resp2 = document.getElementById('outResp2');
const resp3 = document.getElementById('outResp3');
const resp4 = document.getElementById('outResp4');
const resp5 = document.getElementById('outResp5');

    frm.addEventListener("submit", (e) =>{
        e.preventDefault() //Evita envio do form
        //Entrada de dados
        let qtdHomens = Number(frm.valorHomens.value);
        let qtdMulheres = Number(frm.valorMulheres.value);
        let qtdCriancas = Number(frm.valorCriancas.value);

        //processamento de dados de cada categoria
        const carneBovina = ((qtdHomens * 500) + (qtdMulheres * 300) + (qtdCriancas * 200)) / 1000;
        const carneFrango = ((qtdHomens * 200) + (qtdMulheres * 200) + (qtdCriancas * 100)) / 1000;
        const linguica = ((qtdHomens * 200) + (qtdMulheres * 200) + (qtdCriancas * 200)) / 1000;
        const refrigerante = ((qtdHomens * 300) + (qtdMulheres * 400) + (qtdCriancas * 200)) / 1000;
        const cerveja = (((qtdHomens * 800) + (qtdMulheres * 500) + (qtdCriancas * 0)) / 1000);

        //Saída de processamentos nas tags <li>
        resp1.innerText = `${carneBovina.toFixed(1)} Kg de carne bovina`
        resp2.innerText = `${carneFrango.toFixed(1)} Kg de carne de frango`
        resp3.innerText = `${linguica.toFixed(1)} Kg de linguiça`
        resp4.innerText = `${refrigerante.toFixed(1)} l de refrigerante`
        resp5.innerText = `${cerveja.toFixed(1)} l de cerveja`
    })
