function carregar (){
    var msg = document.querySelector('.msg');
    var img = document.querySelector('.imagem');
    var msg2 = document.querySelector ('.msg2')
    var data = new Date();
    //var hora = getHours();
    var hora = 19;

    msg.innerHTML = `Agora são ${hora} horas <br><br>`
    msg2.innerHTML = `Hoje é ${data.toLocaleDateString()}`

    if (hora >= 0 && hora < 12){
        img.src = 'https://www.novotempo.com/wp-content/uploads/2020/04/Amanhecer01.jpg'
        document.body.style.background='#783b2e'
        
    }else if (hora >= 12 && hora < 18){
        img.src = 'https://www.essemundoenosso.com.br/wp-content/uploads/2016/12/por-do-sol-em-itacare-1.jpg'
        document.body.style.background = '#fcd925'
    }else if (hora >= 18 ){
        img.src = 'https://imgmd.net/images/v1/guia/1607726/itacare.jpg'
        document.bodyy.style.background = '#3c00ff'
    }

}