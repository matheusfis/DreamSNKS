var database = require("../database/config")

function puxarUlitmoID(fkUsuario) {
    var instrucaoSql = `
        SELECT MAX(idTentativa) AS idTentativa FROM tentativasQuiz WHERE fkUsuario = ${fkUsuario};
    `;
    console.log('Puxando o ultimo idTentativa' + instrucaoSql)
    return database.executar(instrucaoSql);
} 

function registrar(idTentativa, fkUsuario, fkQuiz, acertos) {
    var instrucaoSql = `
        INSERT INTO tentativasQuiz (idTentativa, fkUsuario, fkQuiz, acertos) VALUES ('${idTentativa}', '${fkUsuario}', '${fkQuiz}', '${acertos}');
    `;
    console.log('Registrando dados da tentativa do quiz' + instrucaoSql)
    return database.executar(instrucaoSql);
}


module.exports = {
    registrar,
    puxarUlitmoID
};
