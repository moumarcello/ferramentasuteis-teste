// Senha específica sequencial:--------------------------------------

function gerarEsp2() {
    let charsConsoantes = "bcdfghjklmnpqrstvwxyz"
    let charsVogais = "aeiou"
    let charsNum = "0123456789"

    let tamanhoSenhaNum2 = 2

    // Letras
    let primeiraLetra = charsConsoantes[Math.floor(Math.random() * charsConsoantes.length)].toUpperCase()
    let letraDoMeio = charsVogais[Math.floor(Math.random() * charsVogais.length)]
    let terceiraLetra = charsConsoantes[Math.floor(Math.random() * charsConsoantes.length)]
    let senhaLetra2 = primeiraLetra + letraDoMeio + terceiraLetra

    let senhaFinal = senhaLetra2 + senhaLetra2.toLowerCase() + senhaLetra2.toLowerCase() + senhaLetra2.toLowerCase() + senhaLetra2.toLowerCase()

    // Números
    let senhaNum2 = "";
    for (let i = 0; i < tamanhoSenhaNum2; i++) {
        let aleatorioNum = Math.floor(Math.random() * charsNum.length)
        senhaNum2 += charsNum[aleatorioNum]
    }
    
    resEsp2.innerHTML = senhaFinal + senhaNum2
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

// Numeros randomicos:--------------------------------------
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