function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML=(`Agora são ${hora.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`)
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = "fotomanha.png"
        img.style.marginLeft = '10px'
        document.body.style.background = "#b0a77a"
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = "fototarde.png"
        img.style.marginLeft = '10px'
        document.body.style.background = "#9a6460"
    } else {
        // Boa noite!
        img.src = "fotonoite.png"
        img.style.marginLeft = '10px'
        document.body.style.background = "#122129"
    }
}