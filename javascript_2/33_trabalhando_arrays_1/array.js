let arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Gimli", "Legolas"]
console.log(arr)

//Add elementos no final da fila: push
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)


//adiciona elementos no início da fila: unshift
tamanho = arr.unshift("Aragorn")
console.log(arr)
console.log(tamanho)

//remover último elementos: pop
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//Remover no início do array: shift
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// verificar se elemento existe: includes.
let inclui = arr.includes("Sam")
console.log(inclui)

// pesquiser elemento pelo índice: indexOf
let indice = arr.indexOf("Sam")
console.log(indice)

// cortar e concatenar arrays:
// cortar: slice
let hobbits = arr.slice(0, 5)
console.log(hobbits)

let outros = arr.slice(-5)
console.log(outros)

// concatenar: concat
let sociedade = hobbits.concat(outros, "Jonathan", "Alex", "Rita", "Helena")
console.log(sociedade)

// substituição do elementos: 
let novaSociedade = sociedade.splice(indice, 3, "Maria")
console.log(novaSociedade)
console.log(sociedade)

// iterar sobre elementos do array:
for (let i = 0; i < sociedade.length; i++){
  let elemento = sociedade[i]
  console.log(elemento + " está na posição " + i)
}


