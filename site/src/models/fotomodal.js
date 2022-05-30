var database = require("../database/config")

function inserindoft(matricula, linkfoto) {
    var instrucao = `
    update usuario set fotoperfil ='${linkfoto}' where matricula = '${matricula}';`;

    console.log("Executando a instrução SQL: \n" + instrucao);


    return database.executar(instrucao);
}

function pegandofotolink(matricula) {
    var instrucao = `
    select fotoperfil  as  FTLINK from usuario where matricula = '${matricula}';`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    inserindoft,
    pegandofotolink,
};