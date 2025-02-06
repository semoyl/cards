'use strict'

const disciplinas = [
    {nome:'PPDM', icon:'android.png'},
    {nome:'PRO', icon:'telaclick.png'},
    {nome:'PWBE', icon:'codigo.png'},
    {nome:'PWFE', icon:'telinha.png'}
]

function criarMenu(disciplina) {
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoTexto = document.createElement('span')
    const lista = document.getElementById('menu')

    novaImagem.src  = `./img/${disciplina.icon}`
    novoTexto.textContent = disciplina.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoTexto)

    lista.appendChild(novoItem)
}

disciplinas.forEach(criarMenu)