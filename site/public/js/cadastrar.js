function limparFormulario() {
    document.getElementById("form_cadastro").reset();
}

function cadastrar() {
    
    var nome_user = input_nome.value;
    var username_user = input_username.value;
    var senha_user = input_senha.value;
    var matricula_user = input_matricula.value;
    var cargo_user = input_cargo.value;
    var codigo_empresa = input_codigo.value;



    //VALIDAÇÕES INICIO//
    if (nome_user.length == 0 || nome_user.trim() > -1) {
        window.alert(`empresa está em branco.`);

        return false;
    }
    if (username_user.length == 0 || username_user.trim() > -1) {
        window.alert(`senha está em branco.`);

        return false;
    }
    if (senha_user.length == 0 || senha_user.trim() > -1) {
        window.alert(`senha está em branco.`);

        return false;
    }
    if (matricula_user.length == 0 || matricula_user.trim() > -1) {
        window.alert(`senha está em branco.`);

        return false;
    }
    if (cargo_user.length == 0 || cargo_user.trim() > -1) {
        window.alert(`senha está em branco.`);

        return false;
    }
    //FIMM VALIDAÇÕES//


    // fim validações //
    aguardar();
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome_user,
            username: username_user,
            senha: senha_user,
            matricula: matricula_user,
            cargo: cargo_user,
            codigo: codigo_empresa
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Cadastro realizado com sucesso!");
            window.location = "login.html";
            limparFormulario();
            finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });
}