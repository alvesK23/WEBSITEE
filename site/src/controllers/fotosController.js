var fotomodal = require("../models/fotomodal");

var matricula;

function testar(req, res) {
    console.log("ENTRAMOS NO avisoController");
    res.send("ENTRAMOS NO AVISO CONTROLLER");
}

function inserindoft(req, res) {
    matricula = req.body.matricula;
}



function inserindoft(req, res) {
    matricula = req.body.matricula;
    var linkfoto = req.body.linkfoto;
    fotomodal.inserindoft(matricula,  linkfoto)
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


function pegandofotolink(req, res) {
    fotomodal.pegandofotolink(matricula)
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
    inserindoft,
    testar,
    pegandofotolink,
}