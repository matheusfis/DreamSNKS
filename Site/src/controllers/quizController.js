var quizModel = require("../models/quizModel");

function registrarDados(req, res) {
    var fkUsuario = req.body.idUsuarioServer;
    var qtdAcertos = req.body.qtdAcertosServer;
    var qtdErros = req.body.qtdErrosServer;
    var fkQuiz = req.body.idQuizServer;

    quizModel.puxarUltimoID(fkUsuario)
        .then(function (resultado) {
            var idResultadoQuiz = resultado[0].idResultadoQuiz;

            if (idResultadoQuiz == undefined) {
                idResultadoQuiz = 1;
            } else {
                idResultadoQuiz ++
            }

            return quizModel.registrar(idResultadoQuiz, fkUsuario, fkQuiz, qtdAcertos, qtdErros);
        })
        .then(function (resultado) {
            res.status(203).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao inserir dados: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    registrarDados
};
