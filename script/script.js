// JOGOS DISPONIVEIS NO SITE
const meusJogos = [
    { 
        nome: "Dark Souls III", 
        plataforma: "ps4", 
        img: "DARK_SOULS_III.jpg", 
        preco: "190,00", 
        raridade: "Edição completa", 
        estado: "Excelente", 
        status: "Venda/Troca" 
    },
    { 
        nome: "Ghost Recon Wildlands", 
        plataforma: "ps4", 
        img: "GHOST_RECON_WILD.jpg", 
        preco: "80,00", 
        raridade: "Comum", 
        estado: "Bom", 
        status: "Apenas Venda" 
    },
    { 
        nome: "Bloodborne", 
        plataforma: "ps4", 
        img: "Bloodborne.jpg", 
        preco: "80,00", 
        raridade: "Playstaton Hits", 
        estado: "Excelente", 
        status: "Venda/Troca" 
    },
    { 
        nome: "God of War 4", 
        plataforma: "ps4", 
        img: "GODOFWAR4.jpg", 
        preco: "60,00", 
        raridade: "Bundle", 
        estado: "Bom", 
        status: "Apenas Venda" 
    },
    { 
        nome: "Assasins Cred Black Flag", 
        plataforma: "ps3", 
        img: "Assassins_Creed_Black.jpg", 
        preco: "80,00", 
        raridade: "Comun", 
        estado: "Bom", 
        status: "Venda" 
    },,
    { 
        nome: "Deadrising 3", 
        plataforma: "Xbox One", 
        img: "DEADRISING_3.jpg", 
        preco: "80,00", 
        raridade: "Comun", 
        estado: "Bom", 
        status: "Venda" 
    },,
    { 
        nome: "Detroit Become Human", 
        plataforma: "ps4", 
        img: "DETROIT_BECOME_HUMAN.jpg", 
        preco: "80,00", 
        raridade: "Comun", 
        estado: "Bom", 
        status: "Venda" 
    },,
    { 
        nome: "Bloodborne", 
        plataforma: "ps5", 
        img: "Bloodborne.jpg", 
        preco: "80,00", 
        raridade: "Playstaton Hits", 
        estado: "Excelente", 
        status: "Venda/Troca" 
    },,
    { 
        nome: "Bloodborne", 
        plataforma: "ps4", 
        img: "Bloodborne.jpg", 
        preco: "80,00", 
        raridade: "Playstaton Hits", 
        estado: "Excelente", 
        status: "Venda/Troca" 
    },,
    { 
        nome: "Bloodborne", 
        plataforma: "ps4", 
        img: "Bloodborne.jpg", 
        preco: "80,00", 
        raridade: "Playstaton Hits", 
        estado: "Excelente", 
        status: "Venda/Troca" 
    },,
    { 
        nome: "Bloodborne", 
        plataforma: "ps4", 
        img: "Bloodborne.jpg", 
        preco: "80,00", 
        raridade: "Playstaton Hits", 
        estado: "Excelente", 
        status: "Venda/Troca" 
    },

];

// RENDERIZA OS JOGOS NO SITE
function renderizarJogos(lista) {
    const container = document.getElementById('container-jogos');
    if (!container) return; // Segurança caso não esteja na página de catálogo

    container.innerHTML = ""; 

    lista.forEach(jogo => {
        const card = `
            <div class="menu" data-plataforma="${jogo.plataforma}">
                <img class="imgStamp" src="img/${jogo.img}">
                <input class="modalButton" type="button" value="${jogo.nome}" 
                       onclick="exibirDetalhes('${encodeURIComponent(JSON.stringify(jogo))}', this)">
                <button class="btn-comprar" onclick="enviarWhatsApp('${jogo.nome}')">
                    Quero Comprar
                </button>
            </div>
        `;
        container.innerHTML += card;
    });
}

//REALIZA O FILTRO E BUSCAS DO SITE
function filtrarTudo() {
    const busca = document.getElementById('buscaProduto').value.toLowerCase();
    const filtroPlataforma = document.getElementById('filtroPlataforma').value;

    const jogosFiltrados = meusJogos.filter(jogo => {
        const bateNome = jogo.nome.toLowerCase().includes(busca);
        const batePlataforma = (filtroPlataforma === 'todas' || jogo.plataforma === filtroPlataforma);
        return bateNome && batePlataforma;
    });

    renderizarJogos(jogosFiltrados);
}

//MODAL 
function exibirDetalhes(jogoRaw, botao) {
    const jogo = JSON.parse(decodeURIComponent(jogoRaw));
    
    const txt1 = document.getElementById("txt1");
    const txt2 = document.getElementById("txt2");
    const txt3 = document.getElementById("txt3");
    const modal = document.getElementById("knowMore");

    txt1.innerHTML = `<strong>${jogo.nome}</strong>`;
    txt2.innerHTML = `
        <b>Preço:</b> R$ ${jogo.preco}<br>
        <b>Plataforma:</b> ${jogo.plataforma.toUpperCase()}<br>
        <b>Estado:</b> ${jogo.estado}<br>
        <b>Raridade:</b> ${jogo.raridade}
    `;
    txt3.innerHTML = `<b>Disponível para:</b> ${jogo.status}`;

    modal.style.display = "block";

    if (window.innerWidth > 768) {
        const rect = botao.getBoundingClientRect();
        modal.style.left = `${rect.left + rect.width / 2}px`;
        modal.style.top = `${rect.bottom + window.scrollY}px`;
        modal.style.transform = "translateX(-50%)";
    }
}

function closeModal() {
    document.getElementById("knowMore").style.display = 'none';
}

function enviarWhatsApp(nomeProduto) {
    const numeroTelefone = "5541995467349"; 
    const mensagem = `Olá! tenho interesse no jogo: ${nomeProduto}`;
    window.open(`https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`, '_blank');
}

// renderização
window.onload = () => {
    renderizarJogos(meusJogos);
};