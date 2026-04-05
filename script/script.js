function openModal(Produtos) {
    var txt1 = document.getElementById("txt1");
    var txt2 = document.getElementById("txt2");
    var txt3 = document.getElementById("txt3");

      //Funçoes do da pagina inicial com os mais vendidos//
    switch (Produtos) {
        case "NecessarieP.jpg":
            txt1.innerHTML = "Necessarie Pequena";
            txt2.innerHTML = "Necessarie de Tamanho P";
            txt3.innerHTML = "R$10,00";
            break;
        case "BonecaEVA.jpg":
            txt1.innerHTML = "Boneca de EVA";
            txt2.innerHTML = "Linda boneca feita de EVA.";
            txt3.innerHTML = "R$35,00";
            break;
        case "PortaTesoura.jpg":
            txt1.innerHTML = "Porta Tesoura";
            txt2.innerHTML = "Porta tesoura customizavel";
            txt3.innerHTML = "R$18,00";
            break;
        //Segunda Linha dos mais vendidos
        case "Almofada.jpg":
            txt1.innerHTML = "Almofada";
            txt2.innerHTML = "Almofada feita com retalhos de Tecidos";
            txt3.innerHTML = "R$40,00";
            break;
        case "NecessarieM.jpg":
            txt1.innerHTML = "Necessarie M";
            txt2.innerHTML = "Necessarie de Tamanho M";
            txt3.innerHTML = "R$14,00";
            break;
        case "LuvasDeForno.jpg":
            txt1.innerHTML = "Luvas De Forno";
            txt2.innerHTML = "Luvas para não se queimar no forno";
            txt3.innerHTML = "R$19,00";
            break;
            
        default:
            txt1.innerHTML = "Título desconhecido";    
            txt2.innerHTML = "Descrição não disponível.";
            txt3.innerHTML = "R$0,00";
    }

    var modal = document.getElementById("knowMore");
    modal.style.display = "block";
    const button = event.target; 
    const rect = button.getBoundingClientRect(); 
    
    modal.style.left = `${rect.left + rect.width / 2}px`; 
    modal.style.top = `${rect.bottom}px`;
}
  //Funçoes do Catalogo//

function OpenDescricao(Produtos, botao) {
    var txt1 = document.getElementById("txt1");
    var txt2 = document.getElementById("txt2");
    var txt3 = document.getElementById("txt3");

    switch (Produtos) {
        case "Almofada.jpg":
            txt1.innerHTML = "Almofada";
            txt2.innerHTML = "Almofada feita com retalhos de Tecidos";
            txt3.innerHTML = "R$40,00";
            break;
        case "BolsaDeRemedio.jpg":
            txt1.innerHTML = "Bolsa De Remedio";
            txt2.innerHTML = "Bolsa perfeita para levar remedios em uma viagem";
            txt3.innerHTML = "R$10,00";
            break;    
        case "BonecaEVA.jpg":
            txt1.innerHTML = "Boneca de EVA";
            txt2.innerHTML = "Linda boneca feita de EVA.";
            txt3.innerHTML = "R$35,00";
            break;
        case "Brinco.jpg":
            txt1.innerHTML = "Brinco";
            txt2.innerHTML = "Lindos Brincos feitos de Acordo com seu gosto";
            txt3.innerHTML = "R$7,00";
            break;
        case "DescansoDePescoco.jpg":
            txt1.innerHTML = "Descanso de Pescoço";
            txt2.innerHTML = "Descanso de Pescoço perfeito para viagens";
            txt3.innerHTML = "R$15,00";
            break;
        case "FlorDeTecido.jpg":
            txt1.innerHTML = "Flor de Tecido";
            txt2.innerHTML = "Tulipa feita de Tecido";
            txt3.innerHTML = "R$1,50";
            break;
        case "LuvasDeForno.jpg":
            txt1.innerHTML = "Luvas De Forno";
            txt2.innerHTML = "Luvas para não se queimar no forno";
            txt3.innerHTML = "R$19,00";
            break;
        case "Mascara.jpg":
            txt1.innerHTML = "Mascara";
            txt2.innerHTML = "Mascaras de tecido para sua proteção e conforto";
            txt3.innerHTML = "R$7,00";
            break;
        case "NecessarieP.jpg":
            txt1.innerHTML = "Necessarie Pequena";
            txt2.innerHTML = "Necessarie de Tamanho P";
            txt3.innerHTML = "R$10,00";
            break;
        case "NecessarieM.jpg":
            txt1.innerHTML = "Necessarie M";
            txt2.innerHTML = "Necessarie de Tamanho M";
            txt3.innerHTML = "R$14,00";
            break;
        case "PortaAgulha.jpg":
            txt1.innerHTML = "Porta Agulha";
            txt2.innerHTML = "Porta Agulha perfeito para o seu canto da Costura";
            txt3.innerHTML = "R$8,00";
            break;
        case "PortaCaneta.jpg":
            txt1.innerHTML = "Porta Caneta";
            txt2.innerHTML = "Porta Caneca customizavel";
            txt3.innerHTML = "R$7,00";
            break;
        case "PortaChinelo.jpg":
            txt1.innerHTML = "Porta Chinelo";
            txt2.innerHTML = "Porta Chinelo perfeito para a praia";
            txt3.innerHTML = "R$12,00";
            break;
        case "PortaDoce.jpg":
            txt1.innerHTML = "Porta Doce";
            txt2.innerHTML = "Perfeito para decorações com Bombom";
            txt3.innerHTML = "R$3,00";
            break;
        case "PortaMoedas.jpg":
            txt1.innerHTML = "Porta Moedas";
            txt2.innerHTML = "Bolsa perfeita para manter suas moedas organizadas";
            txt3.innerHTML = "R$7,00";
            break;
        case "PortaTesoura.jpg":
            txt1.innerHTML = "Porta Tesoura";
            txt2.innerHTML = "Porta tesoura para oferecer mais segurança";
            txt3.innerHTML = "R$18,00";
            break;
        case "Pulseira.jpg":
            txt1.innerHTML = "Pulseiras";
            txt2.innerHTML = "Pulseiras criadas do jeito que voce quiser";
            txt3.innerHTML = "R$10,00";
            break;
        case "PulseiraParaCelular.jpg":
            txt1.innerHTML = "Pulseiras para Celular";
            txt2.innerHTML = "Pulseiras para colocar na capinha do celular";
            txt3.innerHTML = "R$15,00";
            break;
        case "ToucaDeCetim.jpg":
            txt1.innerHTML = "Touca de Cetim ";
            txt2.innerHTML = "Touca de Cetim para manter seu cabelo longe do Frizz";
            txt3.innerHTML = "R$12,00";
            break;
        case "VasoDeFlor.jpg":
            txt1.innerHTML = "Vaso de Flor";
            txt2.innerHTML = "Pequeno Vaso de Flor feito a partir de EVA";
            txt3.innerHTML = "R$40,00";
            break;
            
            
        default:
            txt1.innerHTML = "Título desconhecido";    
            txt2.innerHTML = "Descrição não disponível.";
            txt3.innerHTML = "R$0,00";
    }

    var modal = document.getElementById("knowMore");
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

