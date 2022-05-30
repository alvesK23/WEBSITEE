function limparFormulario() {
    document.getElementById("form_login").reset();
}

function entrar() {
    
    
    aguardar();

    var usuarioVar = usuario_input.value;
    var senhaVar = senha_input.value;

    // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
    if (usuarioVar == "" || senhaVar == "") {
        window.alert("Preencha todos os campos para prosseguir!");
        finalizarAguardar();
        return false;
    }



    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario: usuarioVar,
            senha: senhaVar,
        })
    }).then(function(resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

 
                sessionStorage.NOME_COMPLETO = json.nome_completo;
                sessionStorage.MATRICULA_USUARIO = json.matricula;
                sessionStorage.FK_EMPRESA = json.fk_empresa;

                sessionStorage.FOTOPERFIL_USER = json.fotoperfil;

         

                setTimeout(function() {
                    window.location = "./dashboard/inicio.html";
                }, 3000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function(erro) {
        console.log(erro);
    })

    return false;
}