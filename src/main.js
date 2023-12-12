let nomeHeroi = "";
let heroiEscolhido = "";

let forcaAtaque = 0;
let forcaDefesa = 0;
let arma = "";

let novoHeroi = "";

let textoNomeHeroi = document.getElementById("nomeHeroiFornecido");
let imagemHeroi = document.getElementById("imagemHeroi");


let mensagem;

class criarHeroi{
    constructor(nome, heroi){
        this.nome = nome,
        this.heroi = heroi
    }

    estimarForcaAtaqueEDefesa(){
        if(this.heroi === "mago"){
            forcaAtaque = 7;
            forcaDefesa = 6;
        }else if(this.heroi === "guerreiro"){
            forcaAtaque = 9;
            forcaDefesa = 8;
        }else if(this.heroi === "ninja"){
            forcaAtaque = 8;
            forcaDefesa = 8;
        }else if(this.heroi === "arqueiro"){
            forcaAtaque = 8;
            forcaDefesa = 5;
        }else if(this.heroi === "viking"){
            forcaAtaque = 9;
            forcaDefesa = 9;
        }else if(this.heroi === "tech"){
            forcaAtaque = 7;
            forcaDefesa = 9;
        }
    }

    estimarArma(){
        if(this.heroi === "mago"){
            arma = "magia";
        }else if(this.heroi === "guerreiro"){
            arma = "espada";
        }else if(this.heroi === "ninja"){
            arma = "sai";
        }else if(this.heroi === "arqueiro"){
            arma = "flecha";
        }else if(this.heroi === "viking"){
            arma = "machado";
        }else if(this.heroi === "tech"){
            arma = "laser";
        }        
    }

}


function enviarDados() {    
    nomeHeroi = document.getElementById("nomeHeroi").value;
    heroiEscolhido = document.getElementById("tipoHero").value;
    

    if(nomeHeroi.length > 0 && heroiEscolhido.length > 0){
        novoHeroi = new criarHeroi(nomeHeroi, heroiEscolhido);
        novoHeroi.estimarForcaAtaqueEDefesa();
        novoHeroi.estimarArma();

        textoNomeHeroi.innerText = nomeHeroi;
        imagemHeroi.src = `src/images/${heroiEscolhido}.png`

        mensagem = `O ${heroiEscolhido} atacou usando ${arma} \n \n Ataque: ${forcaAtaque}  || Defesa: ${forcaDefesa}`;             
    }else{
        mensagem = "Insira e/ou escolha um nome válido"
    }
     document.getElementById("resultado").innerText= mensagem;   

    
    nomeHeroi.value = "";
    heroiEscolhido.value = "";
    mensagem = "";
    
    forcaAtaque = 0;
    forcaDefesa = 0;
    arma = "";

    novoHeroi = "";
}

