function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //bom dia 
        img.src = 'manha.png'
        document.body.style.background = '#783b2e'
    }else if (hora >=12 && hora < 18){
        // boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#fcd925'
    }else if(hora >=18){
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#3c00ff'
    } 
   
}



