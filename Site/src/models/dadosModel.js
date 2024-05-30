var database = require("../database/config");

function mediaAcertosUsuario(fkUsuario) {
    var instrucaoSql = `SELECT TRUNCATE(AVG(qtdAcertos), 0) * 20 AS mediaAcertos FROM resultadoQuiz WHERE fkUsuario = ${fkUsuario};`;
    console.log('Puxando a média de acertos do usuário' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mediaAcertosUsuarios(fkUsuario) {
    var instrucaoSql = `SELECT TRUNCATE(AVG(qtdAcertos), 0) * 20 AS mediaAcertosUsuarios FROM resultadoQuiz WHERE fkUsuario <> ${fkUsuario};`;
    console.log('Puxando a média de acertos dos outros usuários' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function maxPontuacaoUsuario(fkUsuario) {
    var instrucaoSql = `SELECT MAX(qtdAcertos) * 2 AS maxPontuacao FROM resultadoQuiz WHERE fkUsuario = ${fkUsuario};`;
    console.log('Puxando a maior pontuação do usuário' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function maxPontuacaoUsuarios(fkUsuario) {
    var instrucaoSql = `SELECT MAX(qtdAcertos) * 2 AS maxPontuacaoUsuarios FROM resultadoQuiz WHERE fkUsuario <> ${fkUsuario};`;
    console.log('Puxando a maior pontuação dos outros usuários' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function tentativasAcertosErros(fkUsuario) {
    var instrucaoSql = `SELECT qtdAcertos AS Acertos, qtdErros AS Erros FROM resultadoQuiz WHERE fkUsuario = ${fkUsuario};`;
    console.log("Puxando tentativas, acertos e erros" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function tentativasAcertosErrosUsuarios(fkUsuario) {
    var instrucaoSql = `SELECT qtdAcertos AS Acertos, qtdErros AS Erros FROM resultadoQuiz WHERE fkUsuario <> ${fkUsuario};`;
    console.log("Puxando tentativas, acertos e erros dos outros usuários" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    mediaAcertosUsuario,
    mediaAcertosUsuarios,
    maxPontuacaoUsuario,
    maxPontuacaoUsuarios,
    tentativasAcertosErros,
    tentativasAcertosErrosUsuarios
};