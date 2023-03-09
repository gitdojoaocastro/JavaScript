function clicar() {
    var numdig = parseInt(document.querySelector('input[name="num"]').value)
    var res = document.querySelector('div#res')
    
    res.innerHTML=""
    
    if (isNaN(numdig) || numdig == 0) {
        alert('Verifique os números e tente novamente')
    } else {
        for (var i = 1; i <= 10; i++) {
            res.innerHTML += numdig + " x " + i + " = " + (numdig * i) + "<br>"
        }
    }
}