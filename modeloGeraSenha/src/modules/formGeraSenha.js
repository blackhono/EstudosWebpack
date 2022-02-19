import geraSenha from './geradores';
//entrada
const Inputquantidade = document.querySelector('.input-quantity');
const chkNumero = document.querySelector('.chk-number');
const chkMaiuscula = document.querySelector('.chk-upperCase');
const chkMinuscula = document.querySelector('.chk-downCase');
const chkSymbol = document.querySelector('.chk-symbol');
const btngerarSenha = document.querySelector('.btn-gera-senha');
const labelApertaAi = document.querySelector('.label-apertaAi'); 
//saida
const senhaGerada = document.querySelector('.senha-gerada');

export default () => {
    btngerarSenha.onclick=(()=>{
        console.log('fui clickado');
        //console.log(gera());
        setTimeout(()=>{
            senhaGerada.innerText = gera();
        }, 2000)

        labelApertaAi.innerText = 'Hmmmmm... avaliando...'
        
        setTimeout(()=>{
            if(senhaGerada.innerText === 'Nada selecionado'){
                labelApertaAi.innerText = 'Faltou dados'
            } else {
                labelApertaAi.innerText = 'Parece uma boa senha!'
            }
        }, 2000)
    })
    btngerarSenha.onmouseover=(()=>{
        //console.log('passaram por cima de mim');
        labelApertaAi.innerText = 'Aperta ai e veja sua nova senha'
    })
    btngerarSenha.onmouseout=(()=>{
        if(labelApertaAi.innerText !== 'Hmmmmm... avaliando...') labelApertaAi.innerText = ''
    })

}
console.log('função apenas para o Export em Main');


    const gera = () => {
    const senha = geraSenha(
        Inputquantidade.value,
        chkNumero.checked,
        chkMaiuscula.checked,
        chkMinuscula.checked,
        chkSymbol.checked
        );
    return senha || "Nada selecionado";
}