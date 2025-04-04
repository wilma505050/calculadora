// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function(){
    // Seleciona os elementos do menu de acessibilidade
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
 
    // Adiciona evento de clique no botão de acessibilidade
    botaoDeAcessibilidade.addEventListener('click', function (){
        // Alterna a rotação do botão
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        // Mostra/esconde as opções de acessibilidade
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
 
        // Atualiza o atributo ARIA para acessibilidade
        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
    })
 
    // Seleciona os botões de controle de fonte e contraste
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste')
 
    // Variável para controlar o tamanho atual da fonte
    let tamanhoAtualFonte = 1;
 
    // Evento para aumentar a fonte
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1; // Aumenta o tamanho em 0.1rem
        document.body.style.fontSize = `${tamanhoAtualFonte}rem` // Aplica o novo tamanho
    })
 
    // Evento para diminuir a fonte
    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1; // Diminui o tamanho em 0.1rem
        document.body.style.fontSize = `${tamanhoAtualFonte}rem` // Aplica o novo tamanho
    })
 
    // Evento para alternar o modo de alto contraste
    alternaContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste') // Adiciona/remove a classe
    })
})

// Configurações de animação com ScrollReveal para cada seção
ScrollReveal().reveal('#inicio', { delay: 500 }); // Animação para seção inicial
ScrollReveal().reveal('#tropicalia', { delay: 500 }); // Animação para seção tropicalia
ScrollReveal().reveal('#galeria', { delay: 500 }); // Animação para galeria
ScrollReveal().reveal('#contato', { delay: 500 }); // Animação para contato

// Evento de submit para o formulário de IMC
document.getElementById('form-imc').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Obtém os valores de peso e altura
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    // Validação dos campos
    if (!peso || !altura || altura === 0) {
        resultado.style.display = 'block'; // Mostra o resultado
        resultado.className = 'alert alert-danger'; // Estilo de erro
        resultado.innerText = 'Por favor, preencha corretamente peso e altura.';
        return; // Interrompe a execução
    }

    // Cálculo do IMC
    const imc = peso / (altura * altura);
    let classificacao = ''; // Variável para armazenar a classificação

    // Determina a classificação com base no valor do IMC
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
        classificacao = 'Obesidade grau 1';
    } else if (imc < 39.9) {
        classificacao = 'Obesidade grau 2';
    } else {
        classificacao = 'Obesidade grau 3';
    }

    // Exibe o resultado
    resultado.style.display = 'block';
    resultado.className = 'alert alert-info'; // Estilo informativo
    // Formata o resultado com HTML
    resultado.innerHTML = `<strong>Seu IMC é ${imc.toFixed(2)}</strong><br>${classificacao}`;
});