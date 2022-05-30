var database = require("../database/config")

function listar(fkEmpresa) {
    console.log("ACESSEI O REGISTRO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", fkEmpresa);
    var instrucao = `
    SELECT * FROM Alerta_problema WHERE fk_Empresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarPeloId(idDeletar) {
    console.log("ACESSEI O REGISTRO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", idDeletar);
    var instrucao = `
    DELETE FROM Alerta_problema WHERE id = ${idDeletar};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}





module.exports = {
    listar, 
    deletarPeloId
};