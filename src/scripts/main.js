AOS.init();

const dataDoAninersario = new Date("Sep 05, 2035 19:00:00")
const timeStampDoAniversario = dataDoAninersario.getTime()

const contaAsHoras = setInterval(function() {
const agora = new Date()
const timeStampAtual = agora.getTime()

const distanciaAteOAniversario = timeStampDoAniversario - timeStampAtual

const diaEmMs = 1000 * 60 * 60 * 24
const horaEmMs = 1000 * 60 * 60
const minutosEmMs = 1000 * 60

const diasAteOAniversario = Math.floor(distanciaAteOAniversario / diaEmMs)
const horasAteOAniversario = Math.floor((distanciaAteOAniversario % diaEmMs) / horaEmMs)
const minutosAteOAniversario = Math.floor((distanciaAteOAniversario % horaEmMs) / minutosEmMs)
const segundosAteOAniversario = Math.floor((distanciaAteOAniversario % minutosEmMs) / 1000)

document.getElementById('contador').innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`

if (distanciaAteOAniversario < 0) {
    clearInterval(contaAsHoras)
    document.getElementById('contador').innerHTML = "Obrigado a todos que compareceram!!!"
}

}, 1000)