var database = require("../database/config");

function puxarUltimoID(fkUsuario) {
    var instrucaoSql = `
        SELECT MAX(idResultadoQuiz) AS idResultadoQuiz FROM resultadoQuiz WHERE fkUsuario = ${fkUsuario};
    `;
    console.log('Puxando o último idResultadoQuiz: ' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrar(idResultadoQuiz, fkUsuario, fkQuiz, qtdAcertos, qtdErros) {
    var instrucaoSql = `
        INSERT INTO resultadoQuiz (idResultadoQuiz, fkUsuario, fkQuiz, qtdAcertos, qtdErros)
        VALUES (${idResultadoQuiz}, ${fkUsuario}, ${fkQuiz}, ${qtdAcertos}, ${qtdErros});
    `;
    console.log('Registrando dados da tentativa do quiz: ' + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar,
    puxarUltimoID
};