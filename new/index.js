let now = new Date();

const nomesMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

let data = {
    dia: now.getDate(),
    mes: nomesMeses[now.getMonth()],
    ano: now.getFullYear(),
    hora: now.getHours(),
    min: now.getMinutes(),
    seg: now.getSeconds(),
}

function dia(data) {
    return `Dia: ${data.dia}, Mês: ${data.mes}, Ano: ${data.ano}`;
}

console.log(dia(data));