function validarNome() {
    let nome = document.getElementById('nome').value

    if(nome != '') {
        return true
    } else {
        return false
    }
}

function validarAssunto() {
    let assunto = document.getElementById('assunto').value

    if(assunto == "") {
        return false
    } else {
        return true
    }
}

function validarTudo() {
    if(validarNome() && validarAssunto()) {
        alert(`Dados enviado com sucesso`)
        return true
    } else {
        alert('ERRO AO ENVIAR!!!')
        return false
    }
}
