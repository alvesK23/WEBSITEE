var registroModel = require("../models/registroModel");

var fkEmpresa;
var idDeletar;


function testar(req, res) {
    console.log("ENTRAMOS NA registroController");
    res.json("ESTAMOS FUNCIONANDO!");
}


function fk_empresa(req, res) {
    fkEmpresa = req.body.fkEmpresa;
    res.json("ESTAMOS FUNCIONANDO!");
}

function deletarPeloId(req, res) {
    idDeletar = req.body.idDeletar;
    registroModel.deletarPeloId(idDeletar)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}


function listar(req, res) {
    registroModel.listar(fkEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}




module.exports = {
    listar,
    fk_empresa,
    testar,
    deletarPeloId
}