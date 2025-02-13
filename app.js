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

const produtos = [
    {nome: 'Uniforme Home SPFC',
        descricao: 'Camiseta usada pelo São paulo futebol clube em partidas jogadas em casa', 
        icon:'camisa1.png', 
        cor:'black', 
        preco:'R$ 499,99', 
        tamanhos: ['P', 'M', 'G', 'EG', 'EGG', 'GG2', 'GG3']},
    {nome: 'Uniforme Away SPFC', 
        descricao: 'Camiseta usada pelo São paulo futebol clube em partidas jogadas fora de casa',
        icon:'camisa2.jpg', 
        cor:'red', 
        preco: 'R$ 349,99',
        tamanhos: ['P', 'M', 'G', 'EG', 'EGG', 'GG2', 'GG3']},
    {nome: 
        'Uniforme Third SPFC', 
        descricao: 'Camiseta usada pelo São paulo futebol clube em partidas',
        icon:'camisa3.jpg', 
        cor:'black', 
        preco: 'R$ 314,90',
        tamanhos: ['P', 'M', 'G', 'EG', 'EGG', 'GG2', 'GG3']},
    {nome: 
        'Jaqueta Tricolor 2025', 
        descricao: 'Jaqueta usada pelo São Paulo Futebol Clube em momentos do Pré-Jogo em 2025',
        icon:'jaqueta1.png', 
        cor:'grey', 
        preco: 'R$ 427,49',
        tamanhos: ['P', 'M', 'G', 'EG', 'EGG', 'GG2', 'GG3']
    },
    {nome: 
        'Jaqueta Tricolor 2024', 
        descricao: 'Jaqueta usada pelo São Paulo Futebol Clube em momentos do Pré-Jogo em 2024',
        icon:'jaqueta2.png', 
        cor:'red', 
        preco: 'R$ 499,99',
        tamanhos: ['P', 'M', 'G', 'EG', 'EGG', 'GG2', 'GG3']
    }
]

function criarMain(produto){
    const novoProduto = document.createElement('li')
    const novaFoto = document.createElement('img')
    const novoTitulo = document.createElement('h1')
    const novaDesc = document.createElement('span')
    const novoTamanho = document.createElement('ul')
    const novoPreco = document.createElement('p')
    const caixa = document.createElement('div')
    const botaoComprar = document.createElement('button')
    const listar = document.getElementById('cards') 
    const quadrados = document.createElement('div')

    quadrados.className = "quadrado"


    novoTamanho.className = "tamanhos"

    novoTitulo.textContent = produto.nome
    novaFoto.src = `./imgProdutos/${produto.icon}`
    novaDesc.textContent = produto.descricao
    novoPreco.textContent = produto.preco
    botaoComprar.textContent = "Adicionar ao Carrinho"
    

    caixa.appendChild(novoTitulo)
    caixa.appendChild(novaDesc)
    caixa.appendChild(novaFoto)
    caixa.appendChild(novoPreco)
    caixa.appendChild(novoTamanho)
    caixa.appendChild(botaoComprar)

    produto.tamanhos.forEach(function(tamanho){
        const size = document.createElement("li")
        size.textContent = tamanho
        novoTamanho.appendChild(size)
    })

    novoProduto.appendChild(caixa)
    quadrados.style = `--cor-background: ${produto.cor}`

    quadrados.appendChild(novoProduto)



    listar.appendChild(quadrados)


}


disciplinas.forEach(criarMenu)
produtos.forEach(criarMain)