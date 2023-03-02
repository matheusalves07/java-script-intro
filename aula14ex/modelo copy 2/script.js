function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('#res')




    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'impossivel contar'
        window.alert('[ERRO] falta dados')

    } else {
        res.innerHTML = `Contando: <br>`
        let i =  Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0 ){
            window.alert('Passo invalido! Considerando passo 1')
            p = 1
        }

        if(i < f){
            // contagem crescente
            for(let c= i; c <= f; c+= p){
                res.innerHTML += `${c} \u{1F3CA}`
            }
            
        } else {
            //contagem regressiva
            for (let c = i; c>= f; c -= p){
                res.innerHTML += `${c} \u{1F3CA}`
            }
            
        }
        res.innerHTML += `\u{1F3F3}`
    }
}