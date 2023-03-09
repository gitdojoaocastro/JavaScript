function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anodig = document.querySelector('input[name="anonas"]')
    var res = document.querySelector('div#res')
    if (anodig.value.length == 0 || anodig.value > ano) {
        window.alert('Verifique os dados inseridos e tente novamente.')
    } else {
        var rsex = document.getElementsByName('radsex')
        var idade = ano - anodig.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (rsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'homem-bebe.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src','homem-jovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src','homem-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src','homem-idoso.png')
            }
        } else if (rsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'mulher-bebe.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src','mulher-jovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src','mulher-adulta.png')
            } else {
                // Idoso
                img.setAttribute('src','mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        var divpad = document.createElement('div')
        divpad.style.padding = '10px'
        res.appendChild(divpad)
        res.appendChild(img)
    }
}