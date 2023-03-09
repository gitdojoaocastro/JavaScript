function contar() {
    var inicio = parseInt(document.querySelector('input[name="inicio"]').value)
    var fim = parseInt(document.querySelector('input[name="fim"]').value)
    var passo = parseInt(document.querySelector('input[name="passo"]').value)
    var cont = document.querySelector('input[id="contar"]')
    var res = document.querySelector('div#res')

    if (isNaN(inicio) || isNaN(fim) || (inicio == null) || (fim == null)){
        res.innerHTML = '<br>Verifique o valor e tente novamente'
    } else if (isNaN(passo) || passo == 0) {
        alert('Passo errado, considerando passo 1')
        passo = 1
        res.innerHTML = 'Contando...'
        for (var contagem = inicio; contagem <= fim; contagem += passo){
            res.innerHTML += `${contagem}, `
        }
    } else {
        res.innerHTML = 'Contando...'
        for (var contagem = inicio; contagem <= fim; contagem += passo){
                res.innerHTML += `${contagem} `
            }
    }
    res.innerHTML += `\u{1F6A9}`
}