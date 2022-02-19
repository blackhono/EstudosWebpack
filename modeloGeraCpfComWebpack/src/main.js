import GeraCPF from './modules/geraCPF';

//IIE imediat invoque expression

(function(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerText = gera.geraNovoCPF();

})();


import './style.css';