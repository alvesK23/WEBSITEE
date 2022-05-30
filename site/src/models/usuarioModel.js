var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function entrar(usuario, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", usuario, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE username = '${usuario}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(matricula, nome, username, senha, cargo, codigo , foto) {
    var instrucao = `INSERT INTO usuario (matricula, nome_completo, cargo, username, fotoperfil, senha, fk_empresa) 
        VALUES ('${matricula}', '${nome}', '${cargo}', '${username}', '${foto}', '${senha}',(select id from empresa where codigo = '${codigo}'));`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    entrar,
    cadastrar,
    listar,
};