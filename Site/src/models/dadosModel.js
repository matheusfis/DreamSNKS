var database = require("../database/config");

function puxarMaxAcertos(fkUsuario) {
    var instrucaoSql = `SELECT MAX(acertos) AS MaxPontos FROM tentativasQuiz WHERE fkUsuario = ${fkUsuario};
    `;
    console.log('Puxando o MaxPontos' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function puxarMaxTentativas(fkUsuario) {
    var instrucaoSql = `SELECT MAX(idTentativa) AS MaxTentativas FROM tentativasQuiz WHERE fkUsuario = ${fkUsuario};
    `;
    console.log('Puxando o MaxTentativas' + instrucaoSql);
    return database.executar(instrucaoSql);
}


function puxarTentativasAcertos(fkUsuario) {

    var instrucaoSql = `SELECT idTentativa AS Tentativas, acertos AS Pontos FROM tentativasQuiz WHERE fkUsuario = ${fkUsuario};
    `;
    console.log("Puxando tentativas e acertos" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    puxarMaxAcertos,
    puxarMaxTentativas,
    puxarTentativasAcertos
}
