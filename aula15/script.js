

function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var FAno = document.querySelector('#txtano')
    var res = document.querySelector('.res')
    // res é class = .

   if(FAno.value.length ==0 || FAno.value > ano){
    window.alert('Verifique os dados e tente novamente')
   } else {
    var fsex = document.getElementsByName ('radsex')
    // radsex[0]=mas ,[1]= fem
    var idade = ano - Number(FAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        genero = 'homen'
        if ( idade < 10){
            img.setAttribute('src','crainca-menino.png')
        }else if (idade < 21){
            img.setAttribute('src','adolescente-menino.png')
        } else if ( idade <50){
            img.setAttribute('src','adulto-homen.png')
        } else{
            img.setAttribute('src','idoso-homen.png')
        }

    } else if(fsex [1].checked) {
        genero = ' Mulher'
        if (idade >= 0 && idade < 10){
            img.setAttribute('src','crianca-menina.png')
        }else if ( idade < 21){
            img.setAttribute('src','adolescente-menina.png')
        } else if ( idade <50){
            img.setAttribute('src','adulto-mulher.png')
        } else{
            img.setAttribute('src','idoso-mulher.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `voce é ${genero} com ${idade}`
    res.appendChild(img)

   }


}

console.log( verificar);

