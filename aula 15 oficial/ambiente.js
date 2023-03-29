let num = [1,2,"Matheus",4]

const num1 = [1,4,3,6,5]

num[4]= "carlos"

num.push(5,"alves")
// para inserir sem na ultimo indice novo do array

num.length
// para saber o tamanho do array

num1.sort()
//coloca todos elementos em ordem crescente

console.log(num[2], num)

console.log(`o tamanho do array num é ${num.length}`)

console.log(num1.sort())

let pos = num.indexOf('matheus')
if ( pos == -1){
    console.log(`valor ${pos} não foi encontrador`)
}

console.log(pos)


