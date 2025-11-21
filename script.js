let cardContainer=document.querySelector(".container");
let dados=[]
let campoBusca= document.querySelector("header input"); 

async function iniciarBusca(){
    if (dados.length===0){
        try{
            let resposta= await fetch("data.json");
            dados= await resposta.json();
        } catch (erro){
            console.error("Erro ao buscar os dados:", erro);
            return;
        }
}
const termoBusca= campoBusca.value.toLowerCase();
const dadosFiltrados= dados.filter(dado=>
    dado.Nome.toLowerCase().includes(termoBusca) ||
    dado.Ano.toString().includes(termoBusca) ||
    dado.Descrição.toLowerCase().includes(termoBusca) ||
    dado.Paradigma.toLowerCase().includes(termoBusca) ||
    dado.UsoComunum.toLowerCase().includes(termoBusca) ||
    dado.NivelDificuldade.toLowerCase().includes(termoBusca)
);

renderizarCards(dadosFiltrados);
}


function renderizarCards(dados){
    cardContainer.innerHTML="";
    for (let dado of dados){
        let article=document.createElement("article");
        article.classList.add("card");
        article.innerHTML=`
        <div class="card-header">
            <img src="${dado.Imagem}" alt="${dado.Nome}" class="player-image" onerror="this.src='https://via.placeholder.com/150x200/0066CC/FFFFFF?text=${dado.Nome}'">
            <h2>${dado.Nome}</h2>
        </div>
        <p><strong>Ano:</strong> ${dado.Ano}</p>
        <p>${dado.Descrição}</p>
        <p><strong>Paradigma:</strong> ${dado.Paradigma}</p>
        <p><strong>Uso Comum:</strong> ${dado.UsoComunum}</p>
        <p><strong>Nível de Dificuldade:</strong> ${dado.NivelDificuldade}</p>
        `;
        cardContainer.appendChild(article);
    }
}

// Carregar todos os dados automaticamente quando a página carregar
async function carregarDados(){
    try{
        let resposta= await fetch("data.json");
        dados= await resposta.json();
        renderizarCards(dados);
    } catch (erro){
        console.error("Erro ao buscar os dados:", erro);
    }
}

// Executar quando a página carregar
carregarDados();