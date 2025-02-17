// // Numeros randomicos:--------------------------------------
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

// Senha Randômica:--------------------------------------

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

// Senha específica:--------------------------------------

function gerarEsp() {
    let charsOiLetra = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ"
    let tamanhoSenhaLetra = 14

    let charsOiNum = "0123456789"
    let tamanhoSenhaNum = 2

    let senhaLetra = ""
    let senhaNum = ""
    
    for (let i = 0; i < tamanhoSenhaLetra; i++) {
        let aleatorio = Math.floor(Math.random() * charsOiLetra.length)
        senhaLetra += charsOiLetra.substring(aleatorio, aleatorio + 1)
    }
    for (let i = 0; i < tamanhoSenhaNum; i++) {
        let aleatorioNum = Math.floor(Math.random() * charsOiNum.length)
        senhaNum += charsOiNum.substring(aleatorioNum, aleatorioNum + 1)
    }
    resOi.innerHTML = senhaLetra + senhaNum
}

