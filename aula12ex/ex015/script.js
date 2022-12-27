function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
    if(fano.value.lengh == 0 || Number(fano.value) > ano){
    window.alert('Verifique os dados e tente   novamente')
    } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ""
      var img = document.createElement('img')
      img.setAttribute('id','foto')
      if (fsex [0].checked) {
        genero = 'masculino'

        if (idade =>0 && idade <10){
            //criança
            img.setAttribute('src','crainca-menino.png')

        } else if(idade <21) {
            //jovem
            img.setAttribute('src','adolescente-menino.png')      
        }else if (idade <50){
            //adulto
            img.setAttribute('src', 'adulto-homen.png')
        }else  {  
            //idoso
            img.setAttribute('src,','idoso-homen.png')
        } 
      }else if (fsex[1].checked) {
        genero = 'feminino'
        if (idade =>0 && idade <10){
            //criança
            img.setAttribute('src','crianca-menina.png')
        }else if ( idade <21){
            //jovem
            img.setAttribute('src','adolescente-menina.png')    
        }else if (idade <50){
            //adulto
            img.setAttribute('src','adulto-mulher.png')
        }else {  
            //idoso
            img.setAttribute('src,','idoso-mulher.png')
        }
        
      } 
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos`
      res.appendChild(img)
       
      

    }

}