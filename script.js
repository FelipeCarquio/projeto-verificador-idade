function verificador() {
    var data = new Date()
    var ano = data.getFullYear()
    var resano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (resano.value.length <= 3 || resano.value > ano) {
        alert('[ERRO] preeencha os dados e tente novamente!')
    } else {
        var rsex = document.getElementsByName('radsex')
        var idade = ano - resano.value
        var genero = ''
        var foto = document.createElement('div')
        foto.setAttribute('id', 'rosto')
        if (rsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 11) {
                foto.style.background = 'url(imagens/menino.jpg) center center  no-repeat'
            } else if (idade < 21) {
                foto.style.background = 'url(imagens/jovem_h.jpg) center top no-repeat'
            } else if (idade < 60) {
                foto.style.background = 'url(imagens/homem.jpg) center top no-repeat'
            } else {
                foto.style.background = 'url(imagens/senhor.jpg) center center no-repeat'
                foto.style.backgroundSize = 'contain'
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 11) {
                foto.style.background = 'url(imagens/menina.jpg) center center  no-repeat'
            } else if (idade < 21) {
                foto.style.background = 'url(imagens/jovem_m.jpg) center top no-repeat'
                foto.style.backgroundSize = 'contain'
            } else if (idade < 60) {
                foto.style.background = 'url(imagens/mulher.jpg) center top no-repeat'
                foto.style.backgroundSize = 'contain'
            } else {
                foto.style.background = 'url(imagens/senhora.jpg) center center no-repeat'
                foto.style.backgroundSize = 'contain'
            }
        }
        res.innerHTML = `Você é um(a) ${genero} de ${idade} anos.`
        res.appendChild(foto)
    }


}