var usuariomaquinas = require("../models/usuariomaquinas");
var empresafuncionario = 0;


function idempresa(req) {
    empresafuncionario = req.body.empresa;
}

function testar(req, res) {
    console.log("ENTRAMOS NO avisoController");
    res.send("ENTRAMOS NO AVISO CONTROLLER");
}

function maquininha(req, res) {
    usuariomaquinas.maquininha(empresafuncionario)
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

function updateedit(req, res) {
    var setor = req.body.setor;
    var status = req.body.status;
    var hostname = req.body.hostname;
    usuariomaquinas.updateedit(setor, status,hostname)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

function registrarmaquina(req, res) {
    var setor = req.body.setor;
    var status = "Normal";
    var hostname = req.body.hostname;
    usuariomaquinas.registrarmaquina(setor, status,hostname, empresafuncionario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

module.exports = {
    idempresa,
    maquininha,
    testar,
    registrarmaquina,
    updateedit,
}