// parte 1
let resultado = document.getElementById('res')

function gerar4() {
    let minm = 1000
    let maxm = 9999
    resultado.innerHTML = Math.floor(Math.random() * (maxm - minm +1)) + minm;
}
function gerar6() {
    let minm = 100000
    let maxm = 999999
    resultado.innerHTML = Math.floor(Math.random() * (maxm - minm +1)) + minm;
}
function gerar8() {
    let minm = 10000000
    let maxm = 99999999
    resultado.innerHTML = Math.floor(Math.random() * (maxm - minm +1)) + minm;
}

// parte 2

let resultadoSenha = document.getElementById('resSenha')

function gerar6char() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]"
    let tamanhoSenha = 6
    let senha = ""

    for (let i = 0; i < tamanhoSenha; i++) {
        let aleatorio = Math.floor(Math.random() * chars.length)
        senha += chars.substring(aleatorio, aleatorio + 1)
    }
    resultadoSenha.innerHTML = senha
}

function gerar8char() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]"
    let tamanhoSenha = 8
    let senha = ""

    for (let i = 0; i < tamanhoSenha; i++) {
        let aleatorio = Math.floor(Math.random() * chars.length)
        senha += chars.substring(aleatorio, aleatorio + 1)
    }
    resultadoSenha.innerHTML = senha
}

function gerar10char() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]"
    let tamanhoSenha = 10
    let senha = ""

    for (let i = 0; i < tamanhoSenha; i++) {
        let aleatorio = Math.floor(Math.random() * chars.length)
        senha += chars.substring(aleatorio, aleatorio + 1)
    }
    resultadoSenha.innerHTML = senha
}