const nomes = ['Caio', 'Jorge', 'Gogo']
console.log(nomes[0])

function gerarAleatorio(){
    const numeroAleatorio = Math.floor(Math.random() * 4)
    return numeroAleatorio
}

function sortearNome(){
    let numeroSorteado = numeroAleatorio()
    console.log(nomes(numeroSorteado))
}
