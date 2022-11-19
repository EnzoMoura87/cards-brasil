let cards = document.querySelector('.cards')

fetch('jogadores-brasil.json')   //buscar no arquivo json    .then = então
.then(Response => Response.json())  //transformar a resposta do arquivo em json -- primeiramente me retorna uma promessa que precisa ser transformada em um formato de dados legivel
.then(data => data.forEach(jogador => {
    //criar um card padrao
    let card = document.createElement('div');
    card.classList.add('card');

    //colocar cada card dentro da div cards
    cards.appendChild(card)

    //preencher os dados de cada jogador

    card.innerHTML = `
    <span class="posicaoP">${jogador.posicao}</span>
    <span class="posicaoG">${jogador.posicao}</span>
    <img class="escudo" src="images/escudos/${jogador.escudo}.png" alt="">
    <img class="jogador" src="images/jogadores/${jogador.foto}.png" alt="">
    <h2 class="nome">${jogador.nome}</h2>
    <h3 class="numero">${jogador.numero}</h3>
    `
})
)  // pega os dados do response e expoe ele