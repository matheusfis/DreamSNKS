var quizModel = require("../models/quizModel");

function registrarDados(req, res) {
  var acertos = req.body.acertosServer
  var fkUsuario = req.body.idUsuarioServer
  var fkQuiz = req.body.idQuizServer


  quizModel.puxarUlitmoID(fkUsuario)
    .then(
      function (resultado) {
        var idTentativa = resultado[0].idTentativa;
        
        if (idTentativa == undefined) {
          idTentativa = 1
        } else {
          idTentativa = resultado[0].idTentativa + 1;
        }
        return quizModel.registrar(idTentativa, fkUsuario, fkQuiz, acertos)
      })
    .then(
      function (resultado) {
        res.status(203).json(resultado);
      })
    .catch(
      function (erro) {
        console.log(erro);
        console.log("Houve um erro ao inserir dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

module.exports = {
  registrarDados
}