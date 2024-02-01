import { NegociacoesView } from "./views/negociacoes-view.js";
import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form') as HTMLElement;
form.addEventListener('submit', event =>{
    event.preventDefault();
    controller.adiciona();
});

const botaoImporta = document.querySelector('#botao-importa')

if(botaoImporta){
    botaoImporta.addEventListener('click', ()=>{
        controller.importaDados();
    })
}else{
    throw Error('Botão importa não foi encontrado')
}