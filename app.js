'use strict'

const disciplinas = [
    {nome:'PPDM', icon:'android.png', cor:'blue'},
    {nome:'PRO', icon:'telaclick.png', cor: 'red'},
    {nome:'PWBE', icon:'codigo.png', cor: 'blue'},
    {nome:'PWFE', icon:'telinha.png', cor: 'red'}
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
    novoItem.style = `--cor-hover:${disciplina.cor} `

    lista.appendChild(novoItem)
}

disciplinas.forEach(criarMenu)