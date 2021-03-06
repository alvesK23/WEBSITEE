// sessão
function validarSessao() {
    var usuario = sessionStorage.USUARIO_USUARIO;
    var nome = sessionStorage.NOME_COMPLETO;

  

        //window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;
    
}

function limparSessao() {
    sessionStorage.clear();
    setTimeout(function () {
        window.location = "../login.html";
    }, 800);
}


// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}