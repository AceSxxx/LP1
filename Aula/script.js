const futuro = ['Você vai Morre', 'Você vai piscar', 'Você vai respirar', 'jorge']
console.log(futuro[0])

function gerarAleatorio(){
    const futuroAleatorio = Math.floor(Math.random() * 4)
    return futuroAleatorio
}

function sortearFuturo(){
    let futuroSorteado = futuroAleatorio()
    console.log(futuro(futuroSorteado))
}